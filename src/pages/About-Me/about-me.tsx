import React from "react";
import "./about-me.css";
import Navbar from "../../components/Navbar/navbar";
import photo from "../../assets/images/projects.jpg";
import Footer from "../../components/Footer/footer";

const About: React.FC = () => {
  const dummyData = Array.from({ length: 16 }, (_, index) => ({
    title: `Title ${index + 1}`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae imperdiet erat, ut tempor nisi.`,
  }));

  const progressBars = [
    { id: "Agreeableness", progress: 83 },
    { id: "Openness to Experience", progress: 87.5 },
    { id: "Neuroticism", progress: 40 },
    { id: "Conscientiousness", progress: 69 },
    { id: "Extraversion", progress: 67 },
  ];

  const progressBarContainerStyle: React.CSSProperties = {};

  const progressBarStyle: React.CSSProperties = {
    width: "200px",
    height: "20px",
    border: "1px solid #000",
    position: "relative",
    marginBottom: "2px",
  };

  const filledBarStyle: React.CSSProperties = {
    height: "100%",
    backgroundColor: "#00ff00",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <div>
      <div className="aboutContainer">
        <div className="Menu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>
        <div className="aboutHeader">
          <div id="aboutHeaderText">
            {" "}
            <div id="aboutHeaderCard">
              <p className="title is-1">Personal Projects</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
              <p className="subtitle" style={{ padding: "5rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor vulputate quam. Maecenas in nulla
                efficitur, venenatis dolor vel, interdum sem. Cras nec luctus dolor. Morbi leo lacus, suscipit nec nibh
                vitae, commodo semper quam. Sed hendrerit, urna et placerat ultrices, ante sapien venenatis ante, non
                bibendum nisl libero quis nunc.
                <br />
                <br />
                Myers-Brigss: Mediator
                <br />
                <br />
                {progressBars.map((bar) => (
                  <div key={bar.id} style={progressBarContainerStyle}>
                    <p>
                      {bar.id}: {bar.progress}%
                    </p>
                    <div style={progressBarStyle}>
                      <div style={{ ...filledBarStyle, width: `${bar.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </p>
            </div>
          </div>
          <div id="aboutHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img alt="" id="image" src={photo} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>

        {dummyData.map((item, index) => (
          <div className={`blog-${index + 1}`} key={index}>
            <h1 className="title">{item.title}</h1>
            <p className="content">{item.text}</p>
            <button className={`button is-success`} style={{ width: "100%" }}>
              Full Width Button
            </button>
          </div>
        ))}

        <div className="Footer" style={{ backgroundColor: "#48c78e" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
