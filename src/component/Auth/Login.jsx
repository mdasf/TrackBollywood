import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

function Login() {
  // use;
  const { login, emailtemp, loading, error, setError } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);

    login(email, password);
  };

  // !loading &&
  //   error &&
  //   toast.error("wrong credentials", {
  //     position: toast.POSITION.TOP_LEFT,
  //     className: "toast-error",
  //   });

  useEffect(() => {
    !loading &&
      error &&
      toast.error("wrong credentials", {
        position: toast.POSITION.TOP_LEFT,
        className: "toast-error",
      });
    setError("");
  }, [error]);

  // console.log(loading);

  return (
    // {loading && div}
    <>
      {loading ? (
        <div className="loading">
          <div className="loading-animation"></div>
          <p>Please Wait...</p>
        </div>
      ) : (
        <div className="login-container">
          <form>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>
              Log in
            </button>
          </form>
        </div>
      )}{" "}
      <ToastContainer />
    </>
  );
}

export default Login;
