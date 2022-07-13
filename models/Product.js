const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../utils')

// schema
const productSchema = new mongoose.Schema({
    productName: {
    type: String,
    required: true
    },
    image: {
    type: String,
    required: true
    },
    description: {
    type: String,
    required: true
    },
    ingredients: {
    type: String,
    required: true
    },
    price: {
    type: Double,
    required: true
    },
    glutenFree: {
    type: Boolean
    },
    nutFree: {
    type: Boolean
    },
    dairyFree: {
    type: Boolean
    },
    vegan: {
    type: Boolean
    },
}, { timestamps: true })

// model
const productModel = mongoose.model('Product', productSchema)

// export
module.exports = productModel