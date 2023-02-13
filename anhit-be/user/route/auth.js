const { response } = require("express");
var express = require("express");
var router = express.Router();
var {
  authorization,
  generateJWT,
  getAuthUrl,
  oAuth2Client,
  callback,
  makeid,
  setCookies,
  redirect,
} = require("../controller/index.js");

router.all("/", function (req, res) {
  return res.sendStatus(403);
});

router.get("/google/login", async (req, res) => {
  const url = getAuthUrl();
  res.json({ data: url });
});
// Handle Redirect URL
router.get("/google/callback", callback, generateJWT, setCookies, redirect);
// Upsert User

//export this router to use in our index.js
module.exports = router;
