const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;

console.log(process.env.NODE_ENV);

const apiRouter = require('./routers/api.router');

app.use('/api', apiRouter);

app.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate...'));
