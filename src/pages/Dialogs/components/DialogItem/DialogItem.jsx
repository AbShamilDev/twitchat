import React from "react";
import s from "../../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name }) => {
  return <div>{name}</div>;
};

export default DialogItem;
