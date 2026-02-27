import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const RefundPolicy = () => {
    useEffect(() => {
        document.title = "Refund Policy - Mugizh Clothings";
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-6">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl font-light text-foreground mb-4">Refund & Cancellation Policy</h1>
                        <p className="text-muted-foreground">Last updated: February 06, 2026</p>
                    </header>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Return Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At Mugizh Clothings, we want you to be completely satisfied with your purchase.
                                We accept returns within <strong>7 days</strong> of delivery.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                To be eligible for a return, your item must be substantially in the same condition that you received it:
                                unworn, unwashed, and with all original tags attached.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Non-Returnable Items</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Certain items cannot be returned for hygiene or other reasons:
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>Customized or personalized orders</li>
                                <li>Items bought on clearance or final sale</li>
                                <li>Items that show signs of wear, wash, or damage</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Refund Process</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Once we receive your return, we will inspect it and notify you of the approval or rejection of your refund.
                                If approved, your refund will be processed within <strong>5-7 business days</strong> to your original method of payment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Exchanges</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We only replace items if they are defective or damaged. If you need to exchange it for the same item (e.g., different size),
                                please contact us immediately at care@mugizhclothings.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Cancellation Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You may cancel your order within <strong>24 hours</strong> of placing it, provided it has not yet been shipped.
                                To cancel, please contact us at 8778579887 or email care@mugizhclothings.com with your order number.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-2">
                                If the order has already been shipped, standard return policies will apply.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-light text-foreground mb-4">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about our Refund & Cancellation Policy, please contact us:
                            </p>
                            <div className="mt-4 text-muted-foreground">
                                <p>Phone: 8778579887, 9789554467</p>
                                <p>Email: care@mugizhclothings.com</p>
                                <p>Address: 2/369, Anna nesavalar colony, Poondi ring road, Pandiyan nagar, Tirupur 641603</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RefundPolicy;
