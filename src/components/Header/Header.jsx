import React from "react";
import s from "./Header.module.css";
import logo from "./../../img/headerImgs/Logo.png";
import Miniatura from "./Miniatura";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({}) => {
  const theme = useSelector((state) => state.themeSlice.theme);
  const navigate = useNavigate();
  const activeDialog = useSelector(state => state.dialogSlice.activeDialogId)

  return (
    <header className={`${s.header} ${activeDialog && s.hide} ${theme === "dark" ? null : s.light}`}>
      {/* <img className={s.logo} src={logo} alt="" /> */}
      <h2>/ Switter X</h2>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/auth");
        }}
      >
        logout
      </button>
      {/* <Player /> */}
      <Miniatura />
    </header>
  );
};

export default Header;
