import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./services/db.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

dotenv.config();

const app = express();

// --- CORS setup (allow only your UI domain) ---
const allowedOrigins = process.env.CLIENT_ORIGINS.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Postman
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// --- Middleware ---
app.use(express.json());

// --- Routes ---
app.use("/products", productRoutes);

// --- DB Connection ---
connectDB(process.env.MONGO_URI);

// --- Start server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
