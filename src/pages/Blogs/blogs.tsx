import React from "react";
import "./blogs.css";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";
import ContentPage from "../../components/ContentPage/ContentPage";
import { PagedSectionConfig } from "../../utils/contentPageHelpers";

type BlogData = {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
};

const Blogs: React.FC = () => {
  const renderBlog = (project: BlogData) => (
    <Project
      title={project.title}
      subtitle={project.subtitle}
      body={project.body}
      img={project.img}
      tags={project.tags}
      language={"https://cdn-icons-png.flaticon.com/512/4659/4659050.png"}
      color={"#ffffff"}
    />
  );

  const header = (
    <div className="blogHeader">
      <div id="blogHeaderText">
        <div id="blogHeaderCard">
          <p className="title is-1" style={{ color: "white" }}>
            Blogs
          </p>
          <p
            className="subtitle"
            style={{
              padding: "5rem",
              paddingTop: "2rem",
              paddingBottom: "2rem",
              textAlign: "justify",
              color: "white",
            }}
          >
            During the weekly research, once I get the time, I like to engage in some writing on one of my several blogs.
            The aim for most of these is to provide an outlet for ideas and knowledge in a more conversational/less
            formal manner.
            <br />
            <br />
            I look into subject such as the daily academic life, interesting breakthroughts in Computer Science and a
            handful of theories I have in the area, which may not be fit for a paper (just yet!).
            <br />
            <br />
            Within the blogs, I hope to facilitate a glimpse into the life of academics in the realm of computer
            scientists. So, for those of you considering this as an area in the future, be sure to keep up to date! And
            for those others, I hope you gain some food for thought on new CS areas and what this may mean.
          </p>
        </div>
      </div>
      <div id="blogHeaderImage" style={{ overflow: "hidden", height: "100%", borderRadius: "1rem" }}>
        <img
          alt=""
          id="image"
          src={
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );

  const pagedSectionsConfig: PagedSectionConfig<BlogData> = {
    getItemClassName: (groupIndex: number, itemIndex: number) =>
      `blog-${groupIndex * 10 + itemIndex} blogProjectCard`,
    getDivider: (groupIndex: number) => <div className={`divider${groupIndex + 1}`} />,
  };

  return (
    <ContentPage
      jsonPath="/assets/json/blog.json"
      pageClassName="blogContainer"
      menuClassName="blogMenu"
      header={header}
      pagedSectionsConfig={pagedSectionsConfig}
      renderItem={renderBlog}
      footer={<Footer />}
      footerClassName="blogFooter"
      footerStyle={{ backgroundColor: "#48c78e" }}
    />
  );
};

export default Blogs;
