import React from 'react';
import s from './Header.module.css';
import logo from './../../img/headerImgs/Logo.png'
import Miniatura from './Miniatura';
import Player from './Player';

const Header = () => {
  return <header className={s.header}>
    <img className={s.logo} src={logo} alt="" />
    <h2>Switter X</h2>
    {/* <Player /> */}
    <Miniatura />
  </header>
}

export default Header;