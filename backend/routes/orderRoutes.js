import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import Order from '../models/Order.js';

const router = express.Router();

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Helper to send emails
const sendConfirmationEmails = async (order) => {
    try {
        const { customerDetails, items, totalAmount, paymentMethod } = order;

        const itemsList = items.map(item => `- ${item.name} (${item.quantity}x) = ${item.price}`).join('\n');

        const addressString = shippingAddress ? `${shippingAddress.address}\n${shippingAddress.city}, ${shippingAddress.postalCode}\n${shippingAddress.country}` : 'Not provided';

        const mailOptionsAdmin = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Order Received - ${paymentMethod.toUpperCase()}`,
            text: `A new order has been placed!\n\nCustomer: ${customerDetails.firstName} ${customerDetails.lastName}\nEmail: ${customerDetails.email}\nPhone: ${customerDetails.phone}\n\nShipping Address:\n${addressString}\n\nItems:\n${itemsList}\n\nTotal: ₹${totalAmount}\nPayment Method: ${paymentMethod.toUpperCase()}`
        };

        const mailOptionsCustomer = {
            from: process.env.EMAIL_USER,
            to: customerDetails.email,
            subject: `Order Confirmation - Thank you for your purchase!`,
            text: `Dear ${customerDetails.firstName},\n\nThank you for choosing us! Your order has been successfully placed.\n\nItems:\n${itemsList}\n\nTotal Paid: ₹${totalAmount}\nPayment Method: ${paymentMethod.toUpperCase()}\n\nWe will notify you once your order ships.\n\nBest Regards,\nThe Team`
        };

        await transporter.sendMail(mailOptionsAdmin);
        await transporter.sendMail(mailOptionsCustomer);
        console.log("Emails sent successfully");
    } catch (error) {
        console.error("Error sending emails:", error);
    }
}

// 1. Create Razorpay Order
router.post('/create', async (req, res) => {
    try {
        const { customerDetails, shippingAddress, billingDetails, items, subtotal, shippingCost, totalAmount } = req.body;

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });

        const options = {
            amount: Math.round(totalAmount * 100), // amount in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };

        const razorpayOrder = await razorpay.orders.create(options);

        const newOrder = new Order({
            customerDetails,
            shippingAddress,
            billingDetails,
            items,
            subtotal,
            shippingCost,
            totalAmount,
            paymentMethod: 'razorpay',
            paymentStatus: 'Pending',
            razorpayOrderId: razorpayOrder.id
        });

        await newOrder.save();

        res.status(200).json({
            success: true,
            orderId: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            dbOrderId: newOrder._id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 2. Verify Razorpay Payment
router.post('/verify', async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, dbOrderId } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === razorpay_signature) {
            // Payment is successful
            const order = await Order.findByIdAndUpdate(dbOrderId, {
                paymentStatus: 'Paid',
                razorpayPaymentId: razorpay_payment_id
            }, { new: true });

            if (order) {
                // Send Confirmation Emails
                sendConfirmationEmails(order);
            }

            res.status(200).json({ success: true, message: 'Payment verified successfully' });
        } else {
            res.status(400).json({ success: false, message: 'Invalid signature' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 3. Process Cash on Delivery (COD) Order
router.post('/cod', async (req, res) => {
    try {
        const { customerDetails, shippingAddress, billingDetails, items, subtotal, shippingCost, totalAmount } = req.body;

        const newOrder = new Order({
            customerDetails,
            shippingAddress,
            billingDetails,
            items,
            subtotal,
            shippingCost,
            totalAmount,
            paymentMethod: 'cod',
            paymentStatus: 'COD'
        });

        await newOrder.save();

        // Send Confirmation Emails
        sendConfirmationEmails(newOrder);

        res.status(200).json({
            success: true,
            message: 'Order placed successfully via COD',
            dbOrderId: newOrder._id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default router;
