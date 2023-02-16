require("dotenv").config();
const jwt = require("jsonwebtoken");
const { query, queryResult } = require("../../utils/sql.js");

function newShort(req, res, next) {
 var name = req.body.data
  var sql = `INSERT INTO short (id, user_id, name, path_name, type, content, state)
  VALUES (?, ?, ?, ?, ?, ?, ?)`;
}
