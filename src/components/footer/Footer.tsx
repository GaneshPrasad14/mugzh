const Footer = () => {
  return (
    <footer className="w-full bg-white text-black pt-8 pb-2 px-6 border-t border-[#e5e5e5] mt-48">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Brand - Left side */}
          <div>
            <img
              src="/WhatsApp_Image_2026-02-04_at_8.56.24_PM-removebg-preview.png"
              alt="Mugizh Clothings"
              className="mb-4 h-24 w-auto"
            />
            <p className="text-sm font-light text-black/70 leading-relaxed max-w-md mb-6">
              Providing Good quality products in affordable range. Wholesale and Retail available.
            </p>

            {/* Contact Information */}
            <div className="space-y-2 text-sm font-light text-black/70">
              <div>
                <p className="font-normal text-black mb-1">Visit Us</p>
                <p>2/369, Anna nesavalar colony,</p>
                <p>Poondi ring road, Pandiyan nagar, Tirupur 641603</p>
              </div>
              <div>
                <p className="font-normal text-black mb-1 mt-3">Contact</p>
                <p>8778579887, 9789554467</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shop */}
            <div>
              <h4 className="text-sm font-normal mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">New In</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Frocks</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Gowns</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Sets</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Casuals</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-normal mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Fabric Care</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Returns</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Shipping</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-normal mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Pinterest</a></li>
                <li><a href="#" className="text-sm font-light text-black/70 hover:text-black transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - edge to edge separator */}
      <div className="border-t border-[#e5e5e5] -mx-6 px-6 pt-4 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-black text-center md:text-left">
            © 2026 Mugizh Clothings. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a href="/privacy-policy" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Terms of Service
            </a>
            <a href="/refund-policy" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Refund Policy
            </a>
            <a href="/shipping-policy" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;