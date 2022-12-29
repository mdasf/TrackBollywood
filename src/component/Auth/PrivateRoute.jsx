import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import Login from "./Login";
// import { auth } from "../firebase-config";

const PrivateRoute = ({ children }) => {
  console.log(auth.currentUser);
  if (!auth.currentUser) {
    console.log("not authorized");
    return <Login />;
  }
  return children;
};

export default PrivateRoute;
