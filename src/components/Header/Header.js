import React from 'react';
import {Link} from "react-router-dom";
import HomeMenu from "./Menu/Menu";
import './Header.scss';
import background1 from './assets/11.jpg';
import background2 from './assets/22.jpg';
import background3 from './assets/header.jpg';

export default function Header() {
  return(
    <header className="home-header">
      <Link to="/" className="home-header__logo">CookMaster</Link>
      <img className="home-header__background" src={background1} alt="header"/>
      <img className="home-header__background" src={background2} alt="header"/>
      <img className="home-header__background" src={background3} alt="header"/>
      <HomeMenu/>
    </header>
  )
}
