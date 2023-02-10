require("dotenv").config();
var mysql = require("mysql");

var DB_HOST = process.env.DB_HOST || "localhost";
var DB_PORT = process.env.DB_PORT || 3307;
var DB_USER = process.env.DB_USER || "root";
var DB_PASSWORD = process.env.DB_PASSWORD || "password";
var DB_DATABASE = process.env.DB_DATABASE || "database";

const database = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

module.exports = database;
