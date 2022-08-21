const config = require('../../config');

module.exports = {
    development: {
        host: config.get('db.host'),
        port: config.get('db.port'),
        user: config.get('db.user'),
        password: config.get('db.password'),
        name: config.get('db.name'),
        dialect: 'postgres'
    },
    test: {
        host: 'localhost',
        port: 3000,
        user: 'test_user',
        password: 'password',
        name: 'internet_shop_test_db',
        dialect: 'postgres'
    },
    production: {
        host: config.get('db.host'),
        port: config.get('db.port'),
        user: config.get('db.user'),
        password: config.get('db.password'),
        name: config.get('db.name'),
        dialect: 'postgres'
    }
};
