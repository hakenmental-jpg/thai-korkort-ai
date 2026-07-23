import express from "express";

import { healthCheck } from "../controllers/health.controller.js";
import { getKnowledge } from "../controllers/knowledge.controller.js";

import signsRoutes from "./sign.routes.js";
import quizRoutes from "./quiz.routes.js";

const router = express.Router();

// Health
router.get("/health", healthCheck);

// Knowledge
router.get("/knowledge", getKnowledge);

// Road Signs
router.use("/signs", signsRoutes);

// Quiz
router.use("/quiz", quizRoutes);

export default router;