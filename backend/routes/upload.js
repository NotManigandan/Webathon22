import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import { uploadCourse } from "../controllers/upload.js";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
  
        // Uploads is the Upload_folder_name
        cb(null, "courseUploadFiles")
    },
    filename: function (req, file, cb) {
      //const {originalName} = "file.pdf";
      cb(null, `${uuidv4()}-course.xlsx`);
    }
  })
const router = express.Router();
var upload = multer({ storage:storage });
router.post("/uploadCourse",upload.single("file"), uploadCourse);

export default router;