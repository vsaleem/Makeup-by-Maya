import express from "express";
const router = express.Router();
import {
	getProducts,
	getProductsById,
} from "../controllers/productController.js";
// import { protect, adminn } from '../middleware/authMiddleware.js'

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

export default router;
