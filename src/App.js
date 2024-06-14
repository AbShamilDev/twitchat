import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate, useResolvedPath } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserInterface from "./pages/UserInterface/UserInterface";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo, setUsersList } from "./redux/dataSlice/dataSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useResolvedPath();

  const fetchUsers = async (selfId) =>
    await axios({
      method: "get",
      url: "https://b17d444024b5fb33.mokky.dev/users",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      const result = res.data;
      dispatch(setUsersList(result.filter((user) => user.id !== selfId)));
    });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
    } else {
      axios({
        method: "get",
        url: "https://b17d444024b5fb33.mokky.dev/auth_me",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          dispatch(setUserInfo(res.data));
          fetchUsers(res.data.id);
          path.pathname === "/" && navigate("/main");
          console.log(path);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/main/*" element={<UserInterface />} />
    </Routes>
  );
}

export default App;
