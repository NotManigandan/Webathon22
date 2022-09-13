import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import { uploadFaculty } from "../controllers/uploadFaculty.js";
var name;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "facultyUploadFiles")
  },
  filename: function (req, file, cb) {
    //const {originalName} = "file.pdf";
    name = `${uuidv4()}-faculty.xlsx`;
    cb(null, name);
  }
})
const router = express.Router();
var upload = multer({ storage: storage });
router.post("/uploadFaculty", upload.single("file"), uploadFaculty);

export default router;
export { name };