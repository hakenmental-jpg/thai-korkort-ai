import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// API Routes
app.use("/api", routes);

export default app;