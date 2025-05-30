import React, { useState, useEffect } from "react";
import "./students.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";

interface StudentData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
}

const Students: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);

  useEffect(() => {
    // Fetch or import your JSON data here and set it in the state
    // You can use fetch or import statements to load your JSON data
    // For example, if using fetch:
    fetch("/assets/json/students.json")
      .then((response) => response.json())
      .then((data: StudentData[]) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="studentsContainer">
        <div className="studentPortfolioMenu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>

        <div className="studentPortfolioHeader">
          <div id="studentPortfolioHeaderText">
            <div id="studentPortfolioHeaderCard">
              <p className="title is-1" style={{ color: "white" }}>
                Student Projects
              </p>
              <div className="subtitle is-3" style={{ color: "white" }}>
                Amazing Projects from Past Students!
              </div>
              <p
                className="subtitle"
                style={{
                  padding: "5rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  color: "white",
                  textAlign: "justify",
                }}
              >
                As a teacher, it's been incredible watching my students explore the world of computer science and AI,
                taking on projects that really push their creativity and problem-solving skills. This page is a showcase
                of their work—each project is unique and reflects the individual talents, ideas, and dedication they've
                put into learning these challenging concepts.
                <br />
                <br />
                Some have built fun AI experiments, while others have come up with creative coding solutions to
                real-world problems. It's inspiring to see how they’ve grown not only in their technical skills but also
                in their ability to think critically and work collaboratively.
                <br />
                <br />
                These projects aren't just about writing code; they're about solving problems, experimenting with new
                technologies, and imagining the future. I’m so proud of what they’ve accomplished, and I’m excited to
                share their work with you.
              </p>
            </div>
          </div>
          <div id="studentPortfolioHeaderImage" style={{ overflow: "hidden", height: "100%", borderRadius: "1rem" }}>
            <img
              alt=""
              id="image"
              src={
                "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=4152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {students.slice(0, 10).map((project, index) => (
          <div className={`studentProject-${index + 1} studentProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/256/2995/2995620.png?semt=ais_hybrid"}
            />
          </div>
        ))}

        <div className="divider1">
          <div id="particles-js"></div>
        </div>

        {students.slice(10, 20).map((project, index) => (
          <div className={`studentProject-${index + 11} studentProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/256/2995/2995620.png?semt=ais_hybrid"}
            />
          </div>
        ))}

        <div className="divider2">
          <div id="particles-js"></div>
        </div>

        {students.slice(20, 30).map((project, index) => (
          <div className={`studentProject-${index + 21} studentProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/256/2995/2995620.png?semt=ais_hybrid"}
            />
          </div>
        ))}

        <div className="divider3">
          <div id="particles-js"></div>
        </div>

        {students.slice(30, 40).map((project, index) => (
          <div className={`studentProject-${index + 31} studentProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/256/2995/2995620.png?semt=ais_hybrid"}
            />
          </div>
        ))}

        <div className="divider4" style={{ backgroundColor: "#48c78e" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Students;
