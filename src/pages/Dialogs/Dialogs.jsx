import React, { useEffect, useState } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./components/DialogItem/DialogItem";
import Chat from "./components/Chat/Chat";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "../../redux/userSlice/userSlice";

const Dialogs = ({ theme }) => {
  const usersList = useSelector((state) => state.userSlice.usersList);
  const dispatch = useDispatch();

  const fetchUsers = async () =>
    await axios({
      method: "get",
      url: "https://b17d444024b5fb33.mokky.dev/users",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => dispatch(setUsersList(res.data)));

  useEffect(() => {
    if (!usersList.length) fetchUsers();
  }, []);

  return (
    <div className={`${s.solo} ${theme === "dark" ? null : s.light}`}>
      <div className={s.users}>
        {usersList.map((d) => (
          <DialogItem id={d.id} name={d.fullName} />
        ))}
      </div>
      {/* <Chat cancelChat={() => {}} theme={theme} /> */}
    </div>
  );
};

export default Dialogs;
