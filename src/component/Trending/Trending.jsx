import React from "react";

import { Link } from "react-router-dom";
import { Card } from "../index.js";
import images from "../../assets";

import "./Trending.css";

function Trending({ data }) {
  //get array of type[timestamp,claps]

  // const arrayOfTimestampAndClaps = data.map((story) => {
  //   return [story.timestamp, story.postClaps];
  // });

  const postTrendingFactor = data.map((post) => {
    // const postedDuration = new Date() - new Date(post.timestamp).getTime();
    const postedDuration = (
      (new Date().getTime() - post.timestamp) /
      (24 * 60 * 60 * 1000)
    ).toFixed(2);

    // console.log(post.postClaps, postedDuration);

    return { ...post, tf: post.postClaps / postedDuration };
  });

  // console.log(postTrendingFactor);

  let trendingData = postTrendingFactor.sort((a, b) => {
    return b.tf - a.tf;
  });
  console.log(postTrendingFactor);

  trendingData = trendingData.slice(0, 4);

  // console.log("data:", data);

  // return "";

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
