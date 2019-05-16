import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import background1 from './assets/header-1.jpg';
import background2 from './assets/header-2.jpg';
import background3 from './assets/header-3.jpg';

export default function Header() {
  return(
    <header>
      <section className="home-header">
          <Link to="/" className="home-header__logo">CookMaster</Link>
          <img className="home-header__background" src={background3} alt="header"/>
          <img className="home-header__background" src={background2} alt="header"/>
          <img className="home-header__background" src={background1} alt="header"/>
          <HeaderMenu/>
      </section>
    </header>
  )
}
