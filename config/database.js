const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'express-api',
  password: 'password2020!!',
  port: 5432,
});

module.exports = pool