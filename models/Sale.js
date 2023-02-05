const { Schema, model } = require('mongoose');

const saleSchema = new Schema({
    products: [{
        name: {
            type: String,
            required: [true, 'Please input a product']
        },
        brand: {
            type: String,
            required: [true, 'Please input a brand']
        },
        price: {
            type: Number,
            required: [true, 'Please input a price']
        },
        category: {
            type: String,
            required: [true, 'Please input a category']
        },
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        }
    }],
    totalprice: {
        type: Number,
        required: [true, 'Please input total price']
    },
    ispaid: {
        type: Boolean,
        default: false
    },
    customer: {
        username: {
            type: String,
            required: true
        },
        userid: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }

}, { timestamps: true });

const Sale = model('Sale', saleSchema);

module.exports = Sale;