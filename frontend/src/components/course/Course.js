import axios from 'axios';
import React, { useState } from 'react'

function Course() {
    
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    function handleSubmit(event){
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
            <form >
             <input type = "file" onChange={FHandler} name="myFile" />
             <button type="submit" onClick={handleSubmit}>Upload</button>
            </form>
            {fileName}
        </div>
    </div>
  )
}

export default Course