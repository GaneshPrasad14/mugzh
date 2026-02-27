import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

interface Product {
    _id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    hoverImage: string;
    isNewProduct?: boolean;
}

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!query) {
                setProducts([]);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                // Assuming your backend has a /api/products/search endpoint or filters by query
                // If not, we fetch all products and filter on the frontend for now
                const res = await fetch(`http://localhost:5002/api/products`);
                const data = await res.json();

                if (Array.isArray(data)) {
                    const lowerQuery = query.toLowerCase();
                    const filtered = data.filter(product =>
                        product.name.toLowerCase().includes(lowerQuery) ||
                        product.category.toLowerCase().includes(lowerQuery)
                    );
                    setProducts(filtered);
                } else {
                    setProducts([]);
                }
            } catch (error) {
                console.error("Failed to fetch search results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-light text-foreground mb-2">Search Results</h1>
                    <p className="text-muted-foreground mb-8">
                        Showing results for "{query}"
                    </p>

                    {loading ? (
                        <div className="w-full text-center py-20 text-sm font-light uppercase text-foreground">
                            Searching...
                        </div>
                    ) : products.length === 0 ? (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-light text-foreground mb-4">No results found</h3>
                            <p className="text-muted-foreground font-light text-sm max-w-sm mx-auto mb-8">
                                We couldn't find anything matching "{query}". Try checking your spelling or using different keywords.
                            </p>
                            <Link to="/category/shop" className="text-sm border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {products.map((product) => (
                                <Link key={product._id} to={`/product/${product._id}`}>
                                    <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                                        <CardContent className="p-0">
                                            <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                                                <img
                                                    src={product.image?.startsWith('/uploads') ? `http://localhost:5002${product.image}` : product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                                                />
                                                <img
                                                    src={product.hoverImage?.startsWith('/uploads') ? `http://localhost:5002${product.hoverImage}` : product.hoverImage}
                                                    alt={`${product.name} lifestyle`}
                                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-0 bg-black/[0.03]"></div>
                                                {product.isNewProduct && (
                                                    <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-black bg-white/80 rounded">
                                                        NEW
                                                    </div>
                                                )}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-light text-foreground">{product.category}</p>
                                                <div className="flex justify-between items-center">
                                                    <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                                                    <p className="text-sm font-light text-foreground">{product.price}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SearchResults;
