import express from "express";
import { healthCheck } from "../controllers/health.controller.js";
import { getKnowledge } from "../controllers/knowledge.controller.js";

const router = express.Router();

router.get("/health", healthCheck);
router.get("/knowledge", getKnowledge);

export default router;