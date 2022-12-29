import React from "react";

// import images from "../../assets";
import { Recent, EditorialPicks } from "../index.js";
import "./RecentPlusEditorialPicks.css";

function RecentPlusEditorialPicks({ data }) {
  return (
    <div className="section two-section">
      <Recent data={data} />
      <EditorialPicks />
    </div>
  );
}

export default RecentPlusEditorialPicks;
