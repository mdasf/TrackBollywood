import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { CreatePost, Dashboard, UpdatePosts } from "../Admin";
import AuthContextProvider, { AuthContext } from "./auth-context";
import PrivateRoute from "./PrivateRoute";

const Authwrapper = () => {
  // const { currentUser } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      {/* <PrivateRoute>
        <Dashboard page={"dashboard"} />
      </PrivateRoute> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute page={"/"}>
              <Dashboard page={"/"} />
            </PrivateRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute page={"dashboard"}>
              <Dashboard page={"dashboard"} />
            </PrivateRoute>
          }
        />
        <Route
          path="createPost"
          element={
            <PrivateRoute page={"CreatePost"}>
              <CreatePost />
            </PrivateRoute>
          }
          page={"createPost"}
        />
        <Route
          path="createPost/:id"
          element={
            <PrivateRoute page={"CreatePostId"}>
              <CreatePost />
            </PrivateRoute>
          }
          page={"createPost"}
        />
        <Route
          path="updatePosts"
          element={
            <PrivateRoute>
              <UpdatePosts />
            </PrivateRoute>
          }
          page={"updatePosts"}
        />
      </Routes>{" "}
    </AuthContextProvider>
  );
};

export default Authwrapper;

// if (!auth.currentUser) {
//   console.log("not authorized");
//   return <Navigate to="/login" replace />;
// } else return children;

// {/* // <AuthContextProvider>
// //   {!currentUser && <Login />}
// //   {
// //     currentUser && <div>Logged in..</div>
// //     //   <Routes>
// //     //   <Route path="/*" element={<Login />}>
// //     // </Routes>
// //   }
// // </AuthContextProvider> */}
