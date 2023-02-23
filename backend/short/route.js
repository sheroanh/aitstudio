const express = require("express");
const router = express.Router();
const qrRoute = require("./qr/route/index");
const { authorization } = require("../user/controller/index");
const { newShort, getShort } = require("./controller/index");

router.use("/qr", qrRoute);
router.post("/add", authorization, newShort);
router.get("/get/:pathName", getShort);

module.exports = router;
