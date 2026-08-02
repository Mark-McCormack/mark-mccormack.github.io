import React from "react";
import "./skills.css";
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
  url: string;
  color: string;
};

const Skills: React.FC = () => {
  const renderProject = (project: ProjectData) => (
    <Project
      title={project.title}
      subtitle={project.subtitle}
      body={project.body}
      img={project.img}
      tags={project.tags}
      language={"https://cdn-icons-png.freepik.com/512/10262/10262344.png"}
      color={"#fff"}
      url={project.url}
    />
  );

  const header = (
    <div className="skillsHeader" style={{ backgroundColor: "#fff" }}>
      <div id="skillsHeaderText">
        <div id="skillsHeaderCard">
          <p className="title is-1" style={{ color: "white" }}>
            Skills
          </p>
          <div className="subtitle subtitleHeader is-3" style={{ color: "white" }}>
            Always Learning, Always Improving!
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
            As someone who's always eager to grow and challenge myself, this page highlights a range of skills I've
            developed across different fields, from neurocomputing to languages. Each area has given me a unique
            perspective, and I'm constantly pushing to combine these disciplines in ways that help me solve complex
            problems more creatively.
            <br />
            <br />
            Whether it's exploring neural networks and AI, exploring the intricacies of human language, or improving my
            ability to communicate across different mediums, I'm always learning and expanding my toolkit.
            <br />
            <br />
            This portfolio is a reflection of that journey—a mix of technical expertise, curiosity, and a drive to keep
            getting better. I'm excited to share this collection with you, and I hope it offers a glimpse into the
            passion and effort I bring to everything I take on!
          </p>
        </div>
      </div>
      <div id="skillsHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
        <img
          alt=""
          id="imageSkills"
          src={
            "https://images.unsplash.com/photo-1557149769-d376acfba1f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraWxsc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );

  const pagedSectionsConfig: PagedSectionConfig<ProjectData> = {
    getItemClassName: (groupIndex: number, itemIndex: number) =>
      `skillsProject-${groupIndex * 10 + itemIndex + 1} projectCard`,
    getItemStyle: () => ({ backgroundColor: "#fff" }),
    getDivider: (groupIndex: number) => <div className={`divider${groupIndex + 1}-skill`} />,
  };

  return (
    <ContentPage
      jsonPath="/assets/json/skills.json"
      pageClassName="skillsProjectsContainer"
      menuClassName="skillsMenu"
      header={header}
      pagedSectionsConfig={pagedSectionsConfig}
      renderItem={renderProject}
      footer={<Footer />}
      footerClassName="divider3-skill"
    />
  );
};

export default Skills;
