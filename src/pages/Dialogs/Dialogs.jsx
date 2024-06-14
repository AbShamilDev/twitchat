import React, { useEffect, useState } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./components/DialogItem/DialogItem";
import Chat from "./components/Chat/Chat";
import { useNavigate, useParams } from "react-router-dom";

const Dialogs = ({ theme }) => {
  const params = useParams();
  console.log(params);
  const [activeDialog, setDialog] = useState(params["*"] ? params["*"] : 0);
  const dialogsElements = [].map((d) => (
    <DialogItem
      id={d.id}
      activeDialog={activeDialog}
      name={d.name}
      setDialog={(el) => setDialog(el)}
    />
  ));
  const navigate = useNavigate();

  const cancelChat = () => {
    navigate("./");
  };

  useEffect(() => console.log("effect"), []);

  return (
    <div
      className={`${s.dialogs} ${activeDialog == 0 ? s.solo : ""} ${
        theme === "dark" ? null : s.light
      }`}
    >
      <div className={s.users}>{dialogsElements}</div>
      <Chat
        cancelChat={() => {
          cancelChat();
        }}
        theme={theme}
      />
    </div>
  );
};

export default Dialogs;
