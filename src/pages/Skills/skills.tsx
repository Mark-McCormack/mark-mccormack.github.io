import React, { useState, useEffect } from "react";
import "./skills.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";

interface SkillsData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
}

const Skills: React.FC = () => {
  const [Skills, setSkills] = useState<SkillsData[]>([]);

  useEffect(() => {
    // Fetch or import your JSON data here and set it in the state
    // You can use fetch or import statements to load your JSON data
    // For example, if using fetch:
    fetch("/assets/json/Skills.json")
      .then((response) => response.json())
      .then((data: SkillsData[]) => setSkills(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="SkillsContainer">
        <div className="SkillsPortfolioMenu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>

        <div className="SkillsPortfolioHeader">
          <div id="SkillsPortfolioHeaderText">
            <div id="SkillsPortfolioHeaderCard">
              <p className="title is-1" style={{ color: "white" }}>
                Skills Projects
              </p>
              <div className="subtitle is-3" style={{ color: "white" }}>
                Always Learning, Always Improving!
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
                As someone who’s always eager to grow and challenge myself, this page highlights a range of skills I’ve
                developed across different fields, from neurocomputing to languages. Each area has given me a unique
                perspective, and I’m constantly pushing to combine these disciplines in ways that help me solve complex
                problems more creatively.
                <br />
                <br />
                Whether it's exploring neural networks and AI, exploring the intricacies of human language, or improving
                my ability to communicate across different mediums, I’m always learning and expanding my toolkit.
                <br />
                <br />
                This portfolio is a reflection of that journey—a mix of technical expertise, curiosity, and a drive to
                keep getting better. I’m excited to share this collection with you, and I hope it offers a glimpse into
                the passion and effort I bring to everything I take on!
              </p>
            </div>
          </div>
          <div id="SkillsPortfolioHeaderImage" className="imgSkills" style={{ overflow: "hidden", height: "100%" }}>
            <img
              alt=""
              id="image"
              src={
                "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {Skills.slice(0, 10).map((project, index) => (
          <div className={`SkillsProject-${index + 1} SkillsProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/10262/10262344.png"}
            />
          </div>
        ))}

        <div className="dividerOne"></div>

        {Skills.slice(9, 20).map((project, index) => (
          <div className={`SkillsProject-${index + 10} SkillsProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/10262/10262344.png"}
            />
          </div>
        ))}

        <div className="divider2" style={{ backgroundColor: "#48c78e" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Skills;
