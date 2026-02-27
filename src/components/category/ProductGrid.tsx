import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  hoverImage: string;
  isNewProduct?: boolean;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { category, collectionName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://localhost:5002/api/products";
        if (collectionName) {
          url = `http://localhost:5002/api/products?collection=${encodeURIComponent(collectionName)}`;
        } else if (category === 'new-in') {
          url = "http://localhost:5002/api/products?isNew=true";
        } else if (category && category !== 'shop') {
          url = `http://localhost:5002/api/products?category=${encodeURIComponent(category)}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, collectionName]);

  if (loading) {
    return <div className="w-full text-center py-10 tracking-widest text-sm font-light uppercase text-foreground">Loading collection...</div>;
  }

  if (!products || products.length === 0) {
    return (
      <div className="w-full text-center py-20 px-6">
        <h3 className="text-xl font-light text-foreground mb-4">No products found</h3>
        <p className="text-muted-foreground font-light text-sm max-w-sm mx-auto">
          We couldn't find any items matching this category. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full px-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <Card
              className="border-none shadow-none bg-transparent group cursor-pointer"
            >
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
                  <p className="text-sm font-light text-foreground">
                    {product.category}
                  </p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm font-light text-foreground">
                      {product.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Pagination />
    </section>
  );
};

export default ProductGrid;