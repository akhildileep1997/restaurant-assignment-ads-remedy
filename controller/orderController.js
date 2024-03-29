const Product = require("../models/productSchema");
const Order = require("../models/orderSchema");

//logic for making an order
const makeOrder = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    const productCheck = await Product.findOne({ _id: product });

    if (!productCheck) {
      return res.status(400).send({
        success: false,
        message: `no product found with id${product}`,
      });
    }
    const grandTotal = productCheck.price * quantity;
    const order = new Order({
      product: product,
      quantity: quantity,
      grandTotal: grandTotal,
    });
    await order.save();
    return res.status(201).send({
      success: true,
      message: `Order for the product ${productCheck.name} placed successfully`,
      order: order,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error, error in make order part",
    });
  }
};

//logic for getting all orders

const getAllOrders = async (req, res) => {
  const allOrders = await Order.find({});
try {
      if (allOrders) {
        return res.status(200).send({
          success: true,
          message: "all orders fetched successfully",
          orders: allOrders,
        });
      } else {
          return res.status(400).send({
              success: false,
              message:'no orders found'
          })
      }
} catch (error) {
        console.log(error);
        return res.status(500).send({
          success: false,
          message: "Internal server error, error in fetching all orders part",
        });
}
};

module.exports = {
    makeOrder,
    getAllOrders
};
