import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { auth } from "../../firebase-config";
import { AuthContext } from "./auth-context";
import Login from "./Login";
// import { auth } from "../firebase-config";

const PrivateRoute = ({ children, page }) => {
  const { user, loading } = useContext(AuthContext);

  // console.log(user, page);
  // if (!auth.currentUser) {
  if (!user) {
    // console.log("not authorized", user);
    return <Login />;
  }

  return children;
  // (

  // <>
  //   {loading ? (
  //     <div className="loading">
  //       <div className="loading-animation"></div>
  //       <p>Logging in....</p>
  //     </div>
  //   ) : (
  //     children
  //   )}
  // </>
  // );
};

export default PrivateRoute;
