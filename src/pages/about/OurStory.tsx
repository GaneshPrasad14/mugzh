import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Our Story"
            subtitle="A journey of passion, craftsmanship, and timeless elegance"
          />

          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="Mugizh Clothings team"
              title="Experience & Quality"
              content="Mugizh Clothings brings you more than 10 years of experience in the Garment field. We are dedicated to providing good quality products at an affordable range, available for both wholesale and retail. Our journey is driven by a passion for creating beautiful, comfortable clothing for your little ones."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Our Promise">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Quality First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece in our collection is crafted with care, ensuring the highest standards of quality. We believe that affordable fashion should never compromise on durability or comfort.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Customer Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over a decade of experience, we understand our customers' needs. Whether you are looking for a single dress or wholesale orders, we are here to serve you with the best.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue perfection in every detail, from the initial design concept to the final polish.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Each piece reflects genuine craftsmanship and tells an authentic story of artistry and care.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our designs and techniques while honoring timeless aesthetic principles.
                </p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;