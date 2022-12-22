import React, { useState } from "react";
import { firestorage, firestore } from "../../firebase-config.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

import { Toolbar, EditPost, PreviewPost } from "../index.js";

import "./Admin.css";

function Admin() {
  // const [paragraphCount, setparagraphCount] = useState(1);
  const [postDetail, setPostDetail] = useState({});

  const generatePostPreview = () => {};

  const onPreviewClick = ({ title, summary, author, paragraph, image }) => {
    // generatePostPreview();
    // console.log(title, summary, author, paragraph);
    setPostDetail({
      title: title,
      summary: summary,
      author: author,
      paragraph: paragraph,
      image: image,
    });
  };

  const onSubmitPost = ({ title, summary, author, paragraph, image }) => {
    // generatePostPreview();
    console.log(title, summary, author, paragraph, image);
    // setPostDetail({
    //   title: title,
    //   summary: summary,
    //   author: author,
    //   paragraph: paragraph,
    //   image: image,
    // });

    console.log(image);
    const storageRef = ref(firestorage, `images/`);
    // const storageRef = ref(firestorage, `images/${image.name}`);

    const uploadTask = uploadBytes(storageRef, image);

    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log(currentUser);
          console.log(downloadURL);
          const storyCollectionRef = collection(firestore, "posts");

          addDoc(storyCollectionRef, {
            title: title,
            summary: summary,
            author: author,
            paragraph: paragraph,
            imageUrl: downloadURL,
            timestamp: Date.now(),
          }).then(() => {
            // setStoryUploading(false);
          });
        });
      }
    );
  };

  // const incrementParaCount = () => {
  //   setparagraphCount((prevCount) => prevCount + 1);
  // };

  // const decrementParaCount = () => {
  //   setparagraphCount((prevCount) => prevCount - 1);
  // };

  return (
    <div className="admin-container">
      {/* <Toolbar
        incrementParaCount={incrementParaCount}
        decrementParaCount={decrementParaCount}
      /> */}
      <EditPost
        // count={paragraphCount}
        onPreviewClick={onPreviewClick}
        onSubmitPost={onSubmitPost}
      />
      <PreviewPost postDetail={postDetail} />
    </div>
  );
}

export default Admin;
