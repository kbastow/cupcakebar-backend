// dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('mongoose-type-email') 


//schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },​​​
    lastName: {
        type: String,
        require: true
    },​​​
    email: {
        type: mongoose.SchemaType.Email,
        require: true
    },​​​
    password: {
        type: String,
        require: true
    },​​​
    accessLevel: {
        type: Number,
        require: true
    }
}, {timestamps: true})


// create mongoose model
const userModel = mongoose.model('User', userSchema)


//export
module.exports = userModel