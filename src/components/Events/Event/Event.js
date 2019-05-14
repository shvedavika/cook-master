import React from 'react';
import PropTypes from 'prop-types';
import './Event.scss';

export default function Event(props) {
  const {event} = props;
  return(
    <article className="event">
      <img className="event__image" src={`/assets/events/${event.image}`} alt="event"/>
      <div className="event__info">
        <span className="event__date">{event.date}</span>
        <h3 className="event__header">{event.name}</h3>
        <span className="event__price">{event.price}</span>
        <p className="event__description">{event.description}</p>
      </div>
    </article>
  )
}

Event.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};
