import React from "react";
import s from "../../Dialogs.module.css";

const Message = ({ index, type, message }) => {
  return (
    <div
      id={`message-${index}`}
      className={`${s.messageWrapper} ${type === "self" ? s.self : ""}`}
    >
      <p className={s.message}>
        {message}
        <span className={s.time}>{time}</span>
      </p>
    </div>
  );
};

export default Message;
