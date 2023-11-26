import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/footer";
import photo from "../../assets/images/profile.png";
import Typewriter from "typewriter-effect";
import Project from "../../components/Project/project";

const Home: React.FC = () => {
  return (
    <div>
      <div className="homeContainer">
        <div className="HomeMenu">
          <Navbar />
        </div>
        <div className="HomeHeader">
          <div id="headerText">
            <div id="headerCard">
              <p className="title is-1">Hello, I'm Mark McCormack!</p>
              <div className="subtitle is-3">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(80)
                      .typeString("Lecturer of Computer Science")
                      .pauseFor(1200)
                      .deleteChars(28)
                      .typeString("Ph.D of Computer Science (AI in Education)")
                      .pauseFor(1200)
                      .deleteChars(47)
                      .typeString("Software Engineer")
                      .pauseFor(1200)
                      .deleteChars(17)
                      .typeString("Web Developer")
                      .pauseFor(1200)
                      .deleteChars(13)
                      .typeString("I'm a Full Stack Developer")
                      .pauseFor(1200)
                      .deleteChars(20)
                      .start();
                  }}
                />
              </div>
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
                <br />
                <br />
                Cras tempus turpis a turpis cursus, suscipit vulputate neque condimentum. Nam non nisl sed nulla dapibus
                lacinia eu sit amet tellus. Sed sagittis ligula a tellus iaculis, nec facilisis ante feugiat.
              </p>
            </div>
          </div>
          <div id="headerImage" style={{ overflow: "hidden", height: "100%" }}>
            <img id="image" src={photo} style={{ maxWidth: "100%", height: "auto", maxHeight: "100%" }} />
          </div>
        </div>
        <div className="Skill-1" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#00d1b2" }}>
          <Card
            notificationClass="is-primary"
            title="Expertise"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Skill-2" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#ffe08a" }}>
          <Card
            notificationClass="is-warning"
            title="Teaching Experience"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Skill-3" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#3e8ed0" }}>
          <Card
            notificationClass="is-info"
            title="Research"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Skill-4" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#f14668" }}>
          <Card
            notificationClass="is-danger"
            title="Software Engineer"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Skill-5" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#48c78e" }}>
          <Card
            notificationClass="is-success"
            title="Industry Experience"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Skill-6" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#00d1b2" }}>
          <Card
            notificationClass="is-primary"
            title="Student Projects"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Skill-7" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#ffe08a" }}>
          <Card
            notificationClass="is-warning"
            title="Pedagogical Approach"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Skill-8" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#f14668" }}>
          <Card
            notificationClass="is-danger"
            title="Affiliations"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. "
          />
        </div>
        <div className="Portfolio" style={{ backgroundColor: "#48c78e" }}>
          <div className="scroll-container">
            <div className="scroll-content">
              {/** Duplicate Group to Allow for Seamless Scroll Effect*/}
              <div className="project-showcase">
                <Project />
              </div>
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>
              {/** Real Group to Allow for Seamless Scroll Effect*/}
              <div className="project-showcase">
                <Project />
              </div>
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>{" "}
              <div className="project-showcase">
                <Project />
              </div>
            </div>
          </div>
        </div>
        <div className="Item-1" style={{ padding: "0px", backgroundColor: "#ffe08a" }}>
          {" "}
          <Card
            notificationClass="is-warning"
            title="Software Engineer"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. Quisque in enim nec dui venenatis facilisis. Sed nisi ante, vulputate id augue in, iaculis facilisis metus. Etiam dolor velit, vulputate a dui quis, feugiat pretium ex. Vestibulum sollicitudin dui ac tortor posuere ornare."
          />
        </div>
        <div className="Item-2" style={{ padding: "0px", backgroundColor: "#3e8ed0" }}>
          {" "}
          <Card
            notificationClass="is-info"
            title="Software Engineer"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. Quisque in enim nec dui venenatis facilisis. Sed nisi ante, vulputate id augue in, iaculis facilisis metus. Etiam dolor velit, vulputate a dui quis, feugiat pretium ex. Vestibulum sollicitudin dui ac tortor posuere ornare."
          />
        </div>
        <div className="Item-3" style={{ padding: "0px", backgroundColor: "#f14668" }}>
          {" "}
          <Card
            notificationClass="is-danger"
            title="Software Engineer"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. Quisque in enim nec dui venenatis facilisis. Sed nisi ante, vulputate id augue in, iaculis facilisis metus. Etiam dolor velit, vulputate a dui quis, feugiat pretium ex. Vestibulum sollicitudin dui ac tortor posuere ornare."
          />
        </div>
        <div className="Item-4" style={{ padding: "0px", backgroundColor: "#f5f5f5" }}>
          {" "}
          <Card
            notificationClass="is-failure"
            title="Software Engineer"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt metus eget mollis vulputate. Nam id erat at nunc condimentum efficitur. Nullam sed dolor leo. Ut non justo porta, malesuada turpis id, elementum ligula. Quisque in enim nec dui venenatis facilisis. Sed nisi ante, vulputate id augue in, iaculis facilisis metus. Etiam dolor velit, vulputate a dui quis, feugiat pretium ex. Vestibulum sollicitudin dui ac tortor posuere ornare."
          />
        </div>
        <div className="Footer" style={{ backgroundColor: "#48c78e" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
