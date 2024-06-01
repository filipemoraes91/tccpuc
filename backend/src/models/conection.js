const mysql = require('mysql2/promise');

require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

console.log(
     process.env.DB_HOST,
     process.env.DB_USER,
    process.env.DB_PASSWORD,
     process.env.DB_NAME
)

module.exports = connection;