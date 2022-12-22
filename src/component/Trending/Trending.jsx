import React from "react";

import { Link } from "react-router-dom";
import { Card } from "../index.js";
import images from "../../assets";

import "./Trending.css";

function Trending() {
  const trendingCardsData = [
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
    {
      imageURL: images.imgthumbnail3,
      tags: ["Lifestyles"],
      heading: "The World Caters to Average People and MediocreLifestyles.",
    },
  ];

  return (
    <section className="section section-trending" id="#trending">
      <div className="container">
        <div className="heading hasbefore">
          <p className="">Trending</p>
        </div>
        <div className="trending-stories">
          <ul className="trending-stories-list">
            {/* <li>
              <Link to="/story-detail" className="">
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
              </Link>
            </li>
            <li>
              <Link to="#" className="">
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
              </Link>
            </li>
            <li>
              <Link to="#" className="">
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
              </Link>
            </li> */}
            {trendingCardsData.map((card, index) => {
              return <Card {...card} key={index} />;
            })}
          </ul>

          <Link to="#" className="btn trending-btn">
            View All Trending Stories
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Trending;
