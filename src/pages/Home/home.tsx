import React, { useState, useEffect } from "react";
import "./home.css";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/footer";
import photo from "../../assets/images/profile-real.jpg";
import Typewriter from "typewriter-effect";
import Project from "../../components/Project/project";
import ParticlesComponent from "../../components/Particles/particlescomponent";
import DesktopSuggestionPopup from "../../components/DesktopSuggestion/desktopsuggestion";

interface StudentData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
}

const Home: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);

  useEffect(() => {
    fetch("/assets/json/students.json")
      .then((response) => response.json())
      .then((data: StudentData[]) => setStudents(data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  return (
    <div>
      <DesktopSuggestionPopup />
      <div className="homeContainer" style={{ overflow: "visible" }}>
        <div className="HomeMenu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>
        <div className="HomeHeader">
          <ParticlesComponent />
          <div id="headerText" className="project-showcase" style={{ backgroundColor: "rgba(0,0,0,0.0)", zIndex: "1" }}>
            <div id="headerCard">
              <p className="title is-1">
                Hello, I'm Mark McCormack! <div className="waving-emoji">👋</div>
              </p>
              <div className="subtitle is-3">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(50)
                      .typeString("I'm a Lecturer of Computer Science")
                      .pauseFor(1000)
                      .deleteChars(28)
                      .typeString("Ph.D of Computer Science (AI in Education)")
                      .pauseFor(1000)
                      .deleteChars(42)
                      .typeString("Software Engineer")
                      .pauseFor(1000)
                      .deleteChars(17)
                      .typeString("Web Developer")
                      .pauseFor(1000)
                      .deleteChars(13)
                      .typeString("Full Stack Developer")
                      .pauseFor(1000)
                      .deleteChars(20)
                      .start();
                  }}
                />
              </div>
              <p
                className="subtitle"
                style={{
                  paddingLeft: "5rem",
                  paddingRight: "5rem",
                  paddingTop: "1.5rem",
                  paddingBottom: "2rem",
                  zIndex: "1",
                  textAlign: "justify",
                }}
              >
                <b>
                  <i>Anyone can become great at anything with the right teacher, and that's what I aim to be!</i>
                </b>
                <br />
                <br />
                Get ready to explore Computer Science Education with Mark McCormack, a lecturer with over 10 years of
                experience in the field. McCormack has taught at several top universities, combining deep knowledge with
                a genuine passion for helping students become future tech leaders.
                <br />
                <br />
                Beyond teaching, McCormack focuses on AI in Education and is involved in exciting, hands-on research.
                McCormack makes sure students aren’t just learning theory but are also part of real-world projects and
                discoveries. As a capstone project supervisor, McCormack encourages students to think creatively and
                solve real problems.
                <br />
                <br />
                McCormacks's impact goes beyond the classroom, with many students going on to succeed in the tech world.
                It's not just about the coursework—it’s the practical skills and mindset McCormack helps develop that
                make a lasting difference. Learn from Mark McCormack and start building your future in technology!
              </p>
            </div>
          </div>
          <div id="headerImage" style={{ overflow: "hidden", height: "100%", zIndex: "1" }}>
            <img
              loading="lazy"
              alt=""
              id="image"
              src={photo}
              style={{
                minWidth: "15rem",
                maxWidth: "95%",
                height: "auto",
                maxHeight: "95%",
                margin: "0.5rem",
                background: "#fff",
                backgroundColor: "rgb(255, 255, 255)",
                padding: "1rem",
                borderRadius: "1rem",
                border: "0.5vmin solid #05060f",
                boxShadow: "0.4rem 0.4rem #05060f",
                color: "black",
              }}
            />
          </div>
        </div>
        <div className="Skill-1" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#00d1b2" }}>
          <Card
            notificationClass="is-primary"
            title="Expertise"
            body="Holding with a First Class Honours Bachelors Degree in Computer Science and Software Engineering, I'm currently immersed in a Ph.D. program focusing on AI in Education with Collaborative Technologies. For my studies, Maynooth University is my home institution!"
          />
        </div>
        <div className="Skill-2" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#ffe08a" }}>
          <Card
            notificationClass="is-warning"
            title="Teaching Experience"
            body="I've enthusiastically immersed myself in lecturing at Maynooth University, Fuzhou University, and Dublin City University. I've also tutored and demonstrated for several Computer Science subjects. Let's explore the world of code together!"
          />
        </div>
        <div className="Skill-3" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#3e8ed0" }}>
          <Card
            notificationClass="is-info"
            title="Research"
            body="Focused on primary research in Applications of Artificial Intelligence in Collaborative Education. Additionally, my interests extend to Large Language Models and Computational Neuroscience, showcasing a comprehensive commitment to cutting-edge CS studies."
          />
        </div>
        <div className="Skill-4" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#f14668" }}>
          <Card
            notificationClass="is-danger"
            title="Software Engineer"
            body="With over a decade of programming expertise, it has become second nature! Experienced in diverse software projects, including the SAP Fiori Toolkit, with expertise in AI (LLMs), Genetic Algorithms, and Web Development, demonstrating versatility across domains."
          />
        </div>
        <div className="Skill-5" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#f14668" }}>
          <Card
            notificationClass="is-danger"
            title="Industry Experience"
            body="With a diverse professional background, I've excelled outside education as a UI/UX and DevOps Engineer at SAP Technologies. This experience has honed my skills in Software Engineering, showcasing adaptability and expertise in dynamic industry settings."
          />
        </div>
        <div className="Skill-6" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#3e8ed0" }}>
          <Card
            notificationClass="is-info"
            title="Student Projects"
            body="As an experienced mentor, I have successfully guided students through their capstone projects, fostering research excellence in domains such as AI in Education, Web Development, and Natural Language Processing."
          />
        </div>
        <div className="Skill-7" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#ffe08a" }}>
          <Card
            notificationClass="is-warning"
            title="Pedagogical Approach"
            body="Employing a project-based learning approach, I foster an inclusive environment, integrating technology to enhance learning experiences. My teaching emphasizes continuous collaboration and practical exercises, allowing students to work together on real-world issues."
          />
        </div>
        <div className="Skill-8" style={{ overflow: "hidden", padding: "0px", backgroundColor: "#00d1b2" }}>
          <Card
            notificationClass="is-primary"
            title="Affiliations"
            body="I've conducted impactful educational sessions for Maynooth, Fuzhou, Texas Tech and Dublin City University showcasing a commitment to academic excellence. Also, I've contributed my expertise through demonstrations and work at CoderDojo in Portarlington and Maynooth."
          />
        </div>
        <div className="Portfolio" style={{ backgroundColor: "#48c78e" }}>
          <div className="scroll-container">
            <div className="scroll-content">
              {students.slice(0, 10).map((project, index) => (
                <div className="project-showcase" key={index} style={{ minWidth: "15rem", maxWidth: "15rem" }}>
                  <Project
                    title={project.title}
                    subtitle={project.subtitle}
                    body={project.body}
                    img={project.img}
                    tags={project.tags}
                    language="https://cdn-icons-png.freepik.com/512/5344/5344646.png"
                  />
                </div>
              ))}
              {students.slice(0, 10).map((project, index) => (
                <div className="project-showcase" key={`dup-${index}`} style={{ minWidth: "15rem", maxWidth: "15rem" }}>
                  <Project
                    title={project.title}
                    subtitle={project.subtitle}
                    body={project.body}
                    img={project.img}
                    tags={project.tags}
                    language="https://cdn-icons-png.freepik.com/512/5344/5344646.png"
                  />
                </div>
              ))}
              {students.slice(0, 10).map((project, index) => (
                <div className="project-showcase" key={`dup2-${index}`} style={{ minWidth: "15rem", maxWidth: "15rem" }}>
                  <Project
                    title={project.title}
                    subtitle={project.subtitle}
                    body={project.body}
                    img={project.img}
                    tags={project.tags}
                    language="https://cdn-icons-png.freepik.com/512/5344/5344646.png"
                  />
                </div>
              ))}
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
