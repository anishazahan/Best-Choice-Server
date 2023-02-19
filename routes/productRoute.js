const express = require('express');
const { getAllProducts, createProduct, updateProducts } = require('../controller/productController');
const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/product/newProduct").post(createProduct);
router.route("/product/:id").put(updateProducts);



module.exports = router;