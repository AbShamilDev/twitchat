import s from "./MessageInput.module.css";
import SendIcon from "../svg/SendIcon";
import { useState } from "react";

const MessageInput = (props) => {
  const [message, setMessage] = useState("");
  console.log(props.theme);
  return (
    <div
      className={`${s.inputWrapper} ${props.theme === "dark" ? null : s.light}`}
      action=""
    >
      <input
        onInput={(el) => setMessage(el.target.value)}
        value={message}
        placeholder="Начните писать..."
        onKeyUp={(el) => {
          if (el.key == "Enter") {
            props.sendMessage(message);
            setMessage("");
          }
        }}
        type="text"
        name=""
        id=""
      />
      <span
        onClick={() => {
          props.sendMessage(message);
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
