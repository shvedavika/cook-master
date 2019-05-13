import React from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './BookTableCalendar.scss';
import {saveDate} from "../../../reducers/bookTableReducer";
import {getCurrentDate} from "./dateHelper";

function BookTableCalendar(props) {
  function changeDate(e) {
    const targetValue = e.target.value;
    props.saveDate(targetValue);
  }
  return (
    <section className="book-calendar">
      <FontAwesomeIcon icon={['far', 'calendar-alt']}/>
      <label htmlFor="book-table-calendar" className="book-calendar__name">Select date: </label>
      <input id="book-table-calendar"
        type="date"
        value={props.dateSelected}
        onChange={changeDate}
        className="book-calendar__field"
        required
        min={getCurrentDate()}
      />
    </section>
  )
}

export default connect(
  state => ({
    dateSelected: state.tables.date,
  }),
  {
    saveDate,
  }
)(BookTableCalendar);

