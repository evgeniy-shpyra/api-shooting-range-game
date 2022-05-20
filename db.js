const Pull = require('pg').Pool
// const pool = new Pull({
//     user: "postgres",
//     password: '123456789',
//     host: 'localhost',
//     port: 5050,
//     database: 'score'
// })

const pool = new Pull({
    user: "fsejrumiiqrnqd",
    password: 'e3495f777d3ba02c6f80440f0108d046929a1ab87ffe2ec91a2c4a6b1443fe59',
    host: 'ec2-54-165-90-230.compute-1.amazonaws.com',
    port: 5432,
    database: 'ddistg39ngseo3'
})



module.exports = pool  