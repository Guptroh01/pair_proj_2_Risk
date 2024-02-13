const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const {connectDB} = require('./config/db')

const PORT = process.env.PORT_NUMBER

 const app = express()

 app.use(express.json)
 app.use(express.urlencoded({extended: true}))

const useRoute = require('./routes/userRoute')
app.use('', useRoute);

connectDB();

 app.listen(process.env.PORT_NUMBER_2, () =>{
    console.log(`Server is conencted on ${process.env.PORT_NUMBER_2}`)
 })