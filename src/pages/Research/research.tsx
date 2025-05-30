import React, { useState, useEffect } from "react";
import "./research.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";

interface ResearchData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
}

const Research: React.FC = () => {
  const [research, setResearch] = useState<ResearchData[]>([]);

  useEffect(() => {
    // Fetch or import your JSON data here and set it in the state
    // You can use fetch or import statements to load your JSON data
    // For example, if using fetch:
    fetch("/assets/json/research.json")
      .then((response) => response.json())
      .then((data: ResearchData[]) => setResearch(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="researchProjectsContainer">
        <div className="researchMenu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>
        <div className="researchHeader">
          <div id="researchHeaderText">
            {" "}
            <div id="researchHeaderCard">
              <p className="title is-1" style={{ color: "white" }}>
                Research Projects
              </p>
              <div className="subtitle is-3" style={{ color: "white" }}>
                Pushing the Boundary of AIEd and CSE!
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
                This page features a collection of my research papers, where I explore the intersection of AI,
                education, and collaborative technologies. My work focuses on how AI can enhance learning experiences,
                improve educational outcomes, and foster collaboration between humans and intelligent systems.
                <br />
                <br />
                Whether it's examining AI's role in personalized learning, studying how collaborative AI can support
                teamwork and problem-solving, or looking at the impact of educational technology (EdTech) on
                transforming traditional teaching methods, my research seeks to expand our understanding of education in
                the digital age.
                <br />
                <br />
                Each paper represents my passion for discovering how emerging technologies can make learning more
                accessible, engaging, and effective.
              </p>
              <a
                href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=sgOfPUsAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button is-primary">Google Scholar</button>&nbsp;&nbsp;
              </a>
              <a href="https://dl.acm.org/profile/99660948439" target="_blank" rel="noopener noreferrer">
                <button className="button is-warning">ACM Profile</button>&nbsp;&nbsp;
              </a>
              <a href="https://www.researchgate.net/profile/Mark-Mccormack-7" target="_blank" rel="noopener noreferrer">
                <button className="button is-link">ResearchGate</button>&nbsp;&nbsp;
              </a>
              <a href="https://orcid.org/my-orcid?orcid=0009-0000-0281-3011" target="_blank" rel="noopener noreferrer">
                <button className="button is-success">OrcID</button>&nbsp;&nbsp;
              </a>
              <a href="https://independent.academia.edu/MarkMcCormack16" target="_blank" rel="noopener noreferrer">
                <button className="button is-danger">Academia.edu</button>&nbsp;&nbsp;
              </a>
            </div>
          </div>
          <div id="researchHeaderImage" style={{ overflow: "hidden", height: "95%", borderRadius: "1rem" }}>
            <img
              alt=""
              id="image"
              src={
                "https://images.unsplash.com/photo-1623631633177-7fbb2d3ae94d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBoZHxlbnwwfHwwfHx8MA%3D%3D"
              }
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        {research.slice(0, 10).map((project, index) => (
          <div className={`researchProject-${index + 1} researchProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/2680/2680900.png"}
              color={"#ffffff"}
            />
          </div>
        ))}
        <div className="divider1"></div>
        {research.slice(9, 20).map((project, index) => (
          <div className={`researchProject-${index + 10} researchProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/2680/2680900.png"}
            />
          </div>
        ))}
        <div className="divider2"></div>

        {research.slice(9, 20).map((project, index) => (
          <div className={`researchProject-${index + 20} researchProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/2680/2680900.png"}
            />
          </div>
        ))}
        <div className="divider3">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Research;
