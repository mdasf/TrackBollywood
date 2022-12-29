import React from "react";

import { Link } from "react-router-dom";

import images from "../../assets";

import "./Header.css";

function Header() {
  return (
    <section className="section section-header">
      <header className="container header">
        <Link to="/" className="logo-holder">
          <img src={images.logo} alt="logo" className="logo" />
        </Link>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item active">
              <Link to="/" className="navbar-link">
                <i className="fa-solid fa-house"></i>Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="#Trending" className="navbar-link">
                <i className="fa-solid fa-fire-flame-curved"></i>Trending
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="#About" className="navbar-link">
                About
              </Link>
            </li>
            {/* <li className="navbar-item"> */}

            {/* </li> */}
          </ul>
        </nav>
      </header>
      {/* <div className="search">
        <input className="search-input" type="text" />
        <label htmlFor="checkbox">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input id="checkbox" type="checkbox" />
      </div> */}
    </section>
  );
}

export default Header;
