import React, { useContext } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { CreatePost, UpdatePosts } from "../index.js";

// import ctx from "../admin-admin"
import { AdminContext } from "../../context/admin-context";
import { AuthContext } from "../../Auth/auth-context";

import "./Dashboard.css";

const Dashboard = ({ page }) => {
  const ctx = useContext(AdminContext);
  const navigate = useNavigate();

  const { currentUser, logout, emailtemp } = useContext(AuthContext);
  // console.log(page, emailtemp);

  const logoutHandler = async () => {
    try {
      logout();
    } catch (error) {
      // setError("Logout Failed.");
      console.log(error);
    }
  };

  // console.log("inside dashboard", ctx.testingvalue);
  // console.log(ctx);

  return (
    <section className="section admin-header">
      <header className="container header">
        {/* <Link to="admin//" className="logo-holder">
          <img src={images.logo} alt="logo" className="logo" />
        </Link> */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/auth/dashboard" className="navbar-link">
                {/* <i className="fa-solid fa-house"></i>Dashboard */}
                Dashboard
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/auth/createPost" className="navbar-link">
                {/* <i className="fa-solid fa-fire-flame-curved"></i>Update Posts */}
                Add NewPost
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/auth/updatePosts" className="navbar-link">
                {/* <i className="fa-solid fa-fire-flame-curved"></i>Update Posts */}
                Update Posts
              </Link>
            </li>

            <li className="navbar-item">
              <button onClick={logoutHandler} className="navbar-link">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* <Routes> */}
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* <Route path="updatePosts" element={<UpdatePosts />} />
        <Route path="createPost/:id" element={<CreatePost />} />
      </Routes> */}
    </section>
  );
};

export default Dashboard;
