import React, { useContext, useState } from "react";
import { AuthContext } from "./auth-context";
import "./Login.css";

function Login() {
  // use;
  const { currentUser, login, emailtemp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // let errorMessage = "";

  console.log(emailtemp);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);
      login(email, password);
    } catch (err) {
      setError(true);
      // errorMessage = "Failed to Login !";
    }
  };

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
    </>
  );
}

export default Login;
