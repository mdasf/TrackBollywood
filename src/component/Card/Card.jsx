import React from "react";

import "./Card.css";
import { Link } from "react-router-dom";

function Card({ imageURL = "", tags, author = "", title = "", pid = "" }) {
  // console.log(imageURL, tags, heading);
  // console.log(size);

  // console.log(tags, pid);

  return (
    // <li>
    <Link to={`/article/${pid}`} className="">
      <div className="card">
        <div className="card-img-holder">
          <img src={imageURL} alt="" />
        </div>
        <div className="card-content">
          <div className="card-meta-info">
            <div className="tags">
              {tags?.map((tag, index) => (
                <span className="tag" id={tag} key={index}>
                  {tag}
                </span>
              ))}
            </div>
            {author && (
              <p className="author">
                By<span>{author}</span>
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
