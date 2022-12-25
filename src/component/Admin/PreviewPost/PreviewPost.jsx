import React from "react";

import { StoryGenerator } from "../../index.js";

import "./PreviewPost.css";
const PreviewPost = ({ postDetail }) => {
  // title, summary, author, paragraph, image
  // console.log(title, summary, author, paragraph);

  return (
    <section className="section-preview">
      <div className="heading hasbefore">
        <p className="">Preview</p>
      </div>
      <div className="preview-post-container">
        <StoryGenerator {...postDetail} />
      </div>
    </section>
  );
};

export default PreviewPost;
