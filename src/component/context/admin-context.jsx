import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Router, useNavigate } from "react-router-dom";
import { firestore } from "../../firebase-config";
import { Dashboard } from "../Admin";
import useFetch from "../useFetch";

const ctx = {
  // logout: () => {},
  // signUp: () => {},
  // login: () => {},
  // testingvalue: 10,
  // posts: null,
  // setPosts: () => {},
  updatePosts: (posts) => {},
  handleDeletePost: (postId) => {},
  handleEditPost: (postId) => {},
  // handleUnpublishPost: (postId) => {},
};

export const AdminContext = createContext(ctx);

const AdminContextProvider = (props) => {
  // const [isPageLoading, setIsPageLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // const { isLoading } = useFetch(collection(firestore, "posts"));
  // const updatePosts = (posts) => {
  //   setPosts(() => {
  //     posts;
  //   });
  // };

  // if (posts) console.log(posts);

  const handleDeletePost = async (postId) => {
    await deleteDoc(doc(firestore, "posts", postId));
    setPosts(posts.filter((post) => post.pid !== postId));
    // location.reload();
  };

  const handleEditPost = (postId) => {
    // await deleteDoc(doc(firestore, "posts", postId));
    // const data = posts.filter((post) => post.pid == postId);
    // console.log(data[0]);

    // setIsEditing(true);
    navigate(`/auth/createPost/${postId}`);
    // console.log("post edited");
  };

  const handleUnpublishPost = async (postId) => {
    await updateDoc(doc(firestore, "posts", postId), {
      publish: false,
      // timestamp: Date.now(),
    }).then((postId) => {
      console.log("post unpublished");
      navigate("/admin/updatePosts");
    });
  };

  useEffect(() => {
    // console.log(posts);
  }, [posts]);

  return (
    <>
      <AdminContext.Provider
        value={{
          // testingvalue: 10,
          // isEditing,
          // setIsEditing,
          posts,
          setPosts,
          handleDeletePost,
          handleEditPost,
          handleUnpublishPost,
        }}
      >
        {props.children}
        {/* <Dashboard /> */}
      </AdminContext.Provider>
    </>
  );
};

export default AdminContextProvider;
