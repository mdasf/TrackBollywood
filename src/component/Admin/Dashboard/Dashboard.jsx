import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { CreatePost, UpdatePosts } from "../index.js";

// import ctx from "../admin-admin"
import { AdminContext } from "../../context/admin-context";

import "./Dashboard.css";

const Dashboard = () => {
  const ctx = useContext(AdminContext);

  console.log("inside dashboard", ctx.testingvalue);
  console.log(ctx);

  return (
    <section className="section admin-header">
      <header className="container header">
        {/* <Link to="admin//" className="logo-holder">
          <img src={images.logo} alt="logo" className="logo" />
        </Link> */}
        <nav className="navbar">
          <ul className="navbar-list">
            {/* <li className="navbar-item">
              <Link to="dashboard" className="navbar-link"> */}
            {/* <i className="fa-solid fa-house"></i>Dashboard */}
            {/* Dashboard
              </Link>
            </li> */}

            <li className="navbar-item">
              <Link to="createPost" className="navbar-link">
                {/* <i className="fa-solid fa-fire-flame-curved"></i>Update Posts */}
                Add NewPost
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="updatePosts" className="navbar-link">
                {/* <i className="fa-solid fa-fire-flame-curved"></i>Update Posts */}
                Update Posts
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="dashboard" className="navbar-link">
                Logout
              </Link>
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
