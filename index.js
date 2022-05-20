const express = require('express')
const userRouter = require('./routes/user.routes')
const historyGameRouter = require('./routes/historyGame.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', userRouter, historyGameRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`)) 