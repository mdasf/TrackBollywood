import React from "react";

import { Card } from "../index.js";
import images from "../../assets";
import "./RecommendedStories.css";
import { getRecentQuery } from "../Admin/queryApi.jsx";

// const recommendedCardsData = [
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

function RecommendedStories() {
  const { data, loading, error } = getRecentQuery(5);

  return (
    <section className=" section-recommonded">
      {/* <div className="container"> */}
      {error && <div>Unable to fetch..</div>}
      <div className="container-wrapper">
        <div className="heading hasbefore">
          <p className="">Recommended</p>
        </div>
        {!loading && data && (
          <ul className="recommonded-stories">
            {data.map((card, index) => {
              return (
                <li key={index}>
                  <Card {...card} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* </div> */}
    </section>
  );
}

export default RecommendedStories;
