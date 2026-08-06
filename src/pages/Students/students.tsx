import React from "react";
import "./students.css";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";
import ContentPage from "../../components/ContentPage/ContentPage";
import { PagedSectionConfig } from "../../utils/contentPageHelpers";

type StudentData = {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
};

const Students: React.FC = () => {
  const renderStudent = (project: StudentData) => (
    <Project
      title={project.title}
      subtitle={project.subtitle}
      body={project.body}
      img={project.img}
      tags={project.tags}
      language={"https://cdn-icons-png.freepik.com/256/2995/2995620.png?semt=ais_hybrid"}
    />
  );

  const header = (
    <div className="studentPortfolioHeader">
      <div id="studentPortfolioHeaderText">
        <div id="studentPortfolioHeaderCard">
          <p className="title is-1" style={{ color: "white" }}>
            Student Projects
          </p>
          <div className="subtitle is-3" style={{ color: "white" }}>
            Amazing Projects from Past Students!
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
            As a teacher, it's been incredible watching my students explore the world of computer science and AI,
            taking on projects that really push their creativity and problem-solving skills. This page is a showcase of
            their work—each project is unique and reflects the individual talents, ideas, and dedication they've put
            into learning these challenging concepts.
            <br />
            <br />
            Some have built fun AI experiments, while others have come up with creative coding solutions to real-world
            problems. It's inspiring to see how they’ve grown not only in their technical skills but also in their
            ability to think critically and work collaboratively.
            <br />
            <br />
            These projects aren't just about writing code; they're about solving problems, experimenting with new
            technologies, and imagining the future. I’m so proud of what they’ve accomplished, and I’m excited to share
            their work with you.
          </p>
        </div>
      </div>
      <div id="studentPortfolioHeaderImage" style={{ overflow: "hidden", height: "100%", borderRadius: "1rem" }}>
        <img
          alt=""
          id="image"
          src={
            "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=4152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );

  const pagedSectionsConfig: PagedSectionConfig<StudentData> = {
    getItemClassName: (groupIndex: number, itemIndex: number) =>
      `studentProject-${groupIndex * 10 + itemIndex + 1} studentProjectCard`,
    getDivider: (groupIndex: number) => (
      <div className={`divider${groupIndex + 1}`}>
        <div id="particles-js"></div>
      </div>
    ),
  };

  return (
    <ContentPage
      jsonPath="/assets/json/students.json"
      pageClassName="studentsContainer"
      menuClassName="studentPortfolioMenu"
      header={header}
      pagedSectionsConfig={pagedSectionsConfig}
      renderItem={renderStudent}
      footer={<Footer />}
      footerClassName="divider4"
      footerStyle={{ backgroundColor: "#48c78e" }}
    />
  );
};

export default Students;
