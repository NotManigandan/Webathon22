import XLSX from "xlsx";
import { name } from "../routes/uploadWish.js"
import path from 'path';
import { fileURLToPath } from 'url';
import Course from "../models/course.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function uploadWish(req, res) {
  //console.log(name);
  var workbook = XLSX.readFile(path.join(__dirname, "..", "wishUploadFiles", name));
  const sheets = workbook.SheetNames
  for (let i = 0; i < sheets.length; i++) {
    const temp = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[i]])
    temp.forEach((res) => {
        var code = res['Course Code'];
        var wish = res['Number of Wishlist received'];
        Course.findOneAndUpdate({code},{wish}, function(err){
            if(err){
                console.log(err);
            }
        })
    })
  }
  //console.log(data)
}
