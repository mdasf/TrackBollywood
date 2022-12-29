import { collection, limit, orderBy } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { firestore } from "../../../firebase-config";

import { Card } from "../../index.js";
import useFetch from "../../useFetch.jsx";
// import CreatePost from "../CreatePost/CreatePost";
import { AdminContext } from "../../context/admin-context";

import "./UpdatePosts.css";
import { Link } from "react-router-dom";

const UpdatePosts = () => {
  // console.log("render");
  // const [posts, setPosts] = useState([]);

  const { isLoading, error } = useFetch(collection(firestore, "posts"));

  // console.log(data, isLoading);

  // const [isLoading, setIsLoading] = useState(true);

  const { posts, handleDeletePost, handleEditPost, handleUnpublishPost } =
    useContext(AdminContext);

  // if (!isLoading) console.log(posts);

  // return "";

  return (
    <section className="section-update">
      <div className="container">
        <div className="heading hasbefore">
          <p className="">All Posts</p>
        </div>
        <ul
          className="update-post"
          // onClick={(e) => {
          //   if (e.target.dataset.action == "show") {
          //     const pid = e.target.closest(li).id;
          //     navigate("/s");
          //   }
          // }}
        >
          {!isLoading &&
            posts &&
            posts.map((post) => {
              return (
                <li key={post.pid} id={post.pid} data-action="show">
                  <div className="card-wrapper">
                    <Card
                      imageURL={post.imageURL}
                      title={post.title}
                      tags={post.tags}
                      summary={post.summary}
                      author={post.author}
                      paragraph={post.paragraph}
                      pid={post.pid}
                    />
                  </div>

                  <div
                    className="update-btn-group"
                    onClick={(e) => {
                      // console.log(e.target.closest("li").id);
                      // console.log(e.target.dataset.action);
                      e.preventDefault();
                      // const id = e.target.id;
                      const action = e.target.dataset.action;
                      if (action == "delete")
                        handleDeletePost(e.target.closest("li").id);
                      else if (action == "edit")
                        handleEditPost(e.target.closest("li").id);
                      else if (action == "unpublish")
                        handleUnpublishPost(e.target.closest("li").id);

                      // if(id=="unpublish")
                      // handleUnpublishPost(e.target.closest("li").id);
                    }}
                  >
                    <Link to="#" className="btn update-btn" data-action="edit">
                      <i className="fa-solid fa-pen-to-square"></i>
                      {/* <span>Edit</span> */}
                    </Link>
                    <Link
                      to="#"
                      className="btn update-btn"
                      data-action="unpublish"
                    >
                      <i className="fa-solid fa-scissors"></i>
                      {/* <span>Unpublish</span> */}
                    </Link>
                    <Link
                      to="#"
                      className="btn update-btn"
                      data-action="delete"
                    >
                      <i className="fa-solid fa-trash"></i>
                      {/* <span>Delete</span> */}
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default UpdatePosts;
