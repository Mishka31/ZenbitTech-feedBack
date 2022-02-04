const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: 'ezhiklublu',
  host: 'localhost',
  port: 5432,
  database: 'feed_back',
})

module.exports = pool
