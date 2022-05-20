const Pull = require('pg').Pool
// const pool = new Pull({
//     user: "postgres",
//     password: '123456789',
//     host: 'localhost',
//     port: 5050,
//     database: 'score'
// })

const pool = Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}).get('/db', async (req, res) => {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM test_table');
            const results = { 'results': (result) ? result.rows : null };
            res.render('pages/db', results);
            client.release();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    })



module.exports = pool  