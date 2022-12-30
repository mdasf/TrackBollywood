import React from "react";

// import images from "../../assets";
import { Recent, EditorialPicks } from "../index.js";
import "./RecentPlusEditorialPicks.css";

function RecentPlusEditorialPicks({ data }) {
  return (
    <div className="section two-section">
      <div className="container">
        <Recent data={data} />
        <EditorialPicks />
      </div>
    </div>
  );
}

export default RecentPlusEditorialPicks;
