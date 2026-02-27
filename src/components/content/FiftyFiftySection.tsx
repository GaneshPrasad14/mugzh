import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/casuals" className="block group">
            <div className="w-full aspect-[4/5] mb-3 overflow-hidden relative">
              {/* Main Image */}
              <img
                src="/cl2.jpg"
                alt="Casual collection"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          </Link>
          <div className="">
            <h3 className="text-lg font-normal text-foreground mb-1">
              Casual Wear
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Comfortable and stylish outfits for everyday play
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/sets" className="block group">
            <div className="w-full aspect-[4/5] mb-3 overflow-hidden relative">
              {/* Main Image */}
              <img
                src="/cl3.jpg"
                alt="Party set collection"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          </Link>
          <div className="">
            <h3 className="text-lg font-normal text-foreground mb-1">
              Party Sets
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Coordinated ensembles for special celebrations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;