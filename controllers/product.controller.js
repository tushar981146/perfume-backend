import asyncErrorHandler from "../utils/asyncHandler.js";
import ProductRepo from "../repo/prodiucts.repo.js";

export const getAllProducts = asyncErrorHandler( async (req, res) => {


    const products = await ProductRepo.getAllProducts();
    console.log('Products retrieved:', products);

    res.status(200).json({
        success: true,
        products
    });
});


export const getAllBestSellers = asyncErrorHandler( async (req, res) => {

    const bestSellers = await ProductRepo.getAllBestSellers();   

    console.log('Best sellers retrieved:', bestSellers);

    res.status(200).json({
        success: true,
        bestSellers
    });
});

export const getProductById = asyncErrorHandler( async (req, res) => {

    const { id } = req.params;
    const product = await ProductRepo.getProductById(id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }  
    res.status(200).json({
        success: true,
        product
    });
});

