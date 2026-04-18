import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    perfumeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },

    isBestSeller: {
        type: Boolean,
        default: false
    },
    sizes: [String],
    reviews: Number,
    originalPrice: Number,
    discount: String,
    color: String,
    notes: [
        {
            label: String,
            sub: String,
            type: String
        }
    ],
    stats: [
        {
            label: String,
            sub: String
        }
    ]

})

const Product = mongoose.model("Product", productSchema);

export default Product;