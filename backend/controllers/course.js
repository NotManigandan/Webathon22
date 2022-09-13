import Course from "../models/course.js";

export function getCourses(req,res){
        Course.find({}, (err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
    
}