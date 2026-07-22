import express from "express";
import { getKnowledge } from "../controllers/knowledge.controller.js";

const router = express.Router();

router.get("/", getKnowledge);

export default router;