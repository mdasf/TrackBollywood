import React from "react";

import { Link } from "react-router-dom";
import { Card } from "../index.js";
import images from "../../assets";

import "./Trending.css";

function Trending({ data }) {
  // const trendingCardsData = [
  //   {
  //     imageURL: images.pathan,
  //     tags: ["Meals", "Food"],
  //     title: "Chorio and Potato with a Fried Egg for breakfast",
  //   },
  //   {
  //     imageURL: images.imgthumbnail2,
  //     tags: ["Travel"],
  //     title: "What I learned Living where everyone told me to avoid.",
  //   },
  //   {
  //     imageURL: images.imgthumbnail3,
  //     tags: ["Lifestyles"],
  //     title: "The World Caters to Average People and MediocreLifestyles.",
  //   },
  // ];

  // console.log(data);

  const trendingData = data.slice(0, 4);
  console.log("data:", data);

  return (
    <section className="section section-trending" id="#trending">
      <div className="container">
        <div className="heading hasbefore">
          <p className="">Trending</p>
        </div>
        <div className="trending-stories">
          <ul className="trending-stories-list">
            {trendingData.map((card, index) => {
              return (
                <li key={index}>
                  <Card {...card} />
                </li>
              );
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
