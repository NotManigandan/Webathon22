import XLSX from "xlsx";
import multer from "multer";
import uuid from "uuid";

export function uploadCourse(req, res) {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '../courseUploadFiles')
        },
        filename: (req, file, cb) => {
            const { originalname } = file;
            cb(null, `${uuid()}-originalname`);
        }
    });
    
const upload = multer({ storage }); 

app.post('/upload', , (req, res) => {
    return res.json({ status: 'OK', uploaded: req.files.length });
});

    // var workbook = XLSX.readFile("./courses.xlsx");
    // let worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // for (let index = 1; index < 5; index++) {
    //     const courseCode = worksheet[`A${index}`].v;
    //     const courseName = worksheet[`B${index}`].v;

    //     console.log(courseCode);
    //     console.log(courseName);    
    // }
}

