import express from 'express';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Collection from '../models/Collection.js';

const router = express.Router();

// Get all products (with optional category or collection filter)
router.get('/products', async (req, res) => {
    try {
        const { category, collection, isNew } = req.query;
        let query = {};

        if (category && category.toLowerCase() !== 'shop' && category.toLowerCase() !== 'new-in') {
            // Case-insensitive regex match for category
            query.category = { $regex: new RegExp(`^${category}$`, 'i') };
        }

        if (collection) {
            // Exact match for collection name (or regex if you prefer)
            query.collectionName = { $regex: new RegExp(`^${collection}$`, 'i') };
        }

        if (isNew === 'true') {
            query.isNewProduct = true;
        }

        const products = await Product.find(query).sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single product
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all collections
router.get('/collections', async (req, res) => {
    try {
        const collections = await Collection.find();
        res.json(collections);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
