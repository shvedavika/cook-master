import React from 'react';
import {connect} from "react-redux";
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './BookTableTime.scss';
import {saveTime} from "../../../reducers/bookTableReducer";
import {getCurrentDate} from "../../BookTable/BookTableCalendar/dateHelper";

function BookTableTime(props) {
  const {timeSelected, dateSelected, saveTime} = props;

  function handleChange(e) {
    const targetValue = e.target.value;
    saveTime(targetValue);
  }

  return (
    <section className="book-time">
      <FontAwesomeIcon icon={['far', 'clock']}/>
      <label htmlFor="book-table-time" className="book-time__name">Select time: </label>
      <select onChange={handleChange} value={timeSelected} id="book-table-time" className="book-time__field">
        <option value="10:00-12:00" disabled={!isTimeAvailable(10, 12)}>10:00 — 12:00</option>
        <option value="12:00-14:00" disabled={!isTimeAvailable(12, 14)}>12:00 — 14:00</option>
        <option value="14:00-16:00" disabled={!isTimeAvailable(14, 16)}>14:00 — 16:00</option>
        <option value="16:00-18:00" disabled={!isTimeAvailable(16, 18)}>16:00 — 18:00</option>
        <option value="18:00-20:00" disabled={!isTimeAvailable(18, 20)}>18:00 — 20:00</option>
        <option value="20:00-22:00" disabled={!isTimeAvailable(20, 22)}>20:00 — 22:00</option>
      </select>
    </section>
  );

  function isTimeAvailable(from, to) {
    const currentDate = getCurrentDate();
    const currentHour = new Date().getHours();

    if (dateSelected === currentDate) {
      return currentHour < from;
    }
    return true;
  }
}

export default connect(
  state => ({
    dateSelected: state.tables.date,
    timeSelected: state.tables.time,
  }),
  {
    saveTime,
  }
)(BookTableTime);
