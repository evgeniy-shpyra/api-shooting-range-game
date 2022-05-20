const Router = require('express')
const router = new Router()
const historyGameController = require('../controllers/historyGame.controller')

router.post('/history', historyGameController.createHistory)
router.get('/history', historyGameController.getHistory)
router.get('/history/:id', historyGameController.getHistoryByUser)

module.exports = router