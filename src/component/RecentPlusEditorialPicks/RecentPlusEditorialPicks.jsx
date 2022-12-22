import React from "react";

// import images from "../../assets";
import { Recent, EditorialPicks } from "../index.js";
import "./RecentPlusEditorialPicks.css";

function RecentPlusEditorialPicks() {
  return (
    <div className="section two-section">
      <Recent />
      <EditorialPicks />
    </div>
  );
}

export default RecentPlusEditorialPicks;
