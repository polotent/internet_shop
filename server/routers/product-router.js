const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/product-controller');

const requestValidator = require('../request-validation/validators/request-validator');
const productValidationSchemas = require('../request-validation/schemas/products-validation-schemas');

productRouter.post('/', async (req, res) => await productController.createProduct(req, res));
productRouter.get('/', async (req, res) => await productController.getProducts(req, res));
productRouter.get('/:id',
    productValidationSchemas.getProduct,
    requestValidator,
    async (req, res) => await productController.getProduct(req, res));
productRouter.put('/:id', async (req, res) => productController.updateProduct(req, res));
productRouter.delete('/:id', async (req, res) => productController.deleteProduct(req, res));

module.exports = productRouter;
