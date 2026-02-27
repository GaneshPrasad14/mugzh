import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import models
import Category from './models/Category.js';
import Product from './models/Product.js';

// Setup env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const categories = [
    { name: 'Frocks', slug: 'frocks' },
    { name: 'Gowns', slug: 'gowns' },
    { name: 'Sets', slug: 'sets' },
    { name: 'Casuals', slug: 'casuals' },
    { name: 'Party Wear', slug: 'party-wear' }
];

const products = [
    {
        name: "Summer Breeze",
        category: "Frocks",
        price: "₹2,850",
        image: "/WhatsApp Image 2026-02-10 at 8.41.00 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-10 at 8.40.59 PM.jpeg",
        isNewProduct: true,
    },
    {
        name: "Princess Gown",
        category: "Gowns",
        price: "₹3,200",
        image: "/WhatsApp Image 2026-02-10 at 8.41.00 PM (5).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-10 at 8.40.59 PM (1).jpeg",
        isNewProduct: false
    },
    {
        name: "Fairy Tale",
        category: "Frocks",
        price: "₹1,950",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (2).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (1).jpeg",
        isNewProduct: true,
    },
    {
        name: "Cotton Candy",
        category: "Casuals",
        price: "₹1,650",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (3).jpeg",
        isNewProduct: false
    },
    {
        name: "Velvet Dream",
        category: "Sets",
        price: "₹2,250",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM.jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (4).jpeg",
        isNewProduct: false
    },
    {
        name: "Royal Charm",
        category: "Party Wear",
        price: "₹3,950",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (3).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.25 PM (1).jpeg",
        isNewProduct: false
    },
    {
        name: "Blossom",
        category: "Frocks",
        price: "₹2,450",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (2).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (1).jpeg",
        isNewProduct: false
    },
    {
        name: "Starlight",
        category: "Sets",
        price: "₹2,800",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (3).jpeg",
        isNewProduct: false
    },
    {
        name: "Sunshine",
        category: "Casuals",
        price: "₹1,550",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM.jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (4).jpeg",
        isNewProduct: false
    },
    {
        name: "Moonlight",
        category: "Gowns",
        price: "₹1,850",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (3).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.25 PM.jpeg",
        isNewProduct: false
    },
    {
        name: "Daisy",
        category: "Frocks",
        price: "₹2,050",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (2).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (1).jpeg",
        isNewProduct: false
    },
    {
        name: "Rosebud",
        category: "Sets",
        price: "₹3,650",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (3).jpeg",
        isNewProduct: false
    },
    {
        name: "Tulip",
        category: "Casuals",
        price: "₹2,150",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM.jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (4).jpeg",
        isNewProduct: false
    },
    {
        name: "Lily",
        category: "Gowns",
        price: "₹2,950",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (3).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.25 PM.jpeg",
        isNewProduct: false
    },
    {
        name: "Jasmine",
        category: "Frocks",
        price: "₹1,750",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (2).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (1).jpeg",
        isNewProduct: false
    },
    {
        name: "Orchid",
        category: "Sets",
        price: "₹1,850",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (3).jpeg",
        isNewProduct: false
    },
    {
        name: "Violet",
        category: "Casuals",
        price: "₹2,350",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM.jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (4).jpeg",
        isNewProduct: false
    },
    {
        name: "Magnolia",
        category: "Gowns",
        price: "₹3,450",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (3).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.25 PM.jpeg",
        isNewProduct: false
    },
    {
        name: "Peony",
        category: "Frocks",
        price: "₹2,050",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (2).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (1).jpeg",
        isNewProduct: false
    },
    {
        name: "Iris",
        category: "Sets",
        price: "₹3,150",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (3).jpeg",
        isNewProduct: false
    },
    {
        name: "Dahlia",
        category: "Casuals",
        price: "₹1,650",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM.jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (4).jpeg",
        isNewProduct: false
    },
    {
        name: "Camellia",
        category: "Gowns",
        price: "₹1,950",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (3).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.25 PM.jpeg",
        isNewProduct: false
    },
    {
        name: "Azalea",
        category: "Frocks",
        price: "₹2,250",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (2).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (1).jpeg",
        isNewProduct: false
    },
    {
        name: "Begonia",
        category: "Sets",
        price: "₹3,750",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (3).jpeg",
        isNewProduct: false
    },
    {
        name: "Garden Bloom",
        category: "Frocks",
        price: "₹2,150",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (1).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.26 PM (3).jpeg",
        isNewProduct: true,
    },
    {
        name: "Royal Velvet",
        category: "Gowns",
        price: "₹3,450",
        image: "/WhatsApp Image 2026-02-04 at 8.56.27 PM (3).jpeg",
        hoverImage: "/WhatsApp Image 2026-02-04 at 8.56.25 PM.jpeg",
        isNewProduct: true,
    },
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected...');

        // Clear existing data
        await Category.deleteMany({});
        await Product.deleteMany({});
        console.log('Cleared existing data...');

        // Insert categories
        const createdCategories = await Category.insertMany(categories);
        console.log(`Inserted ${createdCategories.length} categories...`);

        // Need the category ID map to update products ideally, 
        // but the current Product schema uses String for category, 
        // so we can insert directly.

        // Insert products
        const createdProducts = await Product.insertMany(products);
        console.log(`Inserted ${createdProducts.length} products...`);

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedDB();
