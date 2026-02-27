import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: {
        type: String,
        required: true
    },
    collectionName: {
        type: String,
        required: false,
        default: ""
    },
    price: { type: String, required: true }, // Keeping as string to match "₹2,850" format from frontend, or could be number
    image: { type: String, required: true },
    hoverImage: { type: String, required: true },
    isNewProduct: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
