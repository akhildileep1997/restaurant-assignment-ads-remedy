const Product = require("../models/productSchema");

//logic for adding a product
const addProduct = async (req, res) => {
  try {
    const { name, description, imageUrl, price, cuisine } = req.body;
    const productCheck = await Product.findOne({ name: name });
    if (productCheck) {
      return res.status(400).send({
        success: false,
        message: `the name ${productCheck.name} is already in use please give a new name`,
      });
    }
    const newProduct = new Product({
      name,
      description,
      imageUrl,
      price,
      cuisine,
    });
    if (newProduct) {
      await newProduct.save();
      return res.status(201).send({
        success: true,
        message: `new product ${newProduct.name} added successfully`,
        product: newProduct,
      });
    } else {
      return res.status(400).send({
        success: false,
        message: "unable to add new product",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "internal server error,error in add-product ",
    });
  }
};

//logic for getting all products
const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products) {
      return res.status(200).send({
        success: true,
        message: "all products fetched successfully",
        AllProducts: products,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "internal server error,error in get all product ",
    });
  }
};

//logic for viewing a particular product
const viewProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).send({
        success: true,
        message: `product ${product.name} fetched successfully`,
        product: product,
      });
    } else {
      return res.status(400).send({
        success: false,
        message: `no product find with id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "internal server error,error in view product ",
    });
  }
};

//logic for updating a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product =await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (product) {
      return res.status(200).send({
        success: true,
        message: `details of product with id ${id} updated successfully`,
        updatedProduct: product,
      });
    } else {
      return res.status(400).send({
        success: false,
        message: `unable to update product with ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "internal server error,error in update product ",
    });
  }
};

//logic for deleting a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct) {
      return res.status(200).send({
        success: true,
        message: `product with id ${id} deleted successfully`,
      });
    } else {
      return res.status(400).send({
        success: false,
        message: `unable to delete product with id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "internal server error,error in delete product ",
    });
  }
};

module.exports = {
  addProduct,
  getAllProduct,
  viewProduct,
  updateProduct,
  deleteProduct,
};
