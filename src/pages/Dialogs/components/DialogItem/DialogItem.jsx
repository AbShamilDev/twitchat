import React from "react";
import s from "../../Dialogs.module.css";

const DialogItem = ({ name, active, onClick }) => {
  return (
    <button
      className={`${s.user} ${active ? s.active : null}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default DialogItem;
