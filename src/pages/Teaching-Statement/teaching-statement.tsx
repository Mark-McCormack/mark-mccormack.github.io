import React, { useState, useEffect } from "react";
import "./teaching-statement.css";
import Navbar from "../../components/Navbar/navbar";
import Project from "../../components/Project/project";
import Footer from "../../components/Footer/footer";

interface TeachingData {
  title: string;
  subtitle: string;
  body: string;
  img: string;
  tags: string;
  language: string;
  color: string;
}

const Teaching_Statement: React.FC = () => {
  const [teaching, setTeaching] = useState<TeachingData[]>([]);

  useEffect(() => {
    // Fetch or import your JSON data here and set it in the state
    fetch("/assets/json/teaching-statement.json")
      .then((response) => response.json())
      .then((data: TeachingData[]) => setTeaching(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="teachingStatementContainer">
        <div className="teachingStatementPortfolioMenu" style={{ overflow: "visible" }}>
          <Navbar />
        </div>

        <div className="teachingStatementPortfolioHeader">
          <div id="teachingPortfolioHeaderText">
            <div id="teachingPortfolioHeaderCard">
              <p className="title is-1">Teaching Statement</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
              <p className="subtitle" style={{ padding: "5rem", textAlign: "justify" }}>
                <div style={{ fontFamily: "Arial, sans-serif" }}>
                  <h3 style={{ fontWeight: "bold" }}>Teaching Philosophy</h3>
                  <h3 style={{ fontWeight: "bold" }}>Teaching Approach</h3>
                  <h3 style={{ fontWeight: "bold" }}>Student Engagement</h3>
                  <h3 style={{ fontWeight: "bold" }}>Assessment Strategies</h3>
                  <h3 style={{ fontWeight: "bold" }}>Professional Development</h3>
                  <h3 style={{ fontWeight: "bold" }}>Diversity and Inclusion</h3>
                  <h3 style={{ fontWeight: "bold" }}>Technology Integration</h3>
                </div>
              </p>
            </div>
          </div>
          <div
            id="teachingPortfolioHeaderImage"
            className="imgTeaching"
            style={{ overflow: "hidden", height: "100%", borderRadius: "1rem" }}
          >
            <img
              alt=""
              id="image"
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="teachingStatementPortfolioHeader2">
          <div id="teachingPortfolioHeaderText">
            <div id="teachingPortfolioHeaderCard">
              <p className="title is-1">Theory / Practice Balance</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
              <p className="subtitle" style={{ padding: "5rem", textAlign: "justify" }}>
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
          <div id="teachingPortfolioHeaderImage" className="imgTeaching" style={{ overflow: "hidden", height: "100%" }}>
            <img
              alt=""
              id="image"
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="teachingStatementPortfolioHeader3">
          <div id="teachingPortfolioHeaderText">
            <div id="teachingPortfolioHeaderCard">
              <p className="title is-1">Theory / Practice Balance</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
              <p className="subtitle" style={{ padding: "5rem", textAlign: "justify" }}>
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
          <div id="teachingPortfolioHeaderImage" className="imgTeaching" style={{ overflow: "hidden", height: "100%" }}>
            <img
              alt=""
              id="image"
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="teachingStatementPortfolioHeader4">
          <div id="teachingPortfolioHeaderText">
            <div id="teachingPortfolioHeaderCard">
              <p className="title is-1">Pedagogy | Practice | Praxis</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
              <p className="subtitle" style={{ padding: "5rem", textAlign: "justify" }}>
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
          <div id="teachingPortfolioHeaderImage" className="imgTeaching" style={{ overflow: "hidden", height: "100%" }}>
            <img
              alt=""
              id="image"
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="teachingStatementPortfolioHeader5">
          <div id="teachingPortfolioHeaderText">
            <div id="teachingPortfolioHeaderCard">
              <p className="title is-1">Teaching | Learning | Assessment</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
              <p className="subtitle" style={{ padding: "5rem", textAlign: "justify" }}>
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
          <div id="teachingPortfolioHeaderImage" className="imgTeaching" style={{ overflow: "hidden", height: "100%" }}>
            <img
              alt=""
              id="image"
              src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        {teaching.slice(0, 10).map((project, index) => (
          <div className={`teachingStatementProject-${index + 1} teachingStatementProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={project.language}
            />
          </div>
        ))}

        <div className="dividerOne"></div>

        {teaching.slice(10, 20).map((project, index) => (
          <div className={`teachingStatementProject-${index + 11} teachingStatementProjectCard`} key={index}>
            <Project
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              img={project.img}
              tags={project.tags}
              language={project.language}
            />
          </div>
        ))}

        <div className="divider2" style={{ backgroundColor: "#48c78e" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Teaching_Statement;
