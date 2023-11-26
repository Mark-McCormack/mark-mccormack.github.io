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

  return (
    <div>
      <div className="aboutContainer">
        <div className="Menu">
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
          <div id="aboutHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img id="image" src={photo} style={{ maxWidth: "100%", height: "auto" }} />
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
