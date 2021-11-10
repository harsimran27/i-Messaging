import React from "react";
import "./css/Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import { Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>i Messaging</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Channels</h4>
          </div>

          <AddIcon className="sidebar_addChannel" />
        </div>
      </div>

      <div className="sidebar_channelsList">
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
      </div>

      <div className="sidebar_profile">
        <Avatar />
        <div className="sidebar_profileInfo">
          <h3>@simran</h3>
          <p>my_Id</p>
        </div>

        <div className="sidebar_profileIcon">
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
