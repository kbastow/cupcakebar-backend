const express = require('express')
const router = express.Router()
const Utils = require('./../Utils')
const Product = require('./../models/Product')
const path = require('path')

// GET - get all products ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Product.find().populate('user', '_id firstName')
    .then(products => {
      if(products == null){
        return res.status(404).json({
          message: "No products found"
        })
      }
      res.json(products)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting products"
      })
    })  
})

// POST - create new product --------------------------------------
router.post('/', (req, res) => {
  // validate 
  if(Object.keys(req.body).length === 0){   
    return res.status(400).send({message: "Product content can't be empty"})
  }
  // validate - check if image file exist
  if(!req.files || !req.files.image){
    return res.status(400).send({message: "Please include an image"})
  }

  console.log('req.body = ', req.body)

  // image file must exist, upload, then create new product
  let uploadPath = path.join(__dirname, '..', 'public', 'images')
  Utils.uploadFile(req.files.image, uploadPath, (uniqueFilename) => {    
    // create new product
    let newProduct = new Product({
      productName: req.body.productName,
      image: uniqueFilename,
      description: req.body.description,
      ingredients: req.body.ingredients,
      price: req.body.price,
    })
  
    newProduct.save()
    .then(product => {        
      // success!  
      // return 201 status with object
      return res.status(201).json(product)
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send({
        message: "Problem creating product listing",
        error: err
      })
    })
  })
})

// export
module.exports = router