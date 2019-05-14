import React from 'react';
import './BookTable.scss';
import BookTableCalendar from "./BookTableCalendar/BookTableCalendar";
import BookTableTime from "./BookTableTime/BookTableTime";
import Tables from "./Tables/Tables";
import BookTableForm from "./BookTableForm/BookTableForm";

export default function BookTable() {
  return (
    <section className="book-date-time-tables">
      <h2 className="book-date-time-tables__header">Booking</h2>
      <p className="book-date-time-tables__summary">In order to book a table please select your date and time</p>
      <section className="book-date-time-tables__date-time">
        <BookTableCalendar/>
        <BookTableTime/>
      </section>
      <Tables/>
      <BookTableForm/>
    </section>
  )
}
