
require("dotenv").config();

const { Client } = require("pg");
const pool = new Client({
    host : "localhost",
    user:"postgres",
    port:5432,
    password:"nafiul1904hasan%#",
    database:process.env.DATABASE

});

pool.connect()
module.exports = pool;