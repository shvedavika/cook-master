import React, { useEffect} from 'react';
import {connect} from "react-redux";
import Event from "./Event/Event";
import './Events.scss';
import {eventLoadedSuccessfully} from "../../reducers/eventReducer";
import EVENTS_FROM_BACKEND from "../../reducers/eventsData";
import PropTypes from 'prop-types';

function Events(props) {
  const {limitEventsPerPage, eventLoadedSuccessfully} = props;
  useEffect(() => {
    eventLoadedSuccessfully(EVENTS_FROM_BACKEND);
  }, []);

  const offset = (props.page - 1) * limitEventsPerPage;
  const eventsToRender = props.events.slice(offset, offset + limitEventsPerPage);

  return(
    <section className={eventsToRender.length ? 'events' : 'events events--empty'}>
      {eventsToRender.length
        ? eventsToRender.map(event => <Event key={event.id} event={event}/>)
        : <h3 className="events__message">No events found according chosen filter</h3>
      }
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

