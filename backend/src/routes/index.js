import express from "express";

import { healthCheck } from "../controllers/health.controller.js";
import { getKnowledge } from "../controllers/knowledge.controller.js";

import signsRoutes from "./sign.routes.js";

const router = express.Router();

router.get("/health", healthCheck);

router.get("/knowledge", getKnowledge);

// Road Signs API
router.use("/signs", signsRoutes);

export default router;