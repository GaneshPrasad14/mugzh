import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const ShippingPolicy = () => {
    useEffect(() => {
        document.title = "Shipping Policy - Mugizh Clothings";
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-6">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl font-light text-foreground mb-4">Shipping & Delivery Policy</h1>
                        <p className="text-muted-foreground">Last updated: February 06, 2026</p>
                    </header>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Shipping Area</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Mugizh Clothings currently ships to all major cities and towns within <strong>India</strong>.
                                We do not offer international shipping at this time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Processing Time</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All orders are processed within <strong>1-2 business days</strong>. Orders are not shipped or delivered on Sundays or holidays.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-2">
                                If we are experiencing a high volume of orders, shipments may be delayed by a few days.
                                Please allow additional days in transit for delivery.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Delivery Timeframes</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Estimated delivery times for India:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li><strong>South India:</strong> 2-4 business days</li>
                                <li><strong>Rest of India:</strong> 5-7 business days</li>
                                <li><strong>Remote Locations:</strong> 7-10 business days</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Delivery delays can occasionally occur due to courier logistics or external factors.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Shipping Rates</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Shipping charges for your order will be calculated and displayed at checkout.
                                We may offer free shipping for orders above a certain value, which will be prominently displayed on the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Shipment Confirmation & Tracking</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You will receive a Shipment Confirmation email or SMS once your order has shipped containing your tracking number(s).
                                The tracking number will be active within 24 hours.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about your order or shipment, please contact us:
                            </p>
                            <div className="mt-4 text-muted-foreground">
                                <p>Phone: 8778579887, 9789554467</p>
                                <p>Email: care@mugizhclothings.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ShippingPolicy;
