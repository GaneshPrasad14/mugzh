import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Collection from '../models/Collection.js';
import SiteContent from '../models/SiteContent.js';

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Save to backend/uploads
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// --- Products CRUD ---
// Add a product (with multiple images)
router.post('/products', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'hoverImage', maxCount: 1 }]), async (req, res) => {
    try {
        const { name, category, collectionName, price, isNewProduct } = req.body;
        const image = req.files['image'] ? `/uploads/${req.files['image'][0].filename}` : null;
        const hoverImage = req.files['hoverImage'] ? `/uploads/${req.files['hoverImage'][0].filename}` : null;

        if (!image || !hoverImage) return res.status(400).json({ message: 'Both image and hoverImage are required.' });

        const newProduct = new Product({
            name,
            category,
            collectionName: collectionName || "",
            price,
            image,
            hoverImage,
            isNewProduct: isNewProduct === 'true'
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: error.message });
    }
});

// Update a product
router.put('/products/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'hoverImage', maxCount: 1 }]), async (req, res) => {
    try {
        const { name, category, collectionName, price, isNewProduct } = req.body;
        const updateData = { name, category, collectionName: collectionName || "", price, isNewProduct: isNewProduct === 'true' };

        if (req.files && req.files['image']) {
            updateData.image = `/uploads/${req.files['image'][0].filename}`;
        }
        if (req.files && req.files['hoverImage']) {
            updateData.hoverImage = `/uploads/${req.files['hoverImage'][0].filename}`;
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: error.message });
    }
});

// Get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a product
router.delete('/products/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// --- Categories CRUD ---
router.post('/categories', async (req, res) => {
    try {
        const { name } = req.body;
        const slug = name.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, ''); // Basic slugify
        const newCategory = new Category({ name, slug });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/categories/:id', async (req, res) => {
    try {
        const { name } = req.body;
        const slug = name.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, ''); // Basic slugify
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name, slug }, { new: true });
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/categories/:id', async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// --- Collections CRUD ---
router.post('/collections', async (req, res) => {
    try {
        const { name } = req.body;
        const slug = name.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, '');
        const newCollection = new Collection({ name, slug });
        await newCollection.save();
        res.status(201).json(newCollection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/collections', async (req, res) => {
    try {
        const collections = await Collection.find();
        res.json(collections);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/collections/:id', async (req, res) => {
    try {
        const { name } = req.body;
        const slug = name.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^\w-]+/g, '');
        const updatedCollection = await Collection.findByIdAndUpdate(req.params.id, { name, slug }, { new: true });
        res.json(updatedCollection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/collections/:id', async (req, res) => {
    try {
        await Collection.findByIdAndDelete(req.params.id);
        res.json({ message: 'Collection deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// --- Site Content (Hero Image, etc) ---
router.post('/content', upload.single('image'), async (req, res) => {
    try {
        const { section, title, subtitle, link } = req.body;
        let updateData = { title, subtitle, link };

        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }

        // Upsert logic (update if exists, create if not)
        const content = await SiteContent.findOneAndUpdate(
            { section: section },
            updateData,
            { new: true, upsert: true }
        );
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/content', async (req, res) => {
    try {
        const content = await SiteContent.find();
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/content/:section', async (req, res) => {
    try {
        const content = await SiteContent.findOne({ section: req.params.section });
        if (!content) return res.status(404).json({ message: 'Content not found' });
        res.json(content);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
