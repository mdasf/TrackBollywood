import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-wrapper">
      <h1 className="h1 section-heading">
        Error 404
        <br />
        Page do not exist!
      </h1>

      <p>
        Please{" "}
        <Link className="link" to="/auth/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Error;
