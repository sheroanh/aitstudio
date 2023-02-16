var database = require("../database/index.js");

function queryResult(sql, value, callback) {
  return new Promise((resolve, reject) => {
    database.query(sql, value,(err, result) => {
      return err ? reject(err) : resolve(JSON.parse(JSON.stringify(result)));
    });
  });
}

function query(sql, value) {
  database.query(sql, value);
}

module.exports = { queryResult, query };
