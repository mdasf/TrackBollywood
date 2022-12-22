import React from "react";

import { Link } from "react-router-dom";

function Card({ imageURL, tags, heading, author = "" }) {
  // console.log(imageURL, tags, heading);
  // console.log(size);

  return (
    <li>
      <Link to="/story-detail" className="">
        <div className="card">
          <div className="card-img-holder">
            <img src={imageURL} alt="" />
          </div>
          <div className="card-content">
            <div className="card-meta-info">
              {tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
              {author && (
                <p>
                  By<span className="author">Afreen</span>
                </p>
              )}
            </div>
            <div className="card-heading">{heading}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Card;
