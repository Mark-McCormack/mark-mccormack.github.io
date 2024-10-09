import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About-Me/about-me";
import Contact from "./pages/Contact/contact";
import Blogs from "./pages/Blogs/blogs";
import Projects from "./pages/Projects/projects";
import Students from "./pages/Students/students";
import Research from "./pages/Research/research";
import Teaching from "./pages/Teaching/teaching";
import Teaching_Statement from "./pages/Teaching-Statement/teaching-statement";
import Business from "./pages/Business/business";
import Conferences from "./pages/Conferences/conferences";
import Skills from "./pages/Skills/skills";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="aboutme" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="students" element={<Students />} />
          <Route path="research" element={<Research />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="business" element={<Business />} />
          <Route path="academia" element={<Conferences />} />
          <Route path="skills" element={<Skills />} />
          <Route path="teaching-statement" element={<Teaching_Statement />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
