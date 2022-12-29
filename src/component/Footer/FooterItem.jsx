import React from "react";

const FooterItem = (link, index) => {
  return (
    <li className="footer-item" key={index}>
      <a href="#" className="footer-link">
        {link}
      </a>
    </li>
  );
};

export default FooterItem;
