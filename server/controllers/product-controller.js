const productService = require('../services/product-service');

class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res) {
    }

    async getProducts(req, res) {
        try {
            const products = await this.productService.getProducts();
            return res.status(200).json({ products });
        } catch (err) {
            return res.status(500).end();
        }
    }

    async getProduct(req, res) {
        try {
            const product = await this.productService.getProduct(req.params.id);
            if (!product) {
                return res.status(404).end();
            }

            return res.status(200).json({ product });
        } catch (err) {
            return res.status(500).end();
        }
    }

    async updateProduct(req, res) {
    }

    async deleteProduct(req, res) {
    }
};

module.exports = new ProductController(productService);
