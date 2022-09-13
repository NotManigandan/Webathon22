import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";



function Home() {
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
      <Link className="navbar-brand"  to="/">RIVIERA</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
          </li>
          
          
      
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

            <div className="upload-se">
            <form action = "/"
            method = "POST"
            encType="multipart"> < input type = "file" / >
            </form>
            </div>
    </div>
)
}
export default Home;