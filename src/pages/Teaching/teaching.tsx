import React, { useState, useEffect } from "react";
import "./teaching.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import photo from "../../assets/images/projects.jpg";
import Footer from "../../components/Footer/footer";

interface TeachingData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
}

const Teaching: React.FC = () => {
  const [teaching, setTeaching] = useState<TeachingData[]>([]);

  useEffect(() => {
    // Fetch or import your JSON data here and set it in the state
    // You can use fetch or import statements to load your JSON data
    // For example, if using fetch:
    fetch("/assets/json/projects.json")
      .then((response) => response.json())
      .then((data: TeachingData[]) => setTeaching(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="teachingContainer">
        <div className="teachingPortfolioMenu">
          <Navbar />
        </div>

        <div className="teachingPortfolioHeader">
          <div id="teachingPortfolioHeaderText">
            <div id="teachingPortfolioHeaderCard">
              <p className="title is-1">Teaching Projects</p>
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
          <div id="teachingPortfolioHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img id="image" src={photo} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>

        {teaching.slice(0, 10).map((project, index) => (
          <div className={`teachingProject-${index + 1} teachingProjectCard`} key={index}>
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

        {teaching.slice(9, 20).map((project, index) => (
          <div className={`teachingProject-${index + 10} teachingProjectCard`} key={index}>
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

export default Teaching;
