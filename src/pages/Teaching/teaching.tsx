import React, { useState, useEffect } from "react";
import "./teaching.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";

interface TeachingData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
  url: string;
}

const Teaching: React.FC = () => {
  const [teaching, setteaching] = useState<TeachingData[]>([]);

  useEffect(() => {
    fetch("/assets/json/teaching.json")
      .then((response) => response.json())
      .then((data: TeachingData[]) => setteaching(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="teachingContainer">
        <div className="teaching-Menu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>
        <div className="teaching-Header" style={{ backgroundColor: "#fff" }}>
          <div id="teaching-HeaderText">
            <div id="teaching-HeaderCard">
              <p className="title is-1" style={{ color: "white" }}>
                Teaching
              </p>
              <div className="subtitle subtitleHeader is-3" style={{ color: "white" }}>
                Classes, Demonstrations, Tutoring and Teaching!
              </div>
              <p
                className="subtitle subtitleHeader"
                style={{
                  padding: "5rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  color: "white",
                  textAlign: "justify",
                }}
              >
                Throughout the past several years, I have had the opportunity to work with several leading institutions
                in leading their teaching. I have taught courses globally within the realm of Computer Science Education
                and always strive to incorporate the theory into the practice such that students come away more
                knowledgable and with tangeble skills.
                <br />
                <br />
                Actively I teach both at{" "}
                <a href="https://www.maynoothuniversity.ie/">
                  <b style={{ color: "yellow" }}>Maynooth University</b>
                </a>{" "}
                and{" "}
                <a href="https://www.dcu.ie">
                  <b style={{ color: "yellow" }}>Dublin City University</b>
                </a>{" "}
                at both undergraduate and postgraduate courses. Below are some shorthand acronyms for institutions I've
                been fortunate to teach alongside.
                <br />
                <br />
                <b>MU</b> -{" "}
                <a href="https://www.maynoothuniversity.ie/" style={{ color: "yellow" }}>
                  <b>Maynooth University</b>
                </a>{" "}
                <br />
                <b>DCU</b> -{" "}
                <a href="https://www.dcu.ie" style={{ color: "yellow" }}>
                  <b>Dublin City University</b>
                </a>{" "}
                <br />
                <b>TTU</b> -{" "}
                <a href="https://www.ttu.edu" style={{ color: "yellow" }}>
                  <b>Texas Technology University</b>
                </a>{" "}
                <br />
                <b>FU</b> -{" "}
                <a href="https://en.fzu.edu.cn/" style={{ color: "yellow" }}>
                  <b>Fuzhou University</b>
                </a>
              </p>
            </div>
          </div>
          <div id="teaching-HeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img
              alt=""
              id="imageteaching"
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {teaching.slice(0, 10).map((project, index) => (
          <div
            className={`teachingProject-${index + 1} teachingProjectCard`}
            key={index}
            style={{ backgroundColor: "#fff" }}
          >
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/5344/5344646.png"}
              color={"#fff"}
              url={project.url}
            />
          </div>
        ))}

        <div className="divider1"></div>

        {teaching.slice(10, 20).map((project, index) => (
          <div
            className={`teachingProject-${index + 11} teachingProjectCard`}
            key={index}
            style={{ backgroundColor: "#fff" }}
          >
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/5344/5344646.png"}
              color={"#fff"}
              url={project.url}
            />
          </div>
        ))}

        <div className="divider2">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Teaching;
