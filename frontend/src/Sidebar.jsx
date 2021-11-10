import React from "react";
import "./css/Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="siderbar_top">
        <h3>i Messaging</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
};

export default Sidebar;
