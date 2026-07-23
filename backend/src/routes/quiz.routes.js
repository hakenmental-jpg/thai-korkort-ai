import express from "express";
import { getQuestions } from "../controllers/quiz.controller.js";

const router = express.Router();

router.get("/", getQuestions);

export default router;