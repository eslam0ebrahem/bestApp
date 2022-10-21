"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Category = require('../models/categoryModel');

var Product = require('../models/productModel');

exports.getHomePage = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
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
          Promise.all([Product.find(), Category.find()]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                products = _ref2[0],
                categories = _ref2[1];

            // res.json({
            res.render('index', {
              data: {
                products: products,
                categories: categories
              }
            });
          }); // res.render('index', {
          //   categors: await Category.find(),
          // });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};