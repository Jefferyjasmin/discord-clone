import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
const Message = ({ timestamp, user, message }) => {
  console.log("this is the user in Message.js", { user });
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message_info">
        <h4>
          {user.displayName}
          <span className="message_timestamp">
            {new Date(timestamp).toUTCString()}
          </span>
        </h4>
        <p> {message}</p>
      </div>
    </div>
  );
};

export default Message;
