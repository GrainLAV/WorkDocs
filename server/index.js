require('dotenv').config()
const express =require('express')
const Sequelize = require('./db')
const PORT = process.env.PORT || 5000
const models = require('./models/models')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const start = async() => {
    try{
        Sequelize.authenticate()
        await Sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер запустился на порте ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()
