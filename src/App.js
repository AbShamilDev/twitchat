import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useNavigate, useResolvedPath } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import UserInterface from "./pages/UserInterface/UserInterface";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo, setUsersList } from "./redux/dataSlice/dataSlice";
import { setMessages } from "./redux/dialogSlice/dialogSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useResolvedPath();

  const fetchData = async (selfId) => {
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
    await axios({
      method: "get",
      url: `https://b17d444024b5fb33.mokky.dev/messages?chatMembers.id=${selfId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      const result = res.data;
      dispatch(setMessages(result));
    });
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
          fetchData(res.data.id);
          path.pathname === "/" && navigate("/main");
          console.log(path);
        })
        .catch((err) => console.error(err));
    }
    const handleTouchMove = (event) => {
      event.preventDefault();
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/main/*" element={<UserInterface />} />
    </Routes>
  );
}

export default App;
