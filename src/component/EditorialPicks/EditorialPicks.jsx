import React from "react";

import { Card } from "../index.js";
import images from "../../assets";

const editorialPicksCardsData = [
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

function EditorialPicks() {
  return (
    <section className=" section-editor-choice">
      <div className="container">
        <div className="container-wrapper">
          <div className="heading hasbefore">
            <p className="">Editors Picked</p>
          </div>
          <ul className="editor-choice-stories">
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
                  </div>
                </div>
              </a>
            </li> */}

            {editorialPicksCardsData.map((card, index) => {
              return <Card {...card} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EditorialPicks;
