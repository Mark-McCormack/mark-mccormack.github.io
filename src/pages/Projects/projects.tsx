import React from "react";
import "./projects.css";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";
import ContentPage from "../../components/ContentPage/ContentPage";
import { PagedSectionConfig } from "../../utils/contentPageHelpers";

type ProjectData = {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
};

const Projects: React.FC = () => {
  const renderProject = (project: ProjectData) => (
    <Project
      title={project.title}
      subtitle={project.subtitle}
      body={project.body}
      img={project.img}
      tags={project.tags}
      language={"https://cdn-icons-png.freepik.com/256/14146/14146592.png?semt=ais_hybrid"}
    />
  );

  const header = (
    <div className="portfolioHeader">
      <div id="portfolioHeaderText">
        <div id="portfolioHeaderCard">
          <p className="title is-1" style={{ color: "white" }}>
            Personal Projects
          </p>
          <div className="subtitle is-3" style={{ color: "white" }}>
            Some Fun Comp. Sci. Projects!
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
            This page showcases a variety of my personal computer science projects, where I’ve applied my skills and
            creativity to tackle interesting challenges. From building AI-driven tools to developing software solutions,
            each project reflects my curiosity and passion for problem-solving.
            <br />
            <br />
            Whether I’m experimenting with new algorithms, creating applications to address real-world needs, or
            exploring the latest advancements in technology, these projects are a way for me to put theory into
            practice.
            <br />
            <br />
            I’m always looking for new ways to grow as a developer, and these projects are a testament to that journey.
            I hope you enjoy checking them out as much as I enjoyed building them!
          </p>
        </div>
      </div>
      <div id="portfolioHeaderImage" style={{ overflow: "hidden", height: "100%", borderRadius: "1rem" }}>
        <img
          alt=""
          id="image"
          src={
            "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );

  const pagedSectionsConfig: PagedSectionConfig<ProjectData> = {
    getItemClassName: (groupIndex: number, itemIndex: number) =>
      `project-${groupIndex * 10 + itemIndex + 1} projectCard`,
    getDivider: (groupIndex: number) => <div className={`divider${groupIndex + 1}`} />,
  };

  return (
    <ContentPage
      jsonPath="/assets/json/projects.json"
      pageClassName="projectsContainer"
      menuClassName="portfolioMenu"
      header={header}
      pagedSectionsConfig={pagedSectionsConfig}
      renderItem={renderProject}
      footer={<Footer />}
      footerClassName="divider2"
      footerStyle={{ backgroundColor: "#48c78e" }}
    />
  );
};

export default Projects;
