import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./facultyCSS.css";
function Faculty() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const [fid, setFId] = useState("")
  const [fName, setFName] = useState("")
  const [desig, setDesig] = useState("")
  const [phone, setPhone] = useState("")
  const [school, setSchool] = useState("")
  const [email, setEmail] = useState("")


    
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Added Faculty")
  }

    function handleSubmit2(event){
        event.preventDefault();
        const url = "/uploadfaculty";
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
        alert("Uploaded Faculty List");
    }
    function FHandler(event) {
        setFile(event.target.files[0]);
    }
  return (
    <div>

        <div className="upload-se">
        <h2>Upload Faculty List</h2>
            <form>
             <input type = "file" onChange={FHandler} name="myFile" />
             <button type="submit" onClick={handleSubmit2}>Upload</button>
            </form>
            {fileName}
        </div>
        <div>
      <h2>Add Faculty</h2>
      <form>
        <field className="inputField">
          <label for="course-code">Faculty ID </label>
          <input type="text" name="course-code" id="course-code" value={ fid } onChange={ (e) => setFId(e.target.value) }/>
        </field>
        <field className="inputField">
          <label for="course-name">Faculty Name </label>
          <input type="text" name="course-name" id="course-name" value={ fName } onChange={ (e) => setFName(e.target.value) }/>
        </field>
        <field className="inputField">
          <label>Designation : </label>
          <input type="number" value={ desig } onChange={ (e) => setDesig(e.target.value) } />
        </field>
        <field className="inputField">
          <label>Phone number : </label>
          <input type="number" value={ phone } onChange={ (e) => setPhone(e.target.value) } />
        </field>
        <field className="inputField">
          <label>School : </label>
          <input type="number" value={ school } onChange={ (e) => setSchool(e.target.value) } />
        </field>
        <field className="inputField">
          <label>Email : </label>
          <input type="number" value={ email } onChange={ (e) => setEmail(e.target.value) } />
        </field>
        <button type="submit" value="Add course" id="form-button" onClick={ handleSubmit }>Add</button>
      </form>
    </div>
    
    </div>
  )
}

export default Faculty