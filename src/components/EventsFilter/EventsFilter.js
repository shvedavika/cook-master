import React from 'react';
import {connect} from 'react-redux';
import EventsFilterCheckboxes from "./EventsFilterCheckboxes/EventsFilterCheckboxes";
import './EventsFilter.scss';

function EventsFilter(props) {
  const {filters} = props;
  return(
    <section className="event-filters">
      <EventsFilterCheckboxes filters={filters}/>
    </section>
  )
}
export default connect(
  state => ({
    filters: state.filter.filters
  })
)(EventsFilter);
