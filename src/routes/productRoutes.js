import express from "express";
import { getProduct, createProduct } from "../controllers/contentController.js";
import { validateProduct } from "../middleware/validate.js";

const router = express.Router();
router.get("/", getProduct);
router.post("/", validateProduct, createProduct);
// router.put("/:id", validateProduct, updateProduct); // or router.patch
// router.delete("/:id", deleteProduct);
export default router;
