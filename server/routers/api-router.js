const apiRouter = require('express').Router();

const productRouter = require('./product-router');

apiRouter.use('/products', productRouter);

module.exports = apiRouter;
