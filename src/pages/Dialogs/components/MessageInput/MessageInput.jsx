import s from "./MessageInput.module.css";
import SendIcon from "../../svg/SendIcon";
import { useRef, useState } from "react";

const MessageInput = ({ theme, sendMessage }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  return (
    <div
      className={`${s.inputWrapper} ${theme === "dark" ? null : s.light}`}
      action=""
    >
      <input
        ref={inputRef}
        onInput={(el) => setMessage(el.target.value)}
        value={message}
        placeholder="Начните писать..."
        onKeyUp={(el) => {
          if (el.key === "Enter") {
            sendMessage(message, inputRef);
            setMessage("");
            inputRef.current.focus();
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
