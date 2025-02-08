import React, { useState, useEffect } from "react";
import "./business.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
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
    fetch("/assets/json/business.json")
      .then((response) => response.json())
      .then((data: BusinessData[]) => setBusiness(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="businessContainer">
        <div className="businessMenu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>
        <div className="businessHeader">
          <div id="businessHeaderText">
            <div id="businessHeaderCard">
              <p className="title is-1" style={{ color: "white" }}>
                Businesses
              </p>
              <div className="subtitle is-3" style={{ color: "white" }}>
                Projects Designed to Help Others!
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
                This page highlights a selection of my business projects, each designed to tackle complex challenges and
                create meaningful solutions. Some of the projects I have worked on over the years have expanded, grown,
                and developed in scope, and it would be a shame to leave them lying somewhere on a USB.
                <br />
                <br />
                For these more advanced initiatives, which provide users with valuable services, I’ve converted them
                into Free and Open Source Software (FOSS) businesses. The aim of these projects is not to gain capital
                but to offer useful tools to those who truly need them.
                <br />
                <br />I focus on identifying problems and finding ways to address them that not only make a difference
                but also drive positive outcomes for individuals and organizations. Through these initiatives, I've
                honed my skills in project management, strategic thinking, and collaboration.
              </p>
            </div>
          </div>
          <div id="businessHeaderImage" style={{ overflow: "hidden", height: "100%", borderRadius: "1rem" }}>
            <img
              alt=""
              id="image"
              src={
                "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {business.slice(0, 10).map((project, index) => (
          <div className={`article-${index}`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/2503/2503742.png"}
              color={"#ffffff"}
            />
          </div>
        ))}

        <div className="divider1-business"></div>

        {business.slice(10, 20).map((project, index) => (
          <div className={`article-${index + 10}`} key={index + 10}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/2503/2503742.png"}
              color={"#ffffff"}
            />
          </div>
        ))}

        <div className="divider2-business"></div>

        {business.slice(20, 30).map((project, index) => (
          <div className={`article-${index + 20}`} key={index + 20}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={"https://cdn-icons-png.freepik.com/512/2503/2503742.png"}
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
