import React, { Suspense, lazy } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/home"));
const Blogs = lazy(() => import("./pages/Blogs/blogs"));
const Projects = lazy(() => import("./pages/Projects/projects"));
const Students = lazy(() => import("./pages/Students/students"));
const Research = lazy(() => import("./pages/Research/research"));
const Teaching = lazy(() => import("./pages/Teaching/teaching"));
const TeachingStatement = lazy(() => import("./pages/Teaching-Statement/teaching-statement"));
const Business = lazy(() => import("./pages/Business/business"));
const Conferences = lazy(() => import("./pages/Conferences/conferences"));
const Skills = lazy(() => import("./pages/Skills/skills"));

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="projects" element={<Projects />} />
            <Route path="students" element={<Students />} />
            <Route path="research" element={<Research />} />
            <Route path="teaching" element={<Teaching />} />
            {/* <Route path="business" element={<Business />} /> */}
            <Route path="academia" element={<Conferences />} />
            <Route path="skills" element={<Skills />} />
            <Route path="teaching-statement" element={<TeachingStatement />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
