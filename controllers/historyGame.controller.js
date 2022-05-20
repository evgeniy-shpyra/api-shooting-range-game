const db = require('../db')


class HistoryController {
    async createHistory(req, res) {
        const { score, time_of_game, userId } = req.body
        const newScore = await db.query(
            `INSERT INTO history_game (score, time_of_game, user_id) values ($1, $2, $3) RETURNING *`, [score, time_of_game, userId]
        )
        res.json(newScore.rows[0])
    }
    async getHistory(req, res) {
        const history = await db.query(`SELECT * FROM history_game`)
        res.json(history.rows)
    }
    async getHistoryByUser(req, res) {
        const id = req.params.id
        const history = await db.query(`SELECT * FROM history_game WHERE user_id = $1`, [id])
        res.json(history.rows) 
    }
}
 
module.exports = new HistoryController() 