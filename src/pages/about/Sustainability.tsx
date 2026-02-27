import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Sustainability"
            subtitle="Creating beautiful clothing while caring for our planet"
          />

          <ContentSection title="Our Environmental Commitment">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Ethical Manufacturing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We take pride in our ethical manufacturing processes. We ensure fair wages and safe working conditions for all our artisans and tailors who bring our designs to life.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Quality Fabrics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We select high-quality fabrics that are gentle on your child's skin and durable enough to withstand playtime. We prioritize breathable and comfortable materials.
                </p>
              </div>
            </div>

            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-2xl font-light text-foreground mb-6">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-light text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Made with Love</p>
                </div>
                <div>
                  <div className="text-3xl font-light text-primary mb-2">Safe</div>
                  <p className="text-sm text-muted-foreground">Skin-friendly materials</p>
                </div>
                <div>
                  <div className="text-3xl font-light text-primary mb-2">Local</div>
                  <p className="text-sm text-muted-foreground">Supporting local artisans</p>
                </div>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Sustainable Fashion">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in creating timeless pieces that can be passed down. Fast fashion creates waste, but quality clothing creates memories.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-light text-foreground">Durability</h3>
                  <p className="text-muted-foreground">
                    Our clothes are stitched to last, ensuring they can be worn by siblings or friends, reducing the need for constant replacement.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-light text-foreground">Minimal Waste</h3>
                  <p className="text-muted-foreground">
                    We optimize our fabric cutting patterns to minimize waste during the production process.
                  </p>
                </div>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Community & Care">
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                We are committed to building a community that values quality and care. Our goal is to provide clothing that makes both parents and children happy.
              </p>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Sustainability;