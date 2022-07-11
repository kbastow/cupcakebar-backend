// user routes
const express = require("express")
const router = express.Router()
const User = require("./../models/User")

// GET - Get all users

router.get('/', (req,res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            console.log("Error retrieving users", err)
        })
})

module.exports = router