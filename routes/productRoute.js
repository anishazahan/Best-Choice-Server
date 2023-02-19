const express = require('express');
const { getAllProducts, createProduct } = require('../controller/productController');
const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/products/newProduct").post(createProduct);



module.exports = router;