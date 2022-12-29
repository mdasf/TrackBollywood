import React from "react";

import images from "../../assets";
import { Card } from "../index.js";

import "./Popular.css";

// const popularUpperList = [
//   {
//     imageURL: images.imgthumbnail1,
//     tags: ["Blog"],
//     title: "Chorio and Potato with a Fried Egg for breakfast",
//   },
//   {
//     imageURL: images.imgthumbnail4,
//     tags: ["Health", "Food"],
//     title: "Chorio and Potato with a Fried Egg for breakfast",
//   },
// ];

// const popularLowerList = [
//   {
//     imageURL: images.imgthumbnail3,
//     tags: ["Lifestyles"],
//     title: "The World Caters to Average People and Mediocre",
//   },
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
// ];

function Popular({ data }) {
  const upperList = data.slice(0, 2);
  const lowerList = data.slice(2);

  return (
    <section className="section section-popular">
      <div className="container">
        <div className="heading hasbefore">
          <p className="">Most Popular</p>
        </div>
        <div className="popular-stories">
          <ul className="upper-list">
            {upperList.map((card, index) => {
              return (
                <li key={index}>
                  <Card {...card} />
                </li>
              );
            })}
          </ul>
          <ul className="lower-list">
            {lowerList.map((card, index) => {
              return (
                <li key={index}>
                  <Card {...card} />
                </li>
              );
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
