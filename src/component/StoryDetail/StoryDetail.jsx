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
import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase-config.js";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    const getPost = async () => {
      const docSnap = await getDoc(doc(firestore, "posts", `${pid}`));
      // console.log(docSnap.data());
      setPostData(docSnap.data());
    };
    getPost();
  }, []);

  return (
    postData && (
      <div className="story-page-wrapper">
        <Header />
        <section className="section story-detail">
          <div className="container">
            <h1 className="story-title">
              {/* EXCLUSIVE: 'My dad returned with a Singham tattoo after watching the
            film’ reveals Cirkus actress Pooja Hegde */}
              {postData.title}
            </h1>

            <p className="story-summary">
              {/* In an exclusive conversation with Pinkvilla, Cirkus actress Pooja
            Hegde shared that her father is a huge fan of Rohit Shetty. So much
            so, that he got a Singham tattoo after watching the movie! */}
              {postData.summary}
            </p>

            <div className="story-meta-info">
              <p>
                Written by <span className="author">{postData.author}</span>
              </p>
              <p>
                Published on <span className="date">Dec 20,2022</span>
              </p>
              <p>08:24 PM IST</p>
            </div>

            <div className="story-content">
              <div className="story-content-img-holder">
                <img
                  src={postData.imageUrl}
                  alt=""
                  className="story-content-img"
                />
                {/* <img src={images.pathan} alt="" className="story-content-img" /> */}
                <p>
                  {/* EXCLUSIVE: 'My dad returned with a Singham tattoo after watching
                the film’ reveals Cirkus actress Pooja Hegde */}
                  {postData.summary}
                </p>
              </div>
              <div className="story-content-text">
                {/* <h3>Ranveer Singh, Pooja Hegde</h3>
              <p>
                Ranveer Singh, Pooja Hegde, Jacqueline Fernandez, and others are
                gearing up for the release of Rohit Shetty’s film Cirkus. Ahead
                of the film’s release, Pinkvilla got into an exclusive
                conversation with the team of Cirkus at the first-ever Pinkvilla
                MasterclassName. During the candid conversation, Rohit Shetty
                shared that he makes family movies and that he knows his core
                audience. Pooja Hegde added to that and revealed that her father
                is a huge fan of Rohit Shetty and his movies. So much so, that
                he got a Singham tattoo after watching the movie! Rohit Shetty
                on why
              </p>

              <h3>Cirkus is set in the 60s </h3>
              <p>
                Cirkus is set in the 60s and Ranveer Singh plays a double role
                in this comedy of errors. When asked about Cirkus being set in
                the 60s, Rohit Shetty told Pinkvilla, “I always wanted to make
                this kind of an era film and I thought this is the right script
                because when there’s a double role, there's confusion, and the
                first thing that comes to your mind is 'Itna confusion kyu hai?
                Wo Facebook ya Instagram pe jaake kyu nahi dekh lete wo kaun
                hai, kaha rehta hai? We wanted a period where there was no such
                kind of technology.” He further added, “They say that I make
                films for the masses but this is for our parents, and I think
                that is my core audience- which is a family audience. So this
                one is for them.”
              </p>
              <h3>Pooja Hegde reveals her father got a Singham tattoo </h3>
              <p>
                Pooja Hegde reveals her father got a Singham tattoo after
                watching the film Ranveer and Pooja Hegde both agreed with Rohit
                Shetty’s statement. Ranveer said, “Rohit Shetty is like a dad
                favourite. Everyone's dad's number one favourite director is
                Rohit Shetty." Meanwhile, Pooja Hegde shared that her father is
                such a huge fan that he has a Singham tattoo.
              </p>
              <p>
                “My dad went to watch Singham and came back with a Singham
                tattoo from the theatre. He told me it was a real tattoo so I'm
                like ‘You got Singham written?’” She further added that he kept
                praising the film, and also asked her when she will do a Rohit
                Shetty film. “Throughout my career, he's like when are you going
                to do a Rohit Shetty film? As if it was in my control! So when I
                told him (about Cirkus), he was very happy. When he met Rohit
                sir, he was so excited.”
              </p> */}
                {postData.paragraph.split("\n").map((para, index) => {
                  return <p key={`para+${index}`}>{para}</p>;
                })}
              </div>
            </div>

            <a href="#" className="btn btn-story-detail">
              <i className="fa-solid fa-hands-clapping"></i> Clap
            </a>
          </div>
        </section>

        {/* <StoryGenerator /> */}

        <div className="recommended">
          <RecommendedStories />
        </div>

        <Footer />
      </div>
    )
  );
}

export default StoryDetail;
