const Pull = require('pg').Pool
// const pool = new Pull({
//     user: "postgres",
//     password: '123456789',
//     host: 'localhost',
//     port: 5050,
//     database: 'score'
// })

const pool =  Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })



module.exports = pool  