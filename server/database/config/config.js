require('dotenv').config();

console.log(process.env.DEV_DATABASE_URL);

module.exports = {
    development: {
        url: process.env.DEV_DATABASE_URL,
        dialect: 'postgres'
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres'
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres'
    }
};
