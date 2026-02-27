import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import AboutSidebar from "../../components/about/AboutSidebar";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Customer Care"
            subtitle="We're here to help you with all your clothing needs"
          />

          <ContentSection title="Contact Information">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Phone</h3>
                <p className="text-muted-foreground">8778579887<br />9789554467</p>
                <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-9PM EST</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Email</h3>
                <p className="text-muted-foreground">care@mugizhclothings.com</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Address</h3>
                <p className="text-muted-foreground">
                  2/369, Anna nesavalar colony, <br />
                  Poondi ring road, Pandiyan nagar, <br />
                  Tirupur 641603
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Frequently Asked Questions">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="shipping" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Do you ship all over India?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer shipping across India. Standard delivery typically takes 3-7 business days depending on your location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept returns for unworn items with tags intact within 7 days of delivery. Please contact us to initiate a return.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="wholesale" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Do you offer wholesale?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer wholesale pricing for bulk orders. Please contact us at 8778579887 for more details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ContentSection>

          <ContentSection title="Contact Form">
            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground">First Name</label>
                    <Input className="rounded-none" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground">Last Name</label>
                    <Input className="rounded-none" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">Email</label>
                  <Input type="email" className="rounded-none" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">Order Number (Optional)</label>
                  <Input className="rounded-none" placeholder="Enter your order number if applicable" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground">How can we help you?</label>
                  <Textarea
                    className="rounded-none min-h-[120px]"
                    placeholder="Please describe your inquiry in detail"
                  />
                </div>

                <Button type="submit" className="w-full rounded-none">
                  Send Message
                </Button>
              </form>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerCare;