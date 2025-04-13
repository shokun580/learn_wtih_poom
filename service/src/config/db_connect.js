const mysql2 = require("mysql2/promise");
const env = require("dotenv").config();

const pool = mysql2.createPool({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
  port: process.env.db_port,
  queueLimit: 0,
  connectionLimit: 5,
  waitForConnections: true,
});

module.exports = pool;
