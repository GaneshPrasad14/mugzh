import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Edit2, X } from "lucide-react";
import { toast } from "sonner";

export default function ManageCollections() {
    const [collections, setCollections] = useState<any[]>([]);
    const [newCollectionName, setNewCollectionName] = useState("");
    const [editingCollectionId, setEditingCollectionId] = useState<string | null>(null);

    const fetchCollections = async () => {
        try {
            const res = await fetch("http://localhost:5002/api/admin/collections");
            const data = await res.json();
            setCollections(Array.isArray(data) ? data : []);
        } catch (error) {
            toast.error("Failed to fetch collections");
        }
    };

    useEffect(() => {
        fetchCollections();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCollectionName) return;

        try {
            if (editingCollectionId) {
                // Update existing collection
                const res = await fetch(`http://localhost:5002/api/admin/collections/${editingCollectionId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: newCollectionName })
                });
                if (res.ok) {
                    toast.success("Collection updated!");
                    setNewCollectionName("");
                    setEditingCollectionId(null);
                    fetchCollections();
                } else {
                    toast.error("Error updating collection");
                }
            } else {
                // Create new collection
                const res = await fetch("http://localhost:5002/api/admin/collections", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: newCollectionName })
                });
                if (res.ok) {
                    toast.success("Collection created!");
                    setNewCollectionName("");
                    fetchCollections();
                } else {
                    toast.error("Error creating collection");
                }
            }
        } catch (error) {
            toast.error("Server error");
        }
    };

    const handleEdit = (col: any) => {
        setEditingCollectionId(col._id);
        setNewCollectionName(col.name);
    };

    const cancelEdit = () => {
        setEditingCollectionId(null);
        setNewCollectionName("");
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this collection?")) return;
        try {
            const res = await fetch(`http://localhost:5002/api/admin/collections/${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Collection deleted!");
                fetchCollections();
            } else {
                toast.error("Failed to delete collection");
            }
        } catch (error) {
            toast.error("Server error");
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto min-h-screen">
            <Link to="/admin" className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 w-fit">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>

            <h1 className="text-3xl font-bold mb-8">Manage Collections</h1>

            <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">{editingCollectionId ? "Edit Collection" : "Add New Collection"}</h2>
                <form onSubmit={handleSubmit} className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Collection Name (e.g. Summer Collection)"
                        value={newCollectionName}
                        onChange={(e) => setNewCollectionName(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-md"
                        required
                    />
                    {editingCollectionId && (
                        <button type="button" onClick={cancelEdit} className="px-4 py-2 text-gray-600 hover:text-black border rounded-md hover:bg-gray-50 flex items-center justify-center">
                            <X size={20} />
                        </button>
                    )}
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                        {editingCollectionId ? "Update" : "Create"}
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                    <h2 className="text-xl font-bold">Existing Collections</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 font-medium text-gray-500">Name</th>
                                <th className="px-6 py-3 font-medium text-gray-500">Slug</th>
                                <th className="px-6 py-3 font-medium text-gray-500 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y relative">
                            {collections.map(col => (
                                <tr key={col._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{col.name}</td>
                                    <td className="px-6 py-4">{col.slug}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button onClick={() => handleEdit(col)} className="text-blue-500 hover:text-blue-700 p-1">
                                                <Edit2 size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(col._id)} className="text-red-500 hover:text-red-700 p-1">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {collections.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                        No collections found. Start by adding one above.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
