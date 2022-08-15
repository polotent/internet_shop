const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/product.controller');

productRouter.post('/', (req, res) => productController.createProduct(req, res));
productRouter.get('/', (req, res) => productController.getProducts(req, res));
productRouter.get('/:id', (req, res) => productController.getProduct(req, res));
productRouter.put('/:id', (req, res) => productController.updateProduct(req, res));
productRouter.delete('/:id', (req, res) => productController.deleteProduct(req, res));

module.exports = productRouter;
