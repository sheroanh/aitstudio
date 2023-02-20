require("dotenv").config();
const validator = require("validator");

const jwt = require("jsonwebtoken");
const { query, queryResult } = require("../../utils/sql.js");
const {
  makeId,
  getAuthUrl,
  oAuth2Client,
  googleCallback,
} = require("../../utils/index");

const SECRET_KEY = process.env.SECRET_KEY;
const WEB_BASE_DOMAIN = process.env.WEB_BASE_DOMAIN;
const WEB_BASE_URI = process.env.WEB_BASE_URI;

const generateJWT = async (req, res, next) => {
  try {
    const { id, email, name, picture } = req.user;
    var rows = await queryResult(`SELECT * FROM user WHERE google_id = ?;`, id);
    if (rows.length) {
      query(
        `UPDATE user SET email = ?, display_name = ?, avatar = ? WHERE google_id = ?;`,
        [email, name, picture, id]
      );
    } else
      query(
        `INSERT INTO user(id, email, google_id, display_name, avatar) VALUES (?, ?, ?, ?, ?);`,
        [makeId(6), email, id, name, picture]
      );
    var rows = await queryResult(`SELECT * FROM user WHERE google_id = ?;`, id);
    var token = jwt.sign(rows[0], SECRET_KEY);
    req.token = token;
    return next();
  } catch (err) {
    return next(err);
  }
};

const setCookies = async (req, res, next) => {
  try {
    var token = req.token;
    if (!token) throw new Error("Access Token is missing");
    await res.cookie("access_token", req.token, {
      sameSite: "none",
      secure: true,
      httpOnly: true,
      maxAge: 3600000 * 24 * 30,
    });
    delete token;
    return next();
  } catch (err) {
    return next(err);
  }
};

const googleLoginSuccess = (req, res, next) => {
  const { redirectUrl } = req.query;
  try {
    if (redirectUrl != null) {
      if (!validator.isURL(redirectUrl))
        throw new Error("Invalid redirect URL. Please try again");
      // res.status(200).json({status: "success", data: redirectUrl})
      return res.redirect(redirectUrl)
    } else {
      // res.status(200).json({status: "success", data: process.env.WEB_BASE_URI})
      return res.redirect(process.env.WEB_BASE_URI)
    }
  } catch (err) {
    next(err);
  }
};

const redirect = (req, res, next) => {
  return res.redirect(WEB_BASE_URI);
};

const authorization = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      throw new Error("Token is missing");
    }
    const data = jwt.verify(token, SECRET_KEY);
    const user = await queryResult("SELECT * FROM user WHERE id = ?", [
      data.id,
    ]);
    if (user.length != 1) {
      res.clearCookie("access_token");
      throw new Error("User not found");
    }
    req.user = data;
    return next();
  } catch (err) {
    return next(err);
  }
};

function getData(req, res) {
  return res.status(200).json({
    status: "success",
    data: {
      displayName: req.user.display_name,
      email: req.user.email,
      avatar: req.user.avatar,
    },
  });
}
module.exports = {
  getData,
  authorization,
  generateJWT,
  setCookies,
  redirect,
  googleLoginSuccess,
};
