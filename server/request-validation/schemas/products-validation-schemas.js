const { param } = require('express-validator');

const productValidationSchemas = {
    getProduct: [
        param('id').isNumeric().withMessage('Value must be numeric').toInt()
    ]
};

module.exports = productValidationSchemas;
