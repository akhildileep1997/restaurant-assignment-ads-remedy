const express = require('express')
const { makeOrder, getAllOrders } = require('../controller/orderController')

const router = express.Router()

//route for making an order
router.post('/new-order', makeOrder)

//route for getting all orders
router.get('/all-orders',getAllOrders)

module.exports = router