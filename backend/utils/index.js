require("dotenv").config();
const { google } = require("googleapis");

function makeId(length) {
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
  redirectUri: "postmessage",
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

const googleCallback = async (req, res, next) => {
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
      return next(err);
    }
  };

module.exports = { makeId, getAuthUrl, oAuth2Client, googleCallback };
