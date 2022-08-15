const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/product.controller');

productRouter.post('/', productController.createProduct);
productRouter.get('/', (req, res) => productController.getProducts(req, res));
productRouter.get('/:id', (req, res) => productController.getProduct(req, res));
productRouter.put('/:id', (req, res) => productController.updateProduct(req, res));
productRouter.delete('/:id', (req, res) => productController.deleteProduct(req, res));

module.exports = productRouter;
