import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    {
      name: "Mugizh Clothings",
      address: "2/369, Anna nesavalar colony, Poondi ring road, Pandiyan nagar, Tirupur 641603",
      phone: "8778579887, 9789554467",
      hours: "Mon-Sat: 9AM-9PM",
      services: ["Retail", "Wholesale", "Custom Orders"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Store Locator"
            subtitle="Visit us to explore our latest collections"
          />

          <ContentSection title="Our Location">
            <div className="grid gap-8">
              {stores.map((store, index) => (
                <div key={index} className="bg-background rounded-lg p-8 border border-border">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>{store.address}</p>
                        <p>{store.phone}</p>
                        <p>{store.hours}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button variant="outline" className="rounded-none">
                          Get Directions
                        </Button>
                        <Button className="rounded-none">
                          Call Us
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-light text-foreground">Available Services</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {store.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Direct Visits">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience our fabrics and designs firsthand. Our staff will be happy to assist you in finding the perfect outfit for your child.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3">
                  <h4 className="text-lg font-light text-foreground">Personal Assistance</h4>
                  <p className="text-muted-foreground text-sm">
                    Our team can help you select the right size and style.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-light text-foreground">Custom Orders</h4>
                  <p className="text-muted-foreground text-sm">
                    Discuss your specific requirements with us for bulk or custom orders.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-light text-foreground">Wholesale Inquiries</h4>
                  <p className="text-muted-foreground text-sm">
                    View our catalog and discuss wholesale partnership opportunities.
                  </p>
                </div>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Online Assistance">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-4">Can't visit in person?</h3>
              <p className="text-muted-foreground mb-6">
                You can always order online or contact us via WhatsApp for any queries. We deliver across India.
              </p>
              <Button variant="outline" className="rounded-none" onClick={() => window.open('https://wa.me/918778579887', '_blank')}>
                Chat on WhatsApp
              </Button>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default StoreLocator;