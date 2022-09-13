import XLSX from "xlsx";
import { name } from "../routes/uploadFaculty.js"
import path from 'path';
import { fileURLToPath } from 'url';
import Faculty from "../models/faculty.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function uploadFaculty(req, res) {
  //console.log(name);
  var workbook = XLSX.readFile(path.join(__dirname, "..", "facultyUploadFiles", name));
  const sheets = workbook.SheetNames
  for (let i = 0; i < sheets.length; i++) {
    const temp = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[i]])
    temp.forEach((res) => {
        const data = {
            eid: res['Emp id'],
            name: res.Name,
            desig: res.Designation,
            phone: res.Phno,
            school: res.School,
            email: res.Email,
          };
          const newFaculty = new Faculty(data);
          newFaculty.save();

    })
  }
  //console.log(data)
}
