import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./components/DialogItem/DialogItem";
import Chat from "./components/Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDialogId } from "../../redux/dialogSlice/dialogSlice";

const Dialogs = ({ theme }) => {
  const { usersList, messages, userInfo } = useSelector(
    (state) => state.dataSlice
  );
  const activeDialogId = useSelector(
    (state) => state.dialogSlice.activeDialogId
  );

  const dispatch = useDispatch();

  const onDialogItemClick = (id) => {
    dispatch(setActiveDialogId(id));
  };

  return (
    <div
      className={`${s.dialogs} ${activeDialogId ? null : s.solo} ${
        theme === "dark" ? null : s.light
      }`}
    >
      <div className={s.users}>
        {usersList.map((d) => (
          <DialogItem
            active={d.id === activeDialogId}
            onClick={() => onDialogItemClick(d.id)}
            name={d.fullName}
          />
        ))}
      </div>
      <Chat
        theme={theme}
        recipientId={activeDialogId}
        messages={messages.filter(
          (message) =>
            (message.chatMembers[0].id === userInfo.id ||
              message.chatMembers[1].id === userInfo.id) &&
            (message.chatMembers[0].id === activeDialogId ||
              message.chatMembers[1].id === activeDialogId)
        )}
      />
    </div>
  );
};

export default Dialogs;
