import express from "express";
import { addCourses, addFaculty, getCourses } from "../controllers/course.js";
const router = express.Router();

router.get("/courses", getCourses);
router.post("/courses", addCourses);

router.post("/faculty", addFaculty);
export default router;