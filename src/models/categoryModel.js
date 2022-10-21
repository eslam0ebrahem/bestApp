const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Category {PATH} Is Required.'],
  },
  nameAr: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Category {PATH} Is Required.'],
  },
});
const Category = model('Category', categorySchema);

module.exports = Category;
