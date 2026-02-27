import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Size Guide"
            subtitle="Find the perfect fit for your little ones"
          />

          <ContentSection title="Clothing Size Chart">
            <div className="space-y-8">
              <div className="bg-muted/10 rounded-lg p-8">
                <h3 className="text-xl font-light text-foreground mb-6">How to Measure</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Chest</h4>
                    <p className="text-muted-foreground text-sm">
                      Measure around the fullest part of the chest, keeping the tape horizontal.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Waist</h4>
                    <p className="text-muted-foreground text-sm">
                      Measure around the natural waistline, allowing the tape to sit loosely.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Length</h4>
                    <p className="text-muted-foreground text-sm">
                      Measure from the shoulder to the hem of the dress.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/20">
                      <th className="border border-border p-3 text-left font-light">Age Group</th>
                      <th className="border border-border p-3 text-left font-light">Chest (in)</th>
                      <th className="border border-border p-3 text-left font-light">Waist (in)</th>
                      <th className="border border-border p-3 text-left font-light">Length (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { age: "0-1 Year", chest: "20", waist: "19", length: "18" },
                      { age: "1-2 Years", chest: "22", waist: "21", length: "22" },
                      { age: "2-3 Years", chest: "23", waist: "22", length: "23" },
                      { age: "3-4 Years", chest: "24", waist: "23", length: "24" },
                      { age: "4-5 Years", chest: "25", waist: "24", length: "26" },
                      { age: "5-6 Years", chest: "26", waist: "25", length: "28" },
                      { age: "6-7 Years", chest: "27", waist: "26", length: "30" },
                      { age: "7-8 Years", chest: "28", waist: "27", length: "32" },
                      { age: "8-9 Years", chest: "29", waist: "28", length: "34" },
                      { age: "9-10 Years", chest: "30", waist: "29", length: "36" },
                      { age: "11-12 Years", chest: "32", waist: "30", length: "38" },
                      { age: "13-14 Years", chest: "34", waist: "32", length: "40" }
                    ].map((size, index) => (
                      <tr key={index} className="hover:bg-muted/10">
                        <td className="border border-border p-3">{size.age}</td>
                        <td className="border border-border p-3">{size.chest}</td>
                        <td className="border border-border p-3">{size.waist}</td>
                        <td className="border border-border p-3">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Need Help?">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Still unsure about sizing? Our consultants are here to help you find the perfect fit.
                Contact us via WhatsApp for quick assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-none" onClick={() => window.open('https://wa.me/918778579887', '_blank')}>
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SizeGuide;