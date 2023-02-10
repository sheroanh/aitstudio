var database = require("./index.js");

function handleConnection() {
  database.connect(function (err) {
    if (err) {
      console.log("- Error when connecting to database:", err.code);
      setTimeout(handleConnection, 10000);
    }
    console.log("- Database is connected");
  });
  database.on("error", function onError(err) {
    console.log("- Database is error:", err.code);
    if (err.code == "PROTOCOL_CONNECTION_LOST") {
      handleConnection();
    } else {
      throw err; // server variable configures this)
    }
  });
}

const initialize = () => {
  console.log("Initializing database...");
  try {
    handleConnection();
    var sql = `CREATE TABLE IF NOT EXISTS user (
        id CHAR(6),
        email VARCHAR(255),
        google_id VARCHAR(255),
        display_name TEXT,
        avatar TEXT,
        CONSTRAINT user_id_pk PRIMARY KEY (id),
        CONSTRAINT user_google_id_un UNIQUE(google_id),
        CONSTRAINT user_email_un UNIQUE(email)
      )`;
    database.query(sql, function (err, results) {
      if (err) throw err;
      console.log("- Table user is ready");
    });
    var sql = `CREATE TABLE IF NOT EXISTS uit_subject_list (
      id INT AUTO_INCREMENT,
      subject_id VARCHAR(8),
      subject_name VARCHAR(255),
      class_id VARCHAR(20),
      teacher_id TEXT,
      teacher_name TEXT,
      credit INT,
      type VARCHAR(8),
      day VARCHAR(2),
      lesson VARCHAR(10),
      week_step TINYINT,
      classroom VARCHAR(10),
      course TINYINT,
      semester TINYINT,
      year YEAR,
      training_system VARCHAR(5),
      faculty VARCHAR(10),
      start_date DATE,
      end_date DATE,
      CONSTRAINT uit_subject_list_id_pk PRIMARY KEY (id)
    )`;
    database.query(sql, function (err, results) {
      if (err) throw err;
      console.log("- Table uit_subject_list is ready");
    });
  //   var sql = `CREATE TABLE IF NOT EXISTS short_qr (
  //     id CHAR(6),
  //     user_id CHAR(6),
  //     name VARCHAR(255),
  //     type TEXT,
  //     content TEXT,
  //     state VARCHAR(10),

  //   )`;
  // database.query(sql, function (err, results) {
  //   if (err) throw err;
  //   console.log("- Table user is ready");
  // });
  } catch (err) {
    console.log(err);
  }
};

module.exports = initialize;
