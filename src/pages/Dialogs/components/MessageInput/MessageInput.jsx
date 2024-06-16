import s from "./MessageInput.module.css";
import SendIcon from "../../svg/SendIcon";
import { useState } from "react";
import { useSelector } from "react-redux";

const MessageInput = ({ theme, sendMessage, activeDialogId }) => {
  const [message, setMessage] = useState("");

  return (
    <div
      className={`${s.inputWrapper} ${theme === "dark" ? null : s.light}`}
      action=""
    >
      <input
        onInput={(el) => setMessage(el.target.value)}
        value={message}
        placeholder="Начните писать..."
        onKeyUp={(el) => {
          if (el.key === "Enter") {
            sendMessage(message);
            setMessage("");
          }
        }}
        type="text"
        name=""
        id=""
      />
      <span
        onClick={() => {
          sendMessage(message);
          setMessage("");
        }}
        className={s.sendButton}
      >
        <SendIcon />
      </span>
    </div>
  );
};

export default MessageInput;
