import React, { useRef } from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import NavFriends from "./NavFriends";

const Navbar = ({ theme }) => {
  const links = useRef([
    {
      name: "Profile",
      to: "./profile",
    },
    {
      name: "Messages",
      to: "./dialogs",
    },
    {
      name: "News",
      to: "./news",
    },
    {
      name: "Music",
      to: "./music",
    },
    {
      name: "Settings",
      to: "./settings",
    },
  ]);

  return (
    <nav className={`${s.nav} ${theme === "dark" ? null : s.light}`}>
      {links.current.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          {link.name}
        </NavLink>
      ))}

      <NavFriends />
    </nav>
  );
};

export default Navbar;
