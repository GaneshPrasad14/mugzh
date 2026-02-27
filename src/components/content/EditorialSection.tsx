import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const EditorialSection = () => {
  return <section className="w-full mb-16 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-4 max-w-[630px]">
        <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
          Crafted with Love for Your Little Ones
        </h2>
        <p className="text-sm font-light text-foreground leading-relaxed">At Mugizh Clothings, we believe that every child deserves to shine. Our collections are designed with comfort and style in mind, ensuring your little ones look their best for every occasion. From playful casuals to elegant party wear, we bring you the finest quality fabrics and designs.
        </p>
        <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-light text-foreground hover:text-foreground/80 transition-colors duration-200">
          <span>Read our full story</span>
          <ArrowRight size={12} />
        </Link>
      </div>

      <div className="order-first md:order-last">
        <div className="w-full aspect-square overflow-hidden relative">
          <img
            src="/cl2.jpg"
            alt="Mugizh Clothings vision"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>;
};
export default EditorialSection;