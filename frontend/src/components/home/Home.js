import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Course from '../course/Course';
import "./homeCSS.css";
function Home() {
    const [courses, setCourses] = useState([]);
    const [pref, setPref] = useState([]);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    function handleSubmit2(event){
        event.preventDefault();
        const url = "/uploadWish";
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
    function handleSubmit3(event){
        alert("Preferences Submitted");
        event.preventDefault();
    }
    function FHandler(event) {
        setFile(event.target.files[0]);
    }
    useEffect(()=>{
        axios.get("/courses")
        .then((response)=>{
          setCourses(response.data);
        })
      },[])

    useEffect(()=>{
        axios.get("/loginStatus")
        .then((response)=>{
          if(response.data!==false){
            setIsAdmin(response.data.isAdmin);
            setIsLoggedIn(true);
          }
        })
        
      },[])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Yeet Devs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            {(isLoggedIn) ? (
              (isAdmin ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/course">Upload Courses</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/faculty">Upload Faculties</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">View Faculty Preferences</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Allocation</Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/events">Course Preferences</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Allocated Courses</Link>
                  </li>
                </ul>
              ))
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      {(isAdmin)? <div className="upload-se">
  <h2>Upload Wish List</h2>
            <form>
             <input type = "file" onChange={FHandler} name="myFile" />
             <button type="submit" onClick={handleSubmit2}>Upload</button>
            </form>
            {fileName}
    </div>: 
    <div className='courses'>
        <table>
          <thead>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Lecture Hours</th>
            <th>Tutorial Hours</th>
            <th>Practical Hours</th>
            <th>J Project Hours</th>
            <th>Credits</th>
            <th>Choose</th>
          </thead>
          {courses.map((course) => {
            return (
              <Course
                key={course._id}
                id={course._id}
                code={course.code}
                name={course.name}
                lhours={course.lhours}
                thours={course.thours}
                phours={course.phours}
                jhours={course.jhours}
                credits={course.credits}
                isAdmin={isAdmin}
                setPref={setPref}
              />
            )
          })}
        </table>
        {(!isAdmin)? <button type="submit" id="new-button" onClick={handleSubmit3}>Add Preferences</button> : null}
      </div>
    
    }
  
    <div>

    </div>   
    </div>
)
}
export default Home;