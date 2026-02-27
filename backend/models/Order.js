import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    quantity: Number,
    image: String,
    size: String
});

const OrderSchema = new mongoose.Schema({
    customerDetails: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String
    },
    shippingAddress: {
        address: String,
        city: String,
        postalCode: String,
        country: String
    },
    billingDetails: {
        isSameAsShipping: Boolean,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        postalCode: String,
        country: String
    },
    items: [OrderItemSchema],
    subtotal: Number,
    shippingCost: Number,
    totalAmount: Number,
    paymentMethod: {
        type: String, // 'razorpay' or 'cod'
        required: true
    },
    paymentStatus: {
        type: String, // 'Pending', 'Paid', 'COD'
        default: 'Pending'
    },
    razorpayOrderId: String,
    razorpayPaymentId: String,
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
