const mysql = require('mysql');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
}

module.exports = function getConnection() {
    return mysql.createConnection(dbConfig);
}