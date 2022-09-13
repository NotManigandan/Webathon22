import express from "express";
import { uploadCourse } from "../controllers/upload.js";
const router = express.Router();

router.post("/uploadCourse", upload.single('avatar'), uploadCourse);

export default router;