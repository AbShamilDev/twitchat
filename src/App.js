import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserInterface from "./pages/UserInterface/UserInterface";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "./redux/dataSlice/dataSlice";
import {
  connectWebSocket,
  disconnectWebSocket,
  sendWebSocketMessage,
} from "./redux/websocketSlice/websocketActions";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isConnected, messages } = useSelector((state) => state.websocket);

  useEffect(() => {
    dispatch(connectWebSocket("wss://twitchatbackend.up.railway.app/"));

    return () => {
      dispatch(disconnectWebSocket());
    };
  }, [dispatch]);

  const sendMessage = (message) => {
    dispatch(sendWebSocketMessage(message));
  };

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
          navigate("/main");
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
