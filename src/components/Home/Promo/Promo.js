import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Promo.scss';

export default function Promo() {
  return (
    <section className="promo">
      <h2 className="promo__header">How you can use this app</h2>
      <section className="promo__proposals">
        <article className="promo-proposal">
          <FontAwesomeIcon className="promo-proposal__icon" icon={['fa', 'utensils']}/>
          <h3 className="promo-proposal__header">Find favorite dish</h3>
          <p className="promo-proposal__text">
            A huge variety of dishes are proposed, find the best match for you and enjoy it.
          </p>
        </article>
        <article className="promo-proposal">
          <FontAwesomeIcon className="promo-proposal__icon"  icon={['fa', 'pen-alt']}/>
          <h3 className="promo-proposal__header">Book table</h3>
          <p className="promo-proposal__text">
            Quickly choose an appropriate table using our interactive booking system.
          </p>
        </article>
        <NavLink to="/events" className="promo-proposal">
          <article>
            <FontAwesomeIcon className="promo-proposal__icon"  icon={['fa', 'calendar-check']}/>
            <h3 className="promo-proposal__header">Search for events</h3>
            <p className="promo-proposal__text">
              Miscellaneous events are available for absolutely all ages, make your daily routine gripping.
            </p>
          </article>
        </NavLink>
      </section>
    </section>
  )
}
