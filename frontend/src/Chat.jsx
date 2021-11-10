import React from "react";
import "./css/Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmoticonsIcon from "@material-ui/icons/EmojiEmotions";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat_messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input type="text" placeholder="Message #Channel" />
          <button className="chat_inputButton" type="submit">
            Send Message
          </button>
        </form>

        <div className="chat_inputIcons">
          <GifIcon fontSize="large" />
          <EmojiEmoticonsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
