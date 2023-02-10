var express = require("express");
var router = express.Router();
var { authorization } = require("../controller/index.js");
var auth = require("./auth.js");

router.all("/", function (req, res) {
  return res.sendStatus(403);
});

router.get("/data", authorization, function (req, res) {
  return res.json({ data: req.user });
});

router.get("/logout", authorization, (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out" });
});

router.use("/auth", auth)
//export this router to use in our index.js
module.exports = router;
