const productRepository = require('../repositories/product-repository');

class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async createProduct() {
        return await productRepository.createProduct();
    }

    async getProducts() {
        return await productRepository.getProducts();
    }

    async getProduct(id) {
        return await productRepository.getProduct(id);
    }

    async updateProduct() {
        return await productRepository.updateProduct();
    }

    async deleteProduct() {
        return await productRepository.deleteProduct();
    }
}

module.exports = new ProductService(productRepository);
