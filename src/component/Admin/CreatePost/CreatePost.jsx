import React, { useContext, useEffect, useState } from "react";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { firestorage, firestore } from "../../../firebase-config.js";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

import { EditPost, PreviewPost } from "../index.js";
import uuid from "react-uuid";

import "./CreatePost.css";

import { AdminContext } from "../../context/admin-context.jsx";
import useFetch from "../../useFetch.jsx";

function CreatePost() {
  const [postDetail, setPostDetail] = useState();
  // const { posts } = useContext(AdminContext);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // console.log("isEditing", isEditing);
  //   // if (isEditing || localStorage.getItem("isEditing")) {
  //   // getDoc();
  //   console.log(id, "running");

  //   if (id) {
  //     console.log(id);
  //     // localStorage.setItem("isEditing", true);
  //     setIsEditing(true);

  //     (async () => {
  //       const docSnap = await getDoc(doc(firestore, "posts", id));
  //       console.log(docSnap.data());
  //       let data = { ...docSnap.data() };
  //       // console.log(data.paragraph);
  //       setPostDetail(() => {
  //         return { ...data };
  //         // return { ...data, paragraph: data.paragraph.split("\n") };
  //       });
  //       window.localStorage.setItem(
  //         "form",
  //         JSON.stringify({ ...data })
  //         // JSON.stringify({ ...data, paragraph: data.paragraph.split("\n") })
  //       );
  //     })();
  //   }

  // const data = JSON.parse(localStorage.getItem("form"));
  // console.log(data);
  // }, [id]);

  useEffect(() => {
    if (id) setIsEditing(true);
  }, []);

  const showPreview = ({ title, summary, author, paragraph, image }) => {
    setPostDetail({
      title: title,
      summary: summary,
      author: author,
      paragraph: paragraph,
      image: image,
      // image: URL.createObjectURL(image),
    });

    localStorage.setItem(
      "form",
      JSON.stringify({ title, summary, author, paragraph, image })
    );
  };

  const onSubmitPost = async (
    { title, summary, author, paragraph, tags, image },
    imageFile
  ) => {
    console.log("submit()");

    // console.log(title, summary, author, paragraph, imageFile, tags);

    // const storageRef = ref(firestorage, `images/${imageFile.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, imageFile);
    // console.log("uploaded");
    // uploadTask.on(
    //   "state_changed",
    //   () => {},
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       // console.log(currentUser);
    //       console.log(downloadURL);
    //       const storyCollectionRef = collection(firestore, "posts");
    //       // const tagsCollectionRef = collection(firestore, "tags");
    //       addDoc(storyCollectionRef, {
    //         // postId: postId,
    //         title: title,
    //         summary: summary,
    //         author: author,
    //         // paragraph: paragraph.join("\n"),
    //         paragraph: paragraph,
    //         tags: tags,
    //         imageUrl: downloadURL,
    //         timestamp: Date.now(),
    //         publish: true,
    //         postReads: 0,
    //         postClaps: 0,
    //       }).then((postId) => {
    //         // setStoryUploading(false);
    //         // navigate("/");
    //         let prevPostIds;
    //         tags.forEach(async (tag) => {
    //           const docSnap = await getDoc(doc(firestore, "tags", `${tag}`));
    //           if (!docSnap.exists()) {
    //             setDoc(doc(firestore, "tags", `${tag}`), {
    //               tagname: `${tag}`,
    //               postIds: [postId],
    //             });
    //           } else {
    //             // setDoc(doc(firestore, "tags", `${tag}`), {tagname:`${tag}`}, { merge: true });
    //             console.log(`docSnap:+${docSnap.data()}`);
    //             prevPostIds = docSnap.data();
    //             updateDoc(doc(firestore, "tags", `${tag}`), {
    //               postIds: arrayUnion(postId),
    //             });
    //           }
    //         });
    //         // window.localStorage.removeItem("form");
    //         // setPostDetail({
    //         //   title: "",
    //         //   summary: "",
    //         //   author: "",
    //         //   paragraph: [],
    //         //   image: "",

    //         // });
    //         // localStorage.removeItem("isEditing");
    //         setIsEditing(false);
    //         navigate("/admin/updatePosts");
    //       });
    //     });
    //   }
    // );
    if (imageFile) {
      image = uploadImage(imageFile);
    }
    const storyCollectionRef = collection(firestore, "posts");
    addDoc(storyCollectionRef, {
      title: title,
      summary: summary,
      author: author,
      paragraph: paragraph,
      tags: tags,
      imageUrl: image,
      timestamp: Date.now(),
      publish: true,
      postReads: 0,
      postClaps: 0,
    }).then((postId) => {
      setTagsCollection(tags, postId);
      setIsEditing(false);
      navigate("/admin/updatePosts");
    });
  };

  const uploadImage = async (imageFile) => {
    //uploadimage
    // let imagepath;
    // let url;
    const url = await new Promise((resolve, reject) => {
      console.log("inside uploadimage");

      const storageRef = ref(firestorage, `images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      console.log("uploaded");
      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // console.log(downloadURL);
            console.log(downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });

    return url;
  };

  const setTagsCollection = (tags, postId) => {
    // const tagsCollectionRef = collection(firestore, "tags");

    tags.forEach(async (tag) => {
      const docSnap = await getDoc(doc(firestore, "tags", `${tag}`));
      if (!docSnap.exists()) {
        setDoc(doc(firestore, "tags", `${tag}`), {
          tagname: `${tag}`,
          postIds: [postId],
        });
      } else {
        // setDoc(doc(firestore, "tags", `${tag}`), {tagname:`${tag}`}, { merge: true });
        console.log(`docSnap:+${docSnap.data()}`);
        // prevPostIds = docSnap.data();
        updateDoc(doc(firestore, "tags", `${tag}`), {
          postIds: arrayUnion(postId),
        });
      }
    });
  };

  const onUpdatePost = async (
    { title, summary, author, paragraph, tags, image },
    imageFile
  ) => {
    console.log("update()");
    console.log(imageFile, image);
    const postRef = doc(firestore, "posts", id);

    if (imageFile) {
      image = await uploadImage(imageFile);
    }
    console.log(image);
    await updateDoc(postRef, {
      title: title,
      summary: summary,
      author: author,
      paragraph: paragraph,
      tags: tags,
      imageUrl: image,
      timestamp: Date.now(),
    }).then((postId) => {
      setTagsCollection(tags, postId);
      setIsEditing(false);
      navigate("/admin/updatePosts");
    });
  };

  return (
    <div className="createpost-container">
      <EditPost
        // postDetail={postDetail}
        pid={id}
        isEditing={isEditing}
        showPreview={showPreview}
        onSubmitPost={onSubmitPost}
        onUpdatePost={onUpdatePost}
      />
      <PreviewPost postDetail={postDetail} />
    </div>
  );
}

export default CreatePost;
