// Server

// dependencies
require("dotenv").config()
const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const port = process.env.PORT || 5500

// database connection

// express app setup
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('*', cors())


// routes
// homepage
app.get('/', (req,res) => {
    res.send("Cupcake Bar - Coming Soon")
})

//users
const userRouter = require("./routes/user")
app.use('/user', userRouter)

// run app
app.listen(port, () => {
    console.log("App is running on port ", port)
})