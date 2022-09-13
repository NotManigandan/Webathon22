import express from "express";
import { uploadCourse } from "../controllers/upload.js";
const router = express.Router();

router.post("/uploadCourse", uploadCourse);

export default router;