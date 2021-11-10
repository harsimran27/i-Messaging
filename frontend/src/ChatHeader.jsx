import React from "react";
import "./css/ChatHeader.css";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_hash">#</span>MY Channel
        </h3>
      </div>
      <div className="chatHeader_right">
        <PeopleAltRoundedIcon />

        <div className="chatHeader_search">
          <input type="text" placeholder="Search" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
