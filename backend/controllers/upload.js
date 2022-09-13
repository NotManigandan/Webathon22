import XLSX from "xlsx";
import multer from "multer";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
  
        // Uploads is the Upload_folder_name
        cb(null, "courseUploadFiles")
    },
    filename: function (req, file, cb) {
      const {originalName} = file;
      cb(null, originalName);
    }
  })


export function uploadCourse(req, res) {
    // var workbook = XLSX.readFile("./courses.xlsx");
    // let worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // for (let index = 1; index < 5; index++) {
    //     const courseCode = worksheet[`A${index}`].v;
    //     const courseName = worksheet[`B${index}`].v;

    //     console.log(courseCode);
    //     console.log(courseName);    
    // }
    res.send("yo");
}

