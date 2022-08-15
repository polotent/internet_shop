const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;

console.log(process.env.NODE_ENV);

const productRouter = require('./routers/product.router');

app.use('/api/products', productRouter);

app.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate...'));
