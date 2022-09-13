import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CoursePage from "./components/course/CoursePage";
import Course from "./components/course/Course";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Redirect from "./components/Redirect";
import Register from "./components/register/Register";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Redirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/course" element={<CoursePage />} />
    </Routes>
    </Router>
  );
}

export default App;
