import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import adminRoutes from './routes/adminRoutes.js';
import apiRoutes from './routes/apiRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api', apiRoutes);
app.use('/api/orders', orderRoutes);

// Database Connection and Server Start
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Atlas Connected');

        const PORT = process.env.PORT || 5002;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
};

startServer();
