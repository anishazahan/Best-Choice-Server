const express = require('express');
const { getAllProducts, createProduct, updateProducts, deleteProduct, getProductDetails } = require('../controller/productController');
const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/product/newProduct").post(createProduct);
router.route("/product/:id").put(updateProducts);
router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").get(getProductDetails);



module.exports = router;