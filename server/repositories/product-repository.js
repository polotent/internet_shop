const db = require('../db/models');

class ProductRepository {
    constructor(models) {
        this.models = models;
    }

    async createProduct() {

    }

    async getProducts() {
        return await db.models.Product.findAll();
    }

    async getProduct(id) {
        return await db.models.Product.findByPk(id);
    }

    async updateProduct() {

    }

    async deleteProduct() {

    }
}

module.exports = new ProductRepository(db);
