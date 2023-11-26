import React, { useState, useEffect } from "react";
import "./research.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import photo from "../../assets/images/projects.jpg";
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
        <div className="researchMenu">
          <Navbar />
        </div>
        <div className="researchHeader">
          <div id="researchHeaderText">
            {" "}
            <div id="researchHeaderCard">
              <p className="title is-1">Research Projects</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
              <p className="subtitle" style={{ padding: "5rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor vulputate quam. Maecenas in nulla
                efficitur, venenatis dolor vel, interdum sem. Cras nec luctus dolor. Morbi leo lacus, suscipit nec nibh
                vitae, commodo semper quam. Sed hendrerit, urna et placerat ultrices, ante sapien venenatis ante, non
                bibendum nisl libero quis nunc.
                <br />
                <br />
                Aenean volutpat consectetur rutrum. Praesent tempor sodales leo, ut pulvinar lacus pellentesque sit
                amet. Mauris vel nisl nec nisl vestibulum consequat nec vel nunc. Phasellus augue massa, vulputate nec
                pulvinar eget, convallis eu ipsum. Maecenas hendrerit rhoncus urna, eu venenatis nisi lobortis sed.
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
              <a href="KUDOS_LINK_HERE" target="_blank" rel="noopener noreferrer">
                <button className="button is-danger">Kudos</button>&nbsp;&nbsp;
              </a>
              <a href="https://independent.academia.edu/MarkMcCormack16" target="_blank" rel="noopener noreferrer">
                <button className="button is-info">Academia.edu</button>&nbsp;&nbsp;
              </a>
            </div>
          </div>
          <div id="researchHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img id="image" src={photo} style={{ maxWidth: "100%", height: "auto" }} />
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
              language={project.language}
              color={"#ffffff"}
            />
          </div>
        ))}

        <div className="dividerOne"></div>

        {research.slice(9, 20).map((project, index) => (
          <div className={`researchProject-${index + 10} researchProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={project.language}
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

export default Research;
