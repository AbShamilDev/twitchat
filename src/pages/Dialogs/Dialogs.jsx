import React, { useEffect } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./components/DialogItem/DialogItem";
import Chat from "./components/Chat/Chat";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "../../redux/dataSlice/dataSlice";
import { setActiveDialogId } from "../../redux/dialogSlice/dialogSlice";

const Dialogs = ({ theme }) => {
  const usersList = useSelector((state) => state.dataSlice.usersList);
  const activeDialogId = useSelector(
    (state) => state.dialogSlice.activeDialogId
  );
  const dispatch = useDispatch();

  const fetchUsers = async () =>
    await axios({
      method: "get",
      url: "https://b17d444024b5fb33.mokky.dev/users",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => dispatch(setUsersList(res.data)));

  const onDialogItemClick = (id) => {
    dispatch(setActiveDialogId(id));
  };

  useEffect(() => {
    if (!usersList.length) fetchUsers();
  }, []);

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
      <Chat theme={theme} />
    </div>
  );
};

export default Dialogs;
