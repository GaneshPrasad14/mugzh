import mongoose from 'mongoose';

const siteContentSchema = new mongoose.Schema({
    section: { type: String, required: true, unique: true }, // e.g., 'Hero', 'FiftyFifty'
    title: { type: String },
    subtitle: { type: String },
    image: { type: String },
    link: { type: String }
}, { timestamps: true });

export default mongoose.model('SiteContent', siteContentSchema);
