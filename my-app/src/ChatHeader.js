import "./ChatHeader.css";
import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
const ChatHeader = ({ channelName }) => {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader_right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader_search">
          <input type="text" placeholder="search" />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
