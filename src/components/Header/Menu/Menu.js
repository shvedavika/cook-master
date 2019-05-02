import React from 'react';
import {Link} from "react-router-dom";
import './Menu.scss';

export default function Menu() {
  return (
    <ul className="home-menu">
      <li className="home-menu__item">Main
        <ul className="home-sub-menu">
          <li className="home-sub-menu__item">
            <Link to="/about-us" className="home-sub-menu__link">About Us</Link>
          </li>
          <li className="home-sub-menu__item">Book Table</li>
          <li className="home-sub-menu__item">
            <Link to="/events" className="home-sub-menu__link">Events</Link>
          </li>
        </ul>
      </li>
      <li className="home-menu__item">Menu</li>
      <li className="home-menu__item">Contacts</li>
    </ul>
  )
}
