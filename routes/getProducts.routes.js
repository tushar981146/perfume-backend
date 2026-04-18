import express from "express";

const router = express.Router();

import { getAllProducts, getAllBestSellers, getProductById } from "../controllers/product.controller.js";

router.get("/products", getAllProducts)
router.get("/best-sellers", getAllBestSellers)
router.get("/products/:id", getProductById)

export default router;