require("dotenv").config();
require('./connection/db')

const express = require('express')

const app = express()

const productRoute = require('./routes/productRoutes')
const orderRoute = require('./routes/orderRotes')

app.use(express.json())

app.use('/api/products', productRoute)
app.use("/api/order",orderRoute);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('app is listening in ' +PORT);
})