require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getPreivew, containURL } = require("../../utils/linkPreview");
const { query, queryResult } = require("../../utils/sql.js");
const { makeId } = require("../../utils/index");
const validator = require("validator");

async function newShort(req, res, next) {
  try {
    var id = makeId(6);
    if (
      !validator.isEmpty(req.body.data.content) &&
      validator.isURL(req.body.data.content)
    )
      var type = "URL";
    else var type = "text";
    var pathName = req.body.data.pathName || id;
    var password = req.body.data.password || null;
    var expiries = req.body.data.expiries || null;
    const checkArr = [req.user.id, req.body.data.name, req.body.data.content];
    if (
      checkArr.includes(null) ||
      checkArr.includes("") ||
      checkArr.includes(undefined)
    )
      throw new Error("Data is missing");
    const data = [
      id,
      req.user.id,
      req.body.data.name,
      pathName,
      type,
      req.body.data.content,
      "active",
      password,
      expiries,
    ];
    var result = await queryResult(
      `SELECT * FROM short WHERE path_name = ?`,
      pathName
    );
    if (result.length > 0) throw new Error("Path name is already");
    query(
      `INSERT INTO short (id, user_id, name, path_name, type, content, state, password, expiries) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      data
    );
    var result = await queryResult(
      `SELECT * FROM short WHERE path_name = ?`,
      pathName
    );
    return res.status(200).json({
      status: "success",
      data: {
        pathName: result[0].path_name,
      },
    });
  } catch (err) {
    return next(err);
  }
}

async function getShort(req, res, next) {
  try {
    var pathName = req.params.pathName;
    var password = String(req.body.data.password) || null;
    var result = await queryResult(
      `SELECT name, content, type, display_name, avatar, password, expiries FROM short JOIN user ON user.id = short.user_id WHERE path_name = ?`,
      [pathName]
    );
    if (result.length == 0)
      return res.status(403).json({
        status: "failure",
        message: "Short is not found",
        data: {
          issue: "notFound",
        },
      });
    var expiries =
      result[0].expiries != null ? new Date(result[0].expiries) : null;
    if (expiries != null) {
      var now = new Date();
      if (now > expiries)
        return res.status(403).json({
          status: "failure",
          message: "Short is expired",
          data: {
            issue: "expired",
          },
        });
    }
    if (result[0].password != null) {
      if (password == null)
        return res.status(403).json({
          status: "failure",
          message: "Password is required",
          data: {
            issue: "password",
          },
        });
      if (String(result[0].password) != password)
        return res.status(403).json({
          status: "failure",
          message: "Password is wrong",
          data: {
            issue: "password",
          },
        });
    }
    var response = {
      status: "success",
      data: {
        name: result[0].name,
        type: result[0].type,
        content: result[0].content,
        user: {
          displayName: result[0].display_name,
          avatar: result[0].avatar,
        },
        containURL: containURL(result[0].content),
      },
    };
    if (result[0].type == "URL")
      response.data.preview = await getPreivew(result[0].content);
    return res.status(200).json(response);
  } catch (err) {
    return next(err);
  }
}

module.exports = { newShort, getShort };
