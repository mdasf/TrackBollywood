import React from "react";

import images from "../../assets";
import { Card } from "../index.js";

import "./Popular.css";

const popularUpperList = [
  {
    imageURL: images.imgthumbnail1,
    tags: ["Blog"],
    heading: "Chorio and Potato with a Fried Egg for breakfast",
  },
  {
    imageURL: images.imgthumbnail4,
    tags: ["Health", "Food"],
    heading: "Chorio and Potato with a Fried Egg for breakfast",
  },
];

const popularLowerList = [
  {
    imageURL: images.imgthumbnail3,
    tags: ["Lifestyles"],
    heading: "The World Caters to Average People and Mediocre",
  },
  {
    imageURL: images.pathan,
    tags: ["Meals", "Food"],
    heading: "Chorio and Potato with a Fried Egg for breakfast",
  },
  {
    imageURL: images.imgthumbnail2,
    tags: ["Travel"],
    heading: "What I learned Living where everyone told me to avoid.",
  },
];

function Popular() {
  return (
    <section className="section section-popular">
      <div className="container">
        <div className="heading hasbefore">
          <p className="">Most Popular</p>
        </div>
        <div className="popular-stories">
          <ul className="upper-list">
            {/* <li>
              <a href="#" className="">
                <div className="card">
                  <div className="card-img-holder">
                    <img src={images.imgthumbnail1} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-meta-info">
                      <span className="tag">Blog</span>
                    </div>
                    <div className="card-heading">
                      Chorio and Potato with a Fried Egg for breakfast
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <div className="card">
                  <div className="card-img-holder">
                    <img src={images.imgthumbnail4} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-meta-info">
                      <span className="tag">Health</span>
                      <span className="tag">Food</span>
                    </div>
                    <div className="card-heading">
                      Chorio and Potato with a Fried Egg for breakfast
                    </div>
                  </div>
                </div>
              </a>
            </li> */}
            {popularUpperList.map((card, index) => {
              return <Card {...card} key={index} />;
            })}
          </ul>
          <ul className="lower-list">
            {/* <li>
              <a href="#" className="">
                <div className="card">
                  <div className="card-img-holder">
                    <img src={images.imgthumbnail3} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-meta-info">
                      <span className="tag">Lifestyles</span>
                    </div>
                    <div className="card-heading">
                      The World Caters to Average People and Mediocre
                      Lifestyles.
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <div className="card">
                  <div className="card-img-holder">
                    <img src={images.pathan} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-meta-info">
                      <span className="tag">Meals</span>
                      <span className="tag">Food</span>
                    </div>
                    <div className="card-heading">
                      Chorio and Potato with a Fried Egg for breakfast
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <div className="card">
                  <div className="card-img-holder">
                    <img src={images.imgthumbnail2} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-meta-info">
                      <span className="tag">Travel</span>
                    </div>
                    <div className="card-heading">
                      What I learned Living where everyone told me to avoid.
                    </div>
                  </div>
                </div>
              </a>
            </li> */}
            {popularLowerList.map((card, index) => {
              return <Card {...card} key={index} />;
            })}
          </ul>
        </div>
        <a href="#" className="btn trending-btn">
          View All Popular Stories
        </a>
      </div>
    </section>
  );
}

export default Popular;
