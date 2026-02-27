import mongoose from 'mongoose';

const CollectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

export default mongoose.model('Collection', CollectionSchema);
