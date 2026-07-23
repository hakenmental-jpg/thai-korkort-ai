import express from "express";
import { getSigns } from "../controllers/sign.controller.js";

const router = express.Router();

router.get("/", getSigns);

export default router;