import Course from "../models/course.js";
import Faculty from "../models/faculty.js";

export function getCourses(req,res){
        Course.find({}, (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
    
}


export function addCourses(req,res){
    const data = req.body;
    const newCourse = new Course(data);
    newCourse.save();
   

}

export function addFaculty(req,res){
    const data = req.body;
    const newFaculty = new Faculty(data);
    newFaculty.save();
   

}