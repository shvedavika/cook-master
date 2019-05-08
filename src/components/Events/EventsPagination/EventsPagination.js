import React, { useState }  from 'react';
import Pagination from "../../Pagination/Pagination";
import Events from "../Events";
import './EventsPagination.scss';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

function EventsPagination(props) {
  const {limitEventsPerPage} = props;
  const buttonsTotalCount = Math.round(props.events.length/limitEventsPerPage);

  return (
    <section className="events-pagination">
      <Events limitEventsPerPage={limitEventsPerPage}/>
      <Pagination limit={3} totalCount={buttonsTotalCount}/>
    </section>
  )
}
export default connect(
  state => ({
    events: state.event.eventsFiltered,
  })
)(EventsPagination);

EventsPagination.propTypes = {
  limitEventsPerPage: PropTypes.number.isRequired,
};
