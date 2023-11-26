import React, { useState, useEffect } from "react";
import "./projects.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import photo from "../../assets/images/projects.jpg";
import Footer from "../../components/Footer/footer";

interface ProjectData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    // Fetch or import your JSON data here and set it in the state
    // You can use fetch or import statements to load your JSON data
    // For example, if using fetch:
    fetch("/assets/json/projects.json")
      .then((response) => response.json())
      .then((data: ProjectData[]) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="projectsContainer">
        <div className="portfolioMenu">
          <Navbar />
        </div>
        <div className="portfolioHeader">
          <div id="portfolioHeaderText">
            {" "}
            <div id="portfolioHeaderCard">
              <p className="title is-1">Personal Projects</p>
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
                <br />
                <br />
                Cras tempus turpis a turpis cursus, suscipit vulputate neque condimentum. Nam non nisl sed nulla dapibus
                lacinia eu sit amet tellus. Sed sagittis ligula a tellus iaculis, nec facilisis ante feugiat.
              </p>
            </div>
          </div>
          <div id="portfolioHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img id="image" src={photo} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>

        {projects.slice(0, 10).map((project, index) => (
          <div className={`project-${index + 1} projectCard`} key={index}>
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

        <div className="dividerOne"></div>

        {projects.slice(9, 20).map((project, index) => (
          <div className={`project-${index + 10} projectCard`} key={index}>
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

export default Projects;
