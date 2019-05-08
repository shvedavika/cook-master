import React from 'react';
import {Link} from "react-router-dom";
import './HeaderMenu.scss';

export default function HeaderMenu() {
  return (
    <ul className="home-menu">
      <li className="home-menu__item">
        <Link to="/" className="home-sub-menu__link">Home</Link>
        <ul className="home-sub-menu">
          <li className="home-sub-menu__item">
            <Link to="/about-us" className="home-sub-menu__link">About Us</Link>
          </li>
          <li className="home-sub-menu__item">
            <Link to="/book-table" className="home-sub-menu__link">Book Table</Link>
          </li>
          <li className="home-sub-menu__item">
            <Link to="/events" className="home-sub-menu__link">Events</Link>
          </li>
        </ul>
      </li>
      <li className="home-menu__item">
        <Link to="/menu" className="home-sub-menu__link">Menu</Link>
      </li>
      <li className="home-menu__item">Contacts</li>
    </ul>
  )
}
