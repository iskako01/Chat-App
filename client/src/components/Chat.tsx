import React from "react";
import {
  MultiChatSocket,
  useMultiChatLogic,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "./Header";
import BaseMessageForm from "./BaseMessageForm";

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "alisher4ik",
    "Pakapaka00000"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          return <BaseMessageForm props={props} activeChat={chatProps.chat} />;
        }}
      />
    </div>
  );
};

export default Chat;
