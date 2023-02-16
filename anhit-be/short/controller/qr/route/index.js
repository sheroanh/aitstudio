var express = require("express");
var router = express.Router();
const { qrImgGenerator } = require("../controller/index");

router.get("/get-img", qrImgGenerator);

//export this router to use in our index.js
module.exports = router;
