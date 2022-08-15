const productRepository = require('../repositories/product.repository');

class ProductService {
    async createProduct() {
        return await productRepository.createProduct();
    }

    async getProducts() {
        return await productRepository.getProducts();
    }

    async getProduct() {
        return await productRepository.getProduct();
    }

    async updateProduct() {
        return await productRepository.updateProduct();
    }

    async deleteProduct() {
        return await productRepository.deleteProduct();
    }
}

module.exports = new ProductService();
