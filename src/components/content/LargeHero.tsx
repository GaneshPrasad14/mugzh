import { useState, useEffect } from "react";

const LargeHero = () => {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch("http://localhost:5002/api/admin/content/Hero");
        if (res.ok) {
          const data = await res.json();
          setContent(data);
        }
      } catch (error) {
        console.error("Failed to fetch hero content:", error);
      }
    };
    fetchContent();
  }, []);

  // Default values if not yet set in admin panel
  const heroImage = content?.image ? `http://localhost:5002${content.image}` : "/cl.jpg";
  const title = content?.title || "Little Moments, Big Styles";
  const subtitle = content?.subtitle || "Discover our latest collection crafted for comfort and elegance";

  return (
    <section className="w-full mb-16 relative">
      <div className="w-full h-[85vh] overflow-hidden relative">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wide shadow-sm">
            {title}
          </h2>
          <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl shadow-sm mb-8">
            {subtitle}
          </p>
          <button className="px-8 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors duration-300">
            SHOP NEW ARRIVALS
          </button>
        </div>
      </div>
    </section>
  );
};

export default LargeHero;