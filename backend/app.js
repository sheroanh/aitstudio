require("dotenv").config();
var cors = require("cors");
var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
var userRoute = require("./user/route/index.js");
var shortRoute = require("./short/route.js");
var initialize = require("./database/initialize.js");

var PORT = process.env.PORT || 5000;
var HOSTNAME = process.env.HOSTNAME || "localhost";

const origin = [
  process.env.WEB_BASE_URI,
  "http://localhost:3000",
  "https://sso.anhit.name.vn",
  "http://localhost:3001",
  "https://short.anhit.name.vn",
  "https://s.anhit.name.vn"
];

var corsOptions = {
  origin: origin,
  methods: ["GET", "PUT", "POST"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  credentials: true,
  maxAge: 600,
  exposedHeaders: ["*", "Authorization"],
};

app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors(corsOptions));
app.use("/user", userRoute);
app.use("/short", shortRoute);

app.all("/", function (req, res) {
  res.status(200).json({ message: "Server is running" });
});

app.use((req, res) => {
  return res.status(404).json({
    status: "failure",
    message: "Not Found",
  });
});

app.use((error, req, res, next) => {
  let { statusCode, message } = error;
  statusCode = statusCode ? statusCode : 500;

  res.status(statusCode).json({
    status: "failure",
    message,
  });
});

app.listen(PORT, HOSTNAME, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on ", `http://${HOSTNAME}:${PORT}`);
  initialize(function (err) {
    if (err) throw err;
  });
});
