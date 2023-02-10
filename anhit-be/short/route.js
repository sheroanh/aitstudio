var express = require("express");
var router = express.Router();
var qrRoute = require("./qr/route/index");

router.use("/qr", qrRoute);
router.all("/", (req, res) =>{
    return res.status(403).json({message: "Can't use this route"})
});

module.exports = router;