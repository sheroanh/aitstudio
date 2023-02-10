require("dotenv").config();
var cors = require('cors')
var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
var userRoute = require("./user/route/index.js");
var shortRoute = require("./short/route.js");
var database = require("./database/index.js");
var initialize = require("./database/initialize.js");

var PORT = process.env.PORT || 5000;
var HOSTNAME = process.env.HOSTNAME || "localhost";

var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(cookieParser());
app.use(cors(corsOptions))
app.use("/user", userRoute);
app.use("/short", shortRoute);

app.all("/", function (req, res) {
  res.status(200).json({message: "Server is running"});
});

app.listen(PORT, HOSTNAME, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on ", `http://${HOSTNAME}:${PORT}`);
  initialize(function (err) {
    if (err) throw err;
  });
});
