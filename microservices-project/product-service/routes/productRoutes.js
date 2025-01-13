const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/create', productController.createProduct);  // Create a product

router.get('/', productController.getAllProducts);  // Route to get all products

module.exports = router;
