import React from "react";
import "./teaching-statement.css";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";
import ContentPage from "../../components/ContentPage/ContentPage";
import { PagedSectionConfig } from "../../utils/contentPageHelpers";

type TeachingData = {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
  url: string;
};

const TeachingStatement: React.FC = () => {
  const renderTeaching = (project: TeachingData) => (
    <Project
      title={project.title}
      subtitle={project.subtitle}
      body={project.body}
      img={project.img}
      tags={project.tags}
      url={project.url}
      language={"https://cdn-icons-png.freepik.com/512/5344/5344646.png"}
    />
  );

  const header = (
    <div className="teachingStatementPortfolio-Header">
      <div id="teachingStatementPortfolio-HeaderText">
        <div id="teachingStatementPortfolio-HeaderCard">
          <p className="title is-1" style={{ color: "white" }}>
            Teaching Statement
          </p>
          <div className="subtitle is-3" style={{ color: "white" }}>
            My Principles for an Excellent Learning Experience!
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
            Throughout the past several years, I have had the opportunity to work with several leading institutions in
            leading their teaching. I have taught courses globally within the realm of Computer Science Education and
            always strive to incorporate the theory into the practice such that students come away more knowledgable and
            with tangeble skills.
            <br />
            <br />
            Actively I teach both at{" "}
            <a href="https://www.maynoothuniversity.ie/">
              <b style={{ color: "yellow" }}>Maynooth University</b>
            </a>{" "}
            and{" "}
            <a href="https://www.dcu.ie">
              <b style={{ color: "yellow" }}>Dublin City University</b>
            </a>{" "}
            at both undergraduate and postgraduate courses. Below are some shorthand acronyms for institutions I've been
            fortunate to teach alongside.
            <br />
            <br />
            <b>MU</b> -{" "}
            <a href="https://www.maynoothuniversity.ie/" style={{ color: "yellow" }}>
              <b>Maynooth University</b>
            </a>{" "}
            <br />
            <b>DCU</b> -{" "}
            <a href="https://www.dcu.ie" style={{ color: "yellow" }}>
              <b>Dublin City University</b>
            </a>{" "}
            <br />
            <b>TTU</b> -{" "}
            <a href="https://www.ttu.edu" style={{ color: "yellow" }}>
              <b>Texas Technology University</b>
            </a>{" "}
            <br />
            <b>FU</b> -{" "}
            <a href="https://en.fzu.edu.cn/" style={{ color: "yellow" }}>
              <b>Fuzhou University</b>
            </a>
          </p>
        </div>
      </div>
      <div
        id="teachingStatementPortfolio-HeaderImage"
        style={{ overflow: "hidden", height: "100%", borderRadius: "1rem" }}
        className="imgteachingStatement"
      >
        <img
          alt=""
          id="image"
          src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );

  const pagedSectionsConfig: PagedSectionConfig<TeachingData> = {
    getItemClassName: (groupIndex: number, itemIndex: number) =>
      `teachingStatementProject-${groupIndex * 10 + itemIndex + 1} teachingStatementProjectCard`,
    getDivider: (groupIndex: number) => <div className={`divider${groupIndex + 1}`} />,
  };

  return (
    <ContentPage
      jsonPath="/assets/json/teaching-statement.json"
      pageClassName="teachingStatementContainer"
      menuClassName="teachingStatementPortfolio-Menu"
      header={header}
      pagedSectionsConfig={pagedSectionsConfig}
      renderItem={renderTeaching}
      footer={<Footer />}
      footerClassName="teachingStatementFooter"
      footerStyle={{ backgroundColor: "#48c78e" }}
    />
  );
};

export default TeachingStatement;
