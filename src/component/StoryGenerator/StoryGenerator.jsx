import React from "react";

import images from "../../assets";
import "./StoryGenerator.css";

const StoryGenerator = ({ title, summary, author, paragraph, image }) => {
  return (
    <section className="section preview">
      {/* <div className="container"> */}
      <h1 className="title">{title}</h1>

      <p className="summary">{summary}</p>

      <div className="meta-info">
        <p>
          Written by <span className="author">{author}</span>
        </p>
        <p>
          Published on <span className="date">Dec 20,2022</span>
        </p>
        <p>08:24 PM IST</p>
      </div>

      <div className="content">
        <div className="content-img-holder">
          <img src={image} alt="" className="content-img" />
          <p>{summary}</p>
        </div>
        <div className="content-text">
          {/* <p>{paragraph}</p> */}
          {paragraph?.map((para) => (
            <p className="content-paragraph">{para}</p>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default StoryGenerator;
