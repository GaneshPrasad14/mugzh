import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/gowns" className="block group">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden relative">
              {/* Main Image */}
              <img
                src="/cl.jpg"
                alt="Designer kids gowns"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          </Link>
          <div className="">
            <h3 className="text-lg font-normal text-foreground mb-1">
              Designer Gowns
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Elegant gowns handcrafted for your little princess
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/festive" className="block group">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden relative">
              {/* Main Image */}
              <img
                src="/cl4.jpg"
                alt="Festive kids collection"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          </Link>
          <div className="">
            <h3 className="text-lg font-normal text-foreground mb-1">
              Festive Collection
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Vibrant colors and patterns for every celebration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;