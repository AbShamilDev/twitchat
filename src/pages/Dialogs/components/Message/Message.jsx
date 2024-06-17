import React from "react";
import s from "../../Dialogs.module.css";

const Message = ({ message, type }) => {
  return (
    <div
      id={`message-${message.id}`}
      className={`${s.messageWrapper} ${s[type]}`}
    >
      <p className={s.message}>
        {message.message}
        {/* <span className={s.time}>{message.date}</span> */}
      </p>
    </div>
  );
};

export default Message;
