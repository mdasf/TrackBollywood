import React from "react";

import "./Card.css";
import { Link } from "react-router-dom";

function Card({
  imageURL = "",
  tags = [],
  author = "",
  summary = "",
  title = "",
  pid = "",
}) {
  // console.log(imageURL, tags, heading);
  // console.log(size);

  return (
    // <li>
    <Link to={`/story-detail/${pid}`} className="">
      <div className="card">
        <div className="card-img-holder">
          <img src={imageURL} alt="" />
        </div>
        <div className="card-content">
          <div className="card-meta-info">
            <div className="tags">
              {tags.map((tag, index) => (
                <span className="tag" id={tag} key={index}>
                  {tag}
                </span>
              ))}
            </div>
            {author && (
              <p>
                By<span className="author">{author}</span>
              </p>
            )}
          </div>
          <div className="card-heading">{title}</div>
        </div>
      </div>
    </Link>
    // </li>
  );
}

export default Card;
