import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Edit2, X } from "lucide-react";
import { toast } from "sonner";

export default function ManageCategories() {
    const [categories, setCategories] = useState<any[]>([]);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);

    const fetchCategories = async () => {
        try {
            const res = await fetch("http://localhost:5002/api/admin/categories");
            const data = await res.json();
            setCategories(Array.isArray(data) ? data : []);
        } catch (error) {
            toast.error("Failed to fetch categories");
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategoryName) return;

        try {
            if (editingCategoryId) {
                // Update existing category
                const res = await fetch(`http://localhost:5002/api/admin/categories/${editingCategoryId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: newCategoryName })
                });
                if (res.ok) {
                    toast.success("Category updated!");
                    setNewCategoryName("");
                    setEditingCategoryId(null);
                    fetchCategories();
                } else {
                    toast.error("Error updating category");
                }
            } else {
                // Create new category
                const res = await fetch("http://localhost:5002/api/admin/categories", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: newCategoryName })
                });
                if (res.ok) {
                    toast.success("Category created!");
                    setNewCategoryName("");
                    fetchCategories();
                } else {
                    toast.error("Error creating category");
                }
            }
        } catch (error) {
            toast.error("Server error");
        }
    };

    const handleEdit = (cat: any) => {
        setEditingCategoryId(cat._id);
        setNewCategoryName(cat.name);
    };

    const cancelEdit = () => {
        setEditingCategoryId(null);
        setNewCategoryName("");
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        try {
            const res = await fetch(`http://localhost:5002/api/admin/categories/${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Category deleted!");
                fetchCategories();
            } else {
                toast.error("Failed to delete");
            }
        } catch (error) {
            toast.error("Server error");
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto min-h-screen">
            <Link to="/admin" className="flex items-center gap-2 text-gray-500 hover:text-black mb-6">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold mb-8">Manage Categories</h1>

            <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">{editingCategoryId ? "Edit Category" : "Add New Category"}</h2>
                <form onSubmit={handleSubmit} className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Category Name (e.g. Frocks)"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-md"
                        required
                    />
                    {editingCategoryId && (
                        <button type="button" onClick={cancelEdit} className="px-4 py-2 text-gray-600 hover:text-black border rounded-md hover:bg-gray-50 flex items-center justify-center">
                            <X size={20} />
                        </button>
                    )}
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                        {editingCategoryId ? "Update" : "Create"}
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-3 font-medium text-gray-500">Name</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Slug</th>
                            <th className="px-6 py-3 font-medium text-gray-500 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {categories.map((cat) => (
                            <tr key={cat._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{cat.name}</td>
                                <td className="px-6 py-4">{cat.slug}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button onClick={() => handleEdit(cat)} className="text-blue-500 hover:text-blue-700 p-1">
                                            <Edit2 size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(cat._id)} className="text-red-500 hover:text-red-700 p-1">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {categories.length === 0 && (
                            <tr>
                                <td colSpan={3} className="px-6 py-8 text-center text-gray-500">No categories found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
