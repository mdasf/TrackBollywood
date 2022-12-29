import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  RecommendedStories,
  StoryGenerator,
} from "../index.js";

import images from "../../assets";

import "./StoryDetail.css";
import useFetch from "../useFetch.jsx";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase-config.js";
import { useParams } from "react-router-dom";
import CountClaps from "./CountClaps.jsx";

// const storyData = {
//   title:,
//   summary:"EXCLUSIVE: \'My dad returned with a Singham tattoo after watching the film\’ reveals Cirkus actress Pooja Hegde",
//   author:,
//   date:new Date(),
//   image:"/src/pathan.jpg",
//   content:"Cirkus is set in the 60s and Ranveer Singh plays a double role in this comedy of errors. When asked about Cirkus being set in
//   the 60s, Rohit Shetty told Pinkvilla, \“I always wanted to make
//   this kind of an era film and I thought this is the right script
//   because when there\’s a double role, there\'s confusion, and the
//   first thing that comes to your mind is \'Itna confusion kyu hai?
//   Wo Facebook ya Instagram pe jaake kyu nahi dekh lete wo kaun
//   hai, kaha rehta hai? We wanted a period where there was no such
//   kind of technology.” He further added, “They say that I make
//   films for the masses but this is for our parents, and I think
//   that is my core audience- which is a family audience. So this
//   one is for them."
// };

function StoryDetail() {
  const [postData, setPostData] = useState();
  const { pid } = useParams();
  console.log(pid);

  const updateClapCount = async (postClaps) => {
    await updateDoc(doc(firestore, "posts", pid), {
      postClaps: postClaps,
    });
  };

  const getTime = (timestamp) => {
    let [date, time] = new Date(timestamp).toLocaleString().split(",");
    time = time.slice(0, 5) + " " + time.slice(8);
    return { date, time };
  };
  let dateAndtime;
  useEffect(() => {
    console.log(pid);
    const getPost = async () => {
      // const docSnap = await getDoc(doc(firestore, "posts", `${pid}`));
      getDoc(doc(firestore, "posts", `${pid}`)).then((docSnap) => {
        setPostData(() => {
          return {
            ...docSnap.data(),
          };
        });
      });
    };
    getPost();
    window.scrollTo(0, 0);
  }, [pid]);

  if (postData) {
    dateAndtime = getTime(postData.timestamp);
  }

  return (
    postData && (
      <div className="story-page-wrapper">
        <Header />
        <section className="section story-detail">
          <div className="container">
            <h1 className="story-title">{postData.title}</h1>

            <p className="story-summary">{postData.summary}</p>

            <div className="story-meta-info">
              <p>
                Written by <span className="author">{postData.author}</span>
              </p>
              <p>
                Published on{" "}
                <span className="date">
                  {dateAndtime ? dateAndtime.date : ""}
                </span>
              </p>
              <p>
                <span className="time">
                  {dateAndtime ? dateAndtime.time : ""}
                </span>{" "}
                IST
              </p>
            </div>

            <div className="story-content">
              <div className="story-content-img-holder">
                <img
                  src={postData.imageUrl}
                  alt=""
                  className="story-content-img"
                />
                <p>{postData.summary}</p>
              </div>
              <div className="story-content-text">
                {postData.paragraph?.split("\n").map((para, index) => {
                  if (!para) return "";
                  return (
                    <p className="content-paragraph" key={index}>
                      {para}
                    </p>
                  );
                })}
              </div>
            </div>

            <CountClaps
              postClaps={postData.postClaps}
              updateClapCount={updateClapCount}
            />
          </div>
          <RecommendedStories />
        </section>

        {/* <div className="recommended"> */}
        {/* </div> */}

        <Footer />
      </div>
    )
  );
}

export default StoryDetail;
