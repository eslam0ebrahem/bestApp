const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

exports.getHomePage = async (req, res) => {
//   Category.create([{
//     name: 'Car Remotes',
//     nameAr: 'ريموت السيارة',
//   }, {
//     name: 'Used Remotes',
//     nameAr: 'ريموتات مستعملة',
//   }, {
//     name: 'LCD Remotes',
//     nameAr: 'LCD Remotes',
//   }, {
//     name: 'Garage Gate Remotes',
//     nameAr: 'ريموتات الكراج',
//   }, {
//     name: 'Remote PCB',
//     nameAr: 'بورد ريموت',
//   }, {
//     name: 'Face to Face',
//     nameAr: 'ريموتات نسخ',
//   }, {
//     name: 'Remote Cases & Covers',
//     nameAr: 'Remote Cases & Covers',
//   }, {
//     name: 'Remote shell',
//     nameAr: 'غطاء ريموت',
//   }]);
  Promise.all([
    Product.find(),
    Category.find(),
  ]).then(([products, categories]) => {
    // res.json({
    res.render('index', {
      data: { products, categories },
    });
  });

  // res.render('index', {
  //   categors: await Category.find(),
  // });
};
