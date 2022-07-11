// user routes

const express = require("express")
const router = express.Router()

// POST - Auth/SignIn
router.post('/signin', (req,res) => {
    res.send("Sign in Route")
})

// GET - Auth/Validate
router.get('/validate', (req,res) => {
    res.send("Validate Route")
})


module.exports = router