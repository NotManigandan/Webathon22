import XLSX from "xlsx";
import { name } from "../routes/upload.js"
import path from 'path';
import { fileURLToPath } from 'url';
import Course from "../models/course.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function uploadCourse(req, res) {
  //console.log(name);
  var workbook = XLSX.readFile(path.join(__dirname, "..", "courseUploadFiles", name));
  const sheets = workbook.SheetNames
  for (let i = 0; i < sheets.length; i++) {
    const temp = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[i]])
    temp.forEach((res) => {
      const data = {
        code: res['Course Code'],
        name: res['Course Name'],
        lhours: res['Lecture hours'],
        phours: res['Practical hours'],
        thours: res['Tutorial hours'],
        jhours: res['J Project hours'],
        credits: res.Credits,
        wish: 0
      };
      const newCourse = new Course(data);
      newCourse.save();
    })
  }
  //console.log(data)
}
