import React from "react";
import "./conferences.css";
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

const Conferences: React.FC = () => {
  const renderProject = (project: ProjectData) => (
    <Project
      title={project.title}
      subtitle={project.subtitle}
      body={project.body}
      img={project.img}
      tags={project.tags}
      language={"https://cdn-icons-png.freepik.com/512/1321/1321029.png"}
      color={"#fff"}
      url={project.url}
    />
  );

  const header = (
    <div className="conferencesHeader" style={{ backgroundColor: "#fff" }}>
      <div id="conferencesHeaderText">
        <div id="conferencesHeaderCard">
          <p className="title is-1" style={{ color: "white" }}>
            Academia
          </p>
          <div className="subtitle subtitleHeader is-3" style={{ color: "white" }}>
            Conferences, Journals, Funding and More!
          </div>
          <p
            className="subtitle subtitleHeader "
            style={{
              padding: "5rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              color: "white",
              textAlign: "justify",
            }}
          >
            Within my doctoral studies, I have presented, attended and chaired several noteworthy conferences across the
            globe. My contributions range from papers to research sessions to keynotes and doctoral consortiums. With
            these conferences, I always look to connect with others in the field to produce new and novel ideas and
            increase my undesratnding of the field.
            <br />
            <br />
            These conferences and journals range in topic, from pure education to Computer Science focused,
            Collaborative Learning and many falling somewhere in the middle given the interdisciplinary nature of my
            research,
            <br />
            <br />
            For further information regarding publications and events, please find links to several profiles (Google
            Scholar, ACM, ORCiD etc.) on the "Research" section of my portfolio.
          </p>
        </div>
      </div>
      <div id="conferencesHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
        <img
          alt=""
          id="imageAcademia"
          src={
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );

  const pagedSectionsConfig: PagedSectionConfig<ProjectData> = {
    getItemClassName: (groupIndex: number, itemIndex: number) =>
      `conferencesProject-${groupIndex * 10 + itemIndex + 1} projectCard`,
    getItemStyle: () => ({ backgroundColor: "#fff" }),
    getDivider: (groupIndex: number) => (
      <div className={`divider${groupIndex + 1}-conference`} />
    ),
  };

  return (
    <ContentPage
      jsonPath="/assets/json/conferences.json"
      pageClassName="conferencesProjectsContainer"
      menuClassName="conferencesMenu"
      header={header}
      pagedSectionsConfig={pagedSectionsConfig}
      renderItem={renderProject}
      footer={<Footer />}
      footerClassName="divider3-conference"
    />
  );
};

export default Conferences;
