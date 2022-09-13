import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./courseStyle.css";
import Course from "./Course.js";
function CoursePage() {
    const [courses, setCourses] = useState([]);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [updates, setUpdates] = useState(false);

    const [courseCode, setCourseCode] = useState("")
  const [courseName, setCourseName] = useState("")
  const [lectureHours, setLectureHours] = useState("")
  const [tutorialHours, setTutorialHours] = useState("")
  const [practicalHours, setPracticalHours] = useState("")
  const [projectHours, setProjectHours] = useState("")
  const [credits, setCredits] = useState("")

    useEffect(()=>{
      axios.get("/courses")
      .then((response)=>{
        setCourses(response.data);
      })
    },[updates])

    
  const handleSubmit = (e) => {
    e.preventDefault();
  }

    function handleSubmit2(event){
        event.preventDefault();
        const url = "/uploadCourse";
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
        headers: {
            'content-type': 'multipart/form-data',
        },
        };
        axios.post(url, formData, config).then((response) => {
        console.log(response.data);
        });
    }
    function FHandler(event) {
        setFile(event.target.files[0]);
    }
  return (
    <div>

        <div className="upload-se">
            <form>
             <input type = "file" onChange={FHandler} name="myFile" />
             <button type="submit" onClick={handleSubmit2}>Upload</button>
            </form>
            {fileName}
        </div>
        <div>
      <h2>Add Course</h2>
      <form>
        <field className="inputField">
          <label for="course-code">Course Code: </label>
          <input type="text" name="course-code" id="course-code" value={ courseCode } onChange={ (e) => setCourseCode(e.target.value) }/>
        </field>
        <field className="inputField">
          <label for="course-name">Course Name: </label>
          <input type="text" name="course-name" id="course-name" value={ courseName } onChange={ (e) => setCourseName(e.target.value) }/>
        </field>
        <field className="inputField">
          <label>Lecture hours: </label>
          <input type="number" value={ lectureHours } onChange={ (e) => setLectureHours(e.target.value) } />
        </field>
        <field className="inputField">
          <label>Tutorial hours: </label>
          <input type="number" value={ tutorialHours } onChange={ (e) => setTutorialHours(e.target.value) } />
        </field>
        <field className="inputField">
          <label>Practical hours: </label>
          <input type="number" value={ practicalHours } onChange={ (e) => setPracticalHours(e.target.value) } />
        </field>
        <field className="inputField">
          <label>J Project hours: </label>
          <input type="number" value={ projectHours } onChange={ (e) => setProjectHours(e.target.value) } />
        </field>
        <field className="inputField">
          <label>Credits: </label>
          <input type="number" value={ credits } onChange={ (e) => setCredits(e.target.value) } />
        </field>
        <button type="submit" value="Add course" id="add-course-submit" onClick={ handleSubmit }>Add</button>
      </form>
    </div>
    
      <div className='courses'>
            {courses.map((course)=>{
            return(
            <Course 
                key={course._id}
                id={course._id}
                code= {course.code}
                name= {course.name}
                lhours= {course.lhours}
                thours={course.thours}
                phours={course.phours}
                jhours={course.jhours}
                credits={course.credits}
                wish={course.wish}
                updates = {updates}
                updater={setUpdates}
            />
            )
            })}
        </div>
    </div>
  )
}

export default CoursePage