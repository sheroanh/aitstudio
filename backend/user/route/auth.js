const express = require("express");
const router = express.Router();
const {
  generateJWT,
  setCookies,
  redirect,
  googleLoginSuccess
} = require("../controller/index.js");
const { makeId, getAuthUrl, oAuth2Client, googleCallback } = require("../../utils/index")

router.get("/google/login", async (req, res) => {
  const url = getAuthUrl();
  res.status(200).json({ status: "success", data: url });
});
// Handle Redirect URL
router.get("/google/callback", googleCallback, generateJWT, setCookies, googleLoginSuccess);
// Upsert User

//export this router to use in our index.js
module.exports = router;
