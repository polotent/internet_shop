const models = require('../database/models');

class ProductRepository {
    async createProduct() {

    }

    async getProducts() {
        return await models.Product.findAll();
    }

    async getProduct() {

    }

    async updateProduct() {

    }

    async deleteProduct() {

    }
}

module.exports = new ProductRepository();
