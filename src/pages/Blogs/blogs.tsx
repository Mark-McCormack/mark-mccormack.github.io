import React from "react";
import "./blogs.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

const Blogs: React.FC = () => {
  return (
    <div>
      <div className="blogContainer">
        <div className="blogMenu">
          <Navbar />
        </div>
        <div className="blogHeader">blogHeader</div>
        <div className="blogSearchBar">blogSearchBar</div>
        <div className="a-BrQv3-3-1-0-1">a-BrQv3-3-1-0-1</div>
        <div className="blogPost1">blogPost1</div>
        <div className="blogPost2">blogPost2</div>
        <div className="blogPost3">blogPost3</div>
        <div className="blogPost4">blogPost4</div>
        <div className="blogPost5">blogPost5</div>
        <div className="blogPost6">blogPost6</div>
        <div className="blogPost7">blogPost7</div>
        <div className="blogCardDivider">blogCardDivider</div>
        <div className="blogItem1">blogItem1</div>
        <div className="blogItem2">blogItem2</div>
        <div className="blogItem3">blogItem3</div>
        <div className="blogItem4">blogItem4</div>
        <div className="blogLinks">blogLinks</div>
        <div className="blogFooter" style={{ backgroundColor: "#48c78e" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
