const { validationResult } = require('express-validator');
const { promisify } = require('util');

const validationResultAsync = promisify(validationResult);

async function validateRequestScheme(req, res, next) {
    const errors = await validationResultAsync(req).catch(e => console.log(e));
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = validateRequestScheme;
