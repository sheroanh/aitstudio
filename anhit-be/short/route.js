const express = require("express");
const router = express.Router();
const qrRoute = require(".controller/qr/route/index");
const { authorization } = require("../user/controller/index");

router.use("/qr", qrRoute);
router.all("/", (req, res) => {
  return res.status(403).json({ message: "Can't use this route" });
});
router.post("/add", authorization);

module.exports = router;
