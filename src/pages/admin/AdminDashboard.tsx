import { Link } from "react-router-dom";
import { Package, FolderTree, Image as ImageIcon } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center text-primary">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/admin/products" className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-4 group">
                    <Package size={48} className="text-gray-400 group-hover:text-primary transition" />
                    <h2 className="text-xl font-semibold">Manage Products</h2>
                    <p className="text-sm text-gray-500 text-center">Add, edit, and delete kid's clothing items with real image uploads.</p>
                </Link>
                <Link to="/admin/categories" className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-4 group">
                    <FolderTree size={48} className="text-gray-400 group-hover:text-primary transition" />
                    <h2 className="text-xl font-semibold">Manage Categories</h2>
                    <p className="text-sm text-gray-500 text-center">Create and organize product categories for the store.</p>
                </Link>
                <Link to="/admin/collections" className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-4 group">
                    <FolderTree size={48} className="text-gray-400 group-hover:text-primary transition" />
                    <h2 className="text-xl font-semibold">Manage Collections</h2>
                    <p className="text-sm text-gray-500 text-center">Create and organize product collections (e.g., Summer, New Arrivals).</p>
                </Link>
                <Link to="/admin/content" className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-4 group">
                    <ImageIcon size={48} className="text-gray-400 group-hover:text-primary transition" />
                    <h2 className="text-xl font-semibold">Site Content</h2>
                    <p className="text-sm text-gray-500 text-center">Update the hero banner and promotional section images.</p>
                </Link>
            </div>
        </div>
    );
}
