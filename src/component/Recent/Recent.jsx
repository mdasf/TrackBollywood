import React from "react";

import { Card } from "../index.js";
import images from "../../assets";
// import EditorialPicks from "../EditorialPicks/EditorialPicks";
import "./Recent.css";

const recentPostCardsData = [
  {
    imageURL: images.imgthumbnail1,
    tags: ["Blog"],
    title: "Chorio and Potato with a Fried Egg for breakfast",
    author: "Afreen",
  },
  {
    imageURL: images.imgthumbnail4,
    tags: ["Health", "Food"],
    title: "Chorio and Potato with a Fried Egg for breakfast",
    author: "Akib",
  },

  {
    imageURL: images.imgthumbnail3,
    tags: ["Lifestyles"],
    title: "The World Caters to Average People and Mediocre",
    author: "Asif",
  },
  {
    imageURL: images.pathan,
    tags: ["Meals", "Food"],
    title: "Chorio and Potato with a Fried Egg for breakfast",
    author: "Akib",
  },
  {
    imageURL: images.imgthumbnail2,
    tags: ["Travel"],
    heading: "What I learned Living where everyone told me to avoid.",
    author: "Rais",
  },
];

function Recent() {
  return (
    <section className="section-latest">
      <div className="container">
        <div className="container-wrapper">
          <div className="heading hasbefore">
            <p className="">Recently</p>
          </div>
          <ul className="latest-stories">
            {/* <li>
              <a href="#" className="">
                <div className="card">
                  <div className="card-img-holder">
                    <img src={images.imgthumbnail1} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-heading">
                      Chorio and Potato with a Fried Egg for breakfast
                    </div>
                    <div className="card-meta-info">
                      <span className="tag">Blog</span>
                      <p>
                        By<span className="author">Afreen</span>
                      </p>
                    </div>

                    <div className="card-summary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur deserunt sunt at odio exercitationem
                      temporibus. Laudantium.....
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
                    <div className="card-heading">
                      Chorio and Potato with a Fried Egg for breakfast
                    </div>
                    <div className="card-meta-info">
                      <span className="tag">Health</span>
                      <span className="tag">Food</span>
                      <p>
                        By<span className="author">Akib</span>
                      </p>
                    </div>
                    <div className="card-summary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur deserunt sunt at odio exercitationem
                      temporibus. Laudantium.....
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="">
                <div className="card">
                  <div className="card-img-holder">
                    <img src={images.imgthumbnail3} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-heading">
                      The World Caters to Average People and Mediocre
                      Lifestyles.
                    </div>
                    <div className="card-meta-info">
                      <span className="tag">Lifestyles</span>
                      <p>
                        By<span className="author">Asif</span>
                      </p>
                    </div>
                    <div className="card-summary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur deserunt sunt at odio exercitationem
                      temporibus. Laudantium.....
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
                    <div className="card-heading">
                      Chorio and Potato with a Fried Egg for breakfast
                    </div>
                    <div className="card-meta-info">
                      <span className="tag">Meals</span>
                      <span className="tag">Food</span>
                      <p>
                        By<span className="author">Akib</span>
                      </p>
                    </div>
                    <div className="card-summary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur deserunt sunt at odio exercitationem
                      temporibus. Laudantium.....
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
                    <div className="card-heading">
                      What I learned Living where everyone told me to avoid.
                    </div>
                    <div className="card-meta-info">
                      <span className="tag">Travel</span>
                      <p>
                        By<span className="author">Rais</span>
                      </p>
                    </div>
                    <div className="card-summary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur deserunt sunt at odio exercitationem
                      temporibus. Laudantium.....
                    </div>
                  </div>
                </div>
              </a>
            </li> */}
            {recentPostCardsData.map((card, index) => {
              return (
                <li>
                  <Card {...card} key={index} />
                </li>
              );
            })}
          </ul>
        </div>
        <a href="#" className="btn trending-btn">
          View All Latest Stories
        </a>
      </div>
    </section>
  );
}

export default Recent;
