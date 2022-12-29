import React from "react";

import { Card } from "../index.js";
import images from "../../assets";
// import EditorialPicks from "../EditorialPicks/EditorialPicks";
import "./Recent.css";

// const recentPostCardsData = [
//   {
//     imageURL: images.imgthumbnail1,
//     tags: ["Blog"],
//     title: "Chorio and Potato with a Fried Egg for breakfast",
//     author: "Afreen",
//   },
//   {
//     imageURL: images.imgthumbnail4,
//     tags: ["Health", "Food"],
//     title: "Chorio and Potato with a Fried Egg for breakfast",
//     author: "Akib",
//   },

//   {
//     imageURL: images.imgthumbnail3,
//     tags: ["Lifestyles"],
//     title: "The World Caters to Average People and Mediocre",
//     author: "Asif",
//   },
//   {
//     imageURL: images.pathan,
//     tags: ["Meals", "Food"],
//     title: "Chorio and Potato with a Fried Egg for breakfast",
//     author: "Akib",
//   },
//   {
//     imageURL: images.imgthumbnail2,
//     tags: ["Travel"],
//     heading: "What I learned Living where everyone told me to avoid.",
//     author: "Rais",
//   },
// ];

function Recent({ data }) {
  return (
    <section className="section-latest">
      {/* <div className="container"> */}
      <div className="container-wrapper">
        <div className="heading hasbefore">
          <p className="">Recently</p>
        </div>
        <ul className="latest-stories">
          {data.map((card, index) => {
            return (
              <li key={index}>
                <Card {...card} />
              </li>
            );
          })}
        </ul>
      </div>
      <a href="#" className="btn trending-btn">
        View All Latest Stories
      </a>
      {/* </div> */}
    </section>
  );
}

export default Recent;
