import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <section className="section section-footer">
      <div className="container">
        <ul className="footer-brand">
          <li className="footer-logo">
            <a href="#" className="footer-link">
              TrackBollywood
            </a>
          </li>
          <li className="footer-item">
            <p className="footer-brand-text">
              You don't have to go anywhere else just read and gossip here only.
            </p>
          </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-title">For Users</li>

          <li className="footer-item">
            <a href="#" className="footer-link">
              Trending
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Popular
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Recent
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li className="footer-list-title">TrackBollywood</li>

          <li className="footer-item">
            <a href="#" className="footer-link">
              About
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Disclaimer
            </a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">
              Terms & Condition
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>Copyright reserved to @akib&asif co. 2022</p>
      </div>
    </section>
  );
}

export default Footer;
