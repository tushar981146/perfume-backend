import Product from "../models/product.models.js"


const ProductRepo = {

    getAllProducts: async () => {
        const allProducts = await Product.find();
        return allProducts;
    },
    getAllBestSellers: async () => {
        const bestSellers = await Product.find({ isBestSeller: true });
        return bestSellers;
    },
    getProductById: async (id) => {
        const product = await Product.findById(id);
        console.log('Product found by ID:', product);
        return product;
    }

}

export default ProductRepo;