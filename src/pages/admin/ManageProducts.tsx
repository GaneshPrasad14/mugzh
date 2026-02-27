import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Upload, Edit2, X } from "lucide-react";
import { toast } from "sonner";

export default function ManageProducts() {
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [collections, setCollections] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Form state
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [collectionName, setCollectionName] = useState("");
    const [price, setPrice] = useState("");
    const [isNewProduct, setIsNewProduct] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [hoverImage, setHoverImage] = useState<File | null>(null);
    const [editingProductId, setEditingProductId] = useState<string | null>(null);

    useEffect(() => {
        fetchProducts();
        fetchCategories();
        fetchCollections();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await fetch("http://localhost:5002/api/admin/products");
            const data = await res.json();
            setProducts(Array.isArray(data) ? data : []);
        } catch (error) {
            toast.error("Failed to fetch products");
        }
    };

    const fetchCategories = async () => {
        try {
            const res = await fetch("http://localhost:5002/api/admin/categories");
            const data = await res.json();
            setCategories(Array.isArray(data) ? data : []);
        } catch (error) {
            toast.error("Failed to fetch categories");
        }
    };

    const fetchCollections = async () => {
        try {
            const res = await fetch("http://localhost:5002/api/collections"); // Reusing public route
            const data = await res.json();
            setCollections(Array.isArray(data) ? data : []);
        } catch (error) {
            toast.error("Failed to fetch collections");
        }
    };

    const resetForm = () => {
        setEditingProductId(null);
        setName("");
        setCategory("");
        setCollectionName("");
        setPrice("");
        setIsNewProduct(false);
        setImage(null);
        setHoverImage(null);
        const imgInput = document.getElementById("imageInput") as HTMLInputElement;
        const hoverImgInput = document.getElementById("hoverImageInput") as HTMLInputElement;
        if (imgInput) imgInput.value = "";
        if (hoverImgInput) hoverImgInput.value = "";
    };

    const handleEdit = (prod: any) => {
        setEditingProductId(prod._id);
        setName(prod.name);
        setCategory(prod.category);
        setCollectionName(prod.collectionName || "");
        setPrice(prod.price);
        setIsNewProduct(prod.isNewProduct || false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !category || !price || (!editingProductId && (!image || !hoverImage))) {
            return toast.error("Please fill all required fields and upload both images.");
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("category", category);
        if (collectionName) formData.append("collectionName", collectionName);
        formData.append("price", price);
        formData.append("isNewProduct", isNewProduct.toString());
        if (image) formData.append("image", image);
        if (hoverImage) formData.append("hoverImage", hoverImage);

        try {
            const url = editingProductId ? `http://localhost:5002/api/admin/products/${editingProductId}` : "http://localhost:5002/api/admin/products";
            const method = editingProductId ? "PUT" : "POST";
            const res = await fetch(url, {
                method,
                body: formData,
            });

            if (res.ok) {
                toast.success(`Product ${editingProductId ? "updated" : "created"} successfully!`);
                resetForm();
                fetchProducts();
            } else {
                const errorData = await res.json();
                toast.error(errorData.message || `Failed to ${editingProductId ? "update" : "create"} product`);
            }
        } catch (error) {
            toast.error("Server error");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;
        try {
            const res = await fetch(`http://localhost:5002/api/admin/products/${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Product deleted!");
                fetchProducts();
            } else {
                toast.error("Failed to delete product");
            }
        } catch (error) {
            toast.error("Server error");
        }
    };

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <Link to="/admin" className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 w-fit">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* ADD PRODUCT FORM */}
                <div className="lg:col-span-1 bg-white p-6 rounded-xl border shadow-sm h-fit sticky top-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">{editingProductId ? "Edit Product" : "Add New Product"}</h2>
                        {editingProductId && (
                            <button type="button" onClick={resetForm} className="p-2 text-gray-500 hover:bg-gray-100 rounded-md transition" title="Cancel Edit">
                                <X size={20} />
                            </button>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-white" required>
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat._id} value={cat.name}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Collection (Optional)</label>
                            <select value={collectionName} onChange={e => setCollectionName(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-white">
                                <option value="">None</option>
                                {collections.map(col => (
                                    <option key={col._id} value={col.name}>{col.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Price (e.g. ₹2,850)</label>
                            <input type="text" value={price} onChange={e => setPrice(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Main Image</label>
                            <input id="imageInput" type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)} className="w-full text-sm mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" required={!editingProductId} />
                            {editingProductId && <p className="text-xs text-gray-400 mt-1">Leave blank to keep existing image</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Hover Image</label>
                            <input id="hoverImageInput" type="file" accept="image/*" onChange={e => setHoverImage(e.target.files?.[0] || null)} className="w-full text-sm mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100" required={!editingProductId} />
                            {editingProductId && <p className="text-xs text-gray-400 mt-1">Leave blank to keep existing hover image</p>}
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                            <input type="checkbox" id="isNew" checked={isNewProduct} onChange={e => setIsNewProduct(e.target.checked)} className="rounded border-gray-300 w-4 h-4 cursor-pointer" />
                            <label htmlFor="isNew" className="text-sm font-medium cursor-pointer">Mark as "NEW"</label>
                        </div>

                        <button type="submit" disabled={loading} className="w-full bg-black text-white px-4 py-2 mt-4 rounded-md hover:bg-gray-800 disabled:opacity-50">
                            {loading ? "Saving..." : editingProductId ? "Update Product" : "Add Product"}
                        </button>
                    </form>
                </div>

                {/* PRODUCT LIST */}
                <div className="lg:col-span-2 bg-white rounded-xl border shadow-sm overflow-hidden">
                    <div className="p-6 border-b">
                        <h2 className="text-xl font-bold">Existing Products</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left whitespace-nowrap">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 font-medium text-gray-500 w-20">Image</th>
                                    <th className="px-6 py-3 font-medium text-gray-500">Name</th>
                                    <th className="px-6 py-3 font-medium text-gray-500">Price</th>
                                    <th className="px-6 py-3 font-medium text-gray-500 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y relative">
                                {products.map(prod => (
                                    <tr key={prod._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <img src={prod.image?.startsWith('/uploads') ? `http://localhost:5002${prod.image}` : prod.image} alt={prod.name} className="w-12 h-12 rounded object-cover border" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-medium text-gray-900">{prod.name}</p>
                                                <p className="text-sm text-gray-500">{prod.category}{prod.collectionName ? ` • ${prod.collectionName}` : ""}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">{prod.price}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => handleEdit(prod)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-md transition" title="Edit Product">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button onClick={() => handleDelete(prod._id)} className="p-2 text-red-500 hover:bg-red-50 rounded-md transition" title="Delete Product">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {products.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                            No products found. Start by adding one.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
