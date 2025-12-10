import express from "express";
import { getProduct, createProduct } from "../controllers/contentController.js";
import { validateProduct } from "../middleware/validate.js";

import { authRequired } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authRequired, createProduct);
router.put("/:id", authRequired, updateProduct);
router.delete("/:id", authRequired, deleteProduct);

router.get("/", getProduct);
router.post("/", validateProduct, createProduct);
// router.put("/:id", validateProduct, updateProduct); // or router.patch
// router.delete("/:id", deleteProduct);
export default router;
