import React, { useState, useEffect } from "react";
import "./business.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import photo from "../../assets/images/projects.jpg";
import Footer from "../../components/Footer/footer";

interface BusinessData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
}

const Business: React.FC = () => {
  const [business, setBusiness] = useState<BusinessData[]>([]);

  useEffect(() => {
    // Fetch or import your JSON data here and set it in the state
    // You can use fetch or import statements to load your JSON data
    // For example, if using fetch:
    fetch("/assets/json/business.json")
      .then((response) => response.json())
      .then((data: BusinessData[]) => setBusiness(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="businessContainer">
        <div className="businessMenu">
          <Navbar />
        </div>
        <div className="businessHeader">
          {" "}
          <div id="businessHeaderText">
            {" "}
            <div id="businessHeaderCard">
              <p className="title is-1">Businesses</p>
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
            </div>
          </div>
          <div id="businessHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img id="image" src={photo} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>

        {business.slice(0, 12).map((project, index) => (
          <div className={`article-${index + 10} businessProjectCard`} key={index}>
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

        <div className="businessFooter" style={{ backgroundColor: "#48c78e" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Business;
