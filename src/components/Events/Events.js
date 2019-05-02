import React, { useEffect, useState, useContext } from 'react';
import {connect} from "react-redux";
import Event from "./Event/Event";
import './Events.scss';
import {eventLoadedSuccessfully} from "../../reducers/eventReducer";
import EVENTS_FROM_BACKEND from "../../reducers/eventsData";
import PropTypes from 'prop-types';
import Pagination from "../Pagination/Pagination";

function Events(props) {
  const {limitEventsPerPage, eventLoadedSuccessfully} = props;
  useEffect(() => {
    eventLoadedSuccessfully(EVENTS_FROM_BACKEND);
  }, []);

  // const [eventsToRender, setEventsToRender] = useState(props.events.slice(0, 2));
  // console.log(eventsToRender);
  // const prepareEventsList = () => {
  //   const offset = (props.page * (+limitEventsPerPage)) - (+limitEventsPerPage);
  //   setEventsToRender(props.events.slice(offset, offset+(+limitEventsPerPage)));
  // };

  let eventsToRender = props.events.slice(0, 2);
  return(
    <section className="events">
      {eventsToRender.map(event => {
        return(
          <Event key={event.id} event={event}/>
        )
      })}
    </section>
  )
}
export default connect(
  state => ({
    events: state.event.eventsFiltered,
    page: state.event.page,
  }),
  {
    eventLoadedSuccessfully,
  }
)(Events);

Events.propTypes = {
  limitEventsPerPage: PropTypes.number.isRequired,
};

