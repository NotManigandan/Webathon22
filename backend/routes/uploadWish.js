import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import { uploadWish } from "../controllers/uploadWish.js";
var name;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "wishUploadFiles")
  },
  filename: function (req, file, cb) {
    //const {originalName} = "file.pdf";
    name = `${uuidv4()}-wish.xlsx`;
    cb(null, name);
  }
})
const router = express.Router();
var upload = multer({ storage: storage });
router.post("/uploadWish", upload.single("file"), uploadWish);

export default router;
export { name };