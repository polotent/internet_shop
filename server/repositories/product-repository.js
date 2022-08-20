const models = require('../database/models');

class ProductRepository {
    constructor(models) {
        this.models = models;
    }

    async createProduct() {

    }

    async getProducts() {
        return await models.Product.findAll();
    }

    async getProduct(id) {
        return await models.Product.findByPk(id);
    }

    async updateProduct() {

    }

    async deleteProduct() {

    }
}

module.exports = new ProductRepository(models);
