const express = require('express')
const { addProduct, getAllProduct, viewProduct, updateProduct, deleteProduct } = require('../controller/productController')

const router = express.Router()

//route for adding a new product
router.post('/add-product', addProduct)

//rote for getting all products
router.get('/all-products', getAllProduct)

//route for viewing a particular product
router.get('/:id', viewProduct)

//route for updating a product
router.put('/update-product/:id', updateProduct)

//route for deleting a product
router.delete('/:id',deleteProduct)

module.exports = router