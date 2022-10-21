const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Product {PATH} Is Required.'],
  },
  price: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Product {PATH} Is Required.'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  oldPrice: {
    type: String,
    trim: true,
    lowercase: true,
  },
  discrption: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Product {PATH} Is Required.'],
  },
  imgs: [{
    type: String,
    trim: true,
  },
  ],
});
const Product = model('Product', productSchema);

module.exports = Product;
