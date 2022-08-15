const productService = require('../services/product.service');

class ProductController {
    async createProduct(req, res) {
    }

    async getProducts(req, res) {
        try {
            const products = await productService.getProducts();
            return res.status(200).json({ products });
        } catch (err) {
            return res.status(500).end();
        }
    }

    async getProduct(req, res) {
        try {
            const product = await productService.getProduct();
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

module.exports = new ProductController();
