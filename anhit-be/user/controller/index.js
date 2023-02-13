require("dotenv").config();
const { google } = require("googleapis");
const jwt = require("jsonwebtoken");
const { query, queryResult } = require("../../utils/sql.js");

const SECRET_KEY = process.env.SECRET_KEY;
const WEB_BASE_DOMAIN = process.env.WEB_BASE_DOMAIN;
const WEB_BASE_URI = process.env.WEB_BASE_URI;

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const oAuth2Client = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_API_CLIENT_ID,
  clientSecret: process.env.GOOGLE_API_CLIENT_SECRET,
  redirectUri: process.env.GOOGLE_API_REDIRECT,
});

function getAuthUrl() {
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ],
  });
}

const generateJWT = async (req, res, next) => {
  try {
    const { id, email, name, picture } = req.user;
    var rows = await queryResult(
      `SELECT * FROM user WHERE google_id = '${id}';`
    );
    if (rows.length) {
      query(
        `UPDATE user SET email = '${email}', display_name = '${name}', avatar = '${picture}' WHERE google_id = ${id}`
      );
    } else
      query(
        `INSERT INTO user(id, email, google_id, display_name, avatar) VALUES ('${makeid(
          6
        )}', "${email}", ${id}, '${name}', '${picture}');`
      );
    var rows = await queryResult(
      `SELECT * FROM user WHERE google_id = '${id}';`
    );

    var token = jwt.sign(rows[0], SECRET_KEY);
    req.token = token;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Invaild Google Account" });
  }
};

const setCookies = async (req, res, next) => {
  try {
    var token = req.token;
    if (!token) return res.sendStatus(403);
    await res.cookie("access_token", req.token, {
      sameSite: "none",
      secure: true,
      httpOnly: true,
      maxAge: 3600000 * 24,
      sameSite: "none",
    });
    delete token;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Unknow error!" });
  }
};

const redirect = (req, res, next) => {
  return res.redirect(WEB_BASE_URI);
};

const authorization = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(403).json({ message: "Access token is required" });
    }
    const data = jwt.verify(token, SECRET_KEY);
    req.user = data;
    return next();
  } catch {
    req.user = null;
    return next();
  }
};

const callback = async (req, res, next) => {
  try {
    const { code } = req.query;
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.credentials = tokens;
    const oauth2 = google.oauth2("v2");
    const data = await oauth2.userinfo.v2.me.get({
      auth: oAuth2Client,
    });
    req.user = data.data;
    return next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid request" });
  }
};

module.exports = {
  authorization,
  generateJWT,
  getAuthUrl,
  oAuth2Client,
  callback,
  makeid,
  setCookies,
  redirect,
};
