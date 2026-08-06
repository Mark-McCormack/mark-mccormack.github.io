import React from "react";
import "./business.css";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";
import ContentPage from "../../components/ContentPage/ContentPage";
import { PagedSectionConfig } from "../../utils/contentPageHelpers";

type BusinessData = {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
};

const Business: React.FC = () => {
  const renderBusiness = (project: BusinessData) => (
    <Project
      title={project.title}
      subtitle={project.subtitle}
      body={project.body}
      img={project.img}
      tags={project.tags}
      language={"https://cdn-icons-png.freepik.com/512/2503/2503742.png"}
      color={"#ffffff"}
    />
  );

  const header = (
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
            For these more advanced initiatives, which provide users with valuable services, I’ve converted them into
            Free and Open Source Software (FOSS) businesses. The aim of these projects is not to gain capital but to
            offer useful tools to those who truly need them.
            <br />
            <br />I focus on identifying problems and finding ways to address them that not only make a difference but
            also drive positive outcomes for individuals and organizations. Through these initiatives, I've honed my
            skills in project management, strategic thinking, and collaboration.
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
  );

  const pagedSectionsConfig: PagedSectionConfig<BusinessData> = {
    getItemClassName: (groupIndex: number, itemIndex: number) =>
      `article-${groupIndex * 10 + itemIndex}`,
    getDivider: (groupIndex: number) => <div className={`divider${groupIndex + 1}-business`} />,
  };

  return (
    <ContentPage
      jsonPath="/assets/json/business.json"
      pageClassName="businessContainer"
      menuClassName="businessMenu"
      header={header}
      pagedSectionsConfig={pagedSectionsConfig}
      renderItem={renderBusiness}
      footer={<Footer />}
      footerClassName="businessFooter"
      footerStyle={{ backgroundColor: "#48c78e" }}
    />
  );
};

export default Business;
