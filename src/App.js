import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserInterface from "./pages/UserInterface/UserInterface";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./redux/userSlice/userSlice";
import { setSocket } from "./redux/socketSlice/socketSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = new WebSocket("wss://twitchatbackend.up.railway.app/");

    newSocket.onopen = () => {
      console.log("Соединение установлено");
      newSocket.send("Привет сервер!");
    };

    newSocket.onmessage = (event) => {
      console.log("Сообщение от сервера:", event.data);
    };

    newSocket.onerror = (error) => {
      console.error("Ошибка WebSocket:", error);
    };

    dispatch(setSocket(newSocket));

    return () => {
      newSocket.close();
    };
  }, []);

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
        .then((res) => dispatch(setUserInfo(res.data)))
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
