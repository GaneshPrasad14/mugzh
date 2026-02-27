import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

export default function ManageContent() {
    const [sections, setSections] = useState<any>({});

    // Local state for the hero form
    const [heroTitle, setHeroTitle] = useState("");
    const [heroSubtitle, setHeroSubtitle] = useState("");
    const [heroImage, setHeroImage] = useState<File | null>(null);
    const [heroPreview, setHeroPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const res = await fetch("http://localhost:5002/api/admin/content");
            const data = await res.json();

            const contentMap: any = {};
            data.forEach((item: any) => {
                contentMap[item.section] = item;
            });
            setSections(contentMap);

            // Init hero state
            if (contentMap['Hero']) {
                setHeroTitle(contentMap['Hero'].title || "");
                setHeroSubtitle(contentMap['Hero'].subtitle || "");
                setHeroPreview(`http://localhost:5002${contentMap['Hero'].image}`);
            }
        } catch (error) {
            toast.error("Failed to fetch content data");
        }
    };

    const handleHeroSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("section", "Hero");
        formData.append("title", heroTitle);
        formData.append("subtitle", heroSubtitle);
        if (heroImage) {
            formData.append("image", heroImage);
        }

        try {
            const res = await fetch("http://localhost:5002/api/admin/content", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                toast.success("Hero section updated!");
                fetchContent(); // refresh
            } else {
                toast.error("Failed to update Hero section");
            }
        } catch (err) {
            toast.error("Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto min-h-screen">
            <Link to="/admin" className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 w-fit">
                <ArrowLeft size={16} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold mb-8">Manage Site Content</h1>

            <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-6">Hero Section</h2>

                <form onSubmit={handleHeroSave} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Title</label>
                                <input type="text" value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} className="w-full px-3 py-2 border rounded-md" placeholder="Joy in Every Style" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Subtitle</label>
                                <input type="text" value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} className="w-full px-3 py-2 border rounded-md" placeholder="Discover the magical collection of kids clothing" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Background Image</label>
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files?.[0] || null;
                                    setHeroImage(file);
                                    if (file) {
                                        setHeroPreview(URL.createObjectURL(file));
                                    }
                                }}
                                    className="w-full text-sm mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="block text-sm font-medium mb-1">Preview</label>
                            <div className="flex-1 bg-gray-100 rounded-md border overflow-hidden flex items-center justify-center relative min-h-[200px]">
                                {heroPreview ? (
                                    <img src={heroPreview} alt="Hero Preview" className="absolute inset-0 w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-400">No Image</span>
                                )}
                                {/* Overlay Text Preview */}
                                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center p-4">
                                    <h3 className="text-2xl font-serif mb-2">{heroTitle || "Title Preview"}</h3>
                                    <p className="text-sm">{heroSubtitle || "Subtitle Preview"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t">
                        <button type="submit" disabled={loading} className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50">
                            <Save size={18} />
                            {loading ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}
