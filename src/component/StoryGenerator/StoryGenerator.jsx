import React from "react";

import images from "../../assets";
import "./StoryGenerator.css";

const StoryGenerator = ({ title, summary, author, paragraph, image }) => {
  // console.log(typeof image);
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
          <p className="caption">{summary}</p>
        </div>
        <div className="content-text">
          {/* <p>{paragraph}</p> */}
          {paragraph?.split("\n").map((para, index) => {
            if (!para) return "";
            return (
              <p className="" key={index}>
                {para}
              </p>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default StoryGenerator;
