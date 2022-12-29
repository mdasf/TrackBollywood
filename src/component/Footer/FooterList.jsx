import React from "react";
import FooterItem from "./FooterItem";

const FooterList = ({ list }) => {
  return (
    <ul className="footer-list">
      {list.map((l) => {
        return <FooterItem link={l} />;
      })}

      {/* <li className="footer-list-title">TrackBollywood</li>

      <li className="footer-item">
        <a href="#" className="footer-link">
          Link1
        </a>
      </li>
      <li className="footer-item">
        <a href="#" className="footer-link">
          Link2
        </a>
      </li>
      <li className="footer-item">
        <a href="#" className="footer-link">
          Link3
        </a>
      </li> */}
    </ul>
  );
};

export default FooterList;
