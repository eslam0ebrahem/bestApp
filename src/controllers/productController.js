const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
  res.render('productDetails', {
    data: await Product.find(),
  });
};
exports.getProduct = async (req, res) => {
  res.render('productDetails', {
    data: await Product.findById(req.params.id),
  });
};
