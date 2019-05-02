import React from 'react';
import './EventsSort.scss';
import {connect} from "react-redux";
import {eventSortBy} from "../../reducers/eventReducer";

class EventsSort extends React.Component {
  handleClick = (e) => {
    this.props.eventSortBy(e.target.value);
  };
  render(){
    return(
      <select onChange={this.handleClick} defaultValue={""} className="events-sort">
        <option value="">Sort by...</option>
        <option value="name-asc">name ASC</option>
        <option value="name-desc">name DESC</option>
        <option value="date-asc">date ASC</option>
        <option value="date-desc">date DESC</option>
        <option value="price-asc">price ASC</option>
        <option value="price-desc">price DESC</option>
      </select>
    )
  }
}
export default connect(
  null,
  dispatch => ({
    eventSortBy: (property) => dispatch(eventSortBy(property)),
  })
)(EventsSort);
