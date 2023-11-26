import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About-Me/about-me";
import Contact from "./pages/Contact/contact";
import Projects from "./pages/Projects/projects";
import Students from "./pages/Students/students";
import Research from "./pages/Research/research";
import Teaching from "./pages/Teaching/teaching";
import Business from "./pages/Business/business";
import Conferences from "./pages/Conferences/conferences";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="blogs" element={<About />} />
          {/* To Be Added */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="projects" element={<Projects />} />
          <Route path="students" element={<Students />} />
          <Route path="research" element={<Research />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="business" element={<Business />} />
          <Route path="academia" element={<Conferences />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
