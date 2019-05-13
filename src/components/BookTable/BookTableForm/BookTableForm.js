import React, {useState} from 'react';
import {connect} from "react-redux";
import MaskedInput from 'react-text-mask';
import './BookTableForm.scss';
import {bookTable, saveBookedTable} from "../../../reducers/bookTableReducer";
import {withRouter} from "react-router-dom";

const mask = ["(",/\d/, /\d/, /\d/,")", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/];

function BookTableForm(props) {
  const [phone, savePhone] = useState('');
  const [errorTable, setErrorTable] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  return (
    <section className="book-form-wrapper">
      <form className="book-form">
        <section className="book-form__details">
          <span className="book-form__text">Enter your phone number to finish the booking</span>
        </section>
        <label className="book-form__phone" htmlFor="book-phone">Mobile:
          <MaskedInput type="tel"
            className="book-form__phone-field"
            id="book-phone"
            onChange={handleChange}
            keepCharPositions
            showMask
            mask={mask}
            required
          />
        </label>
        {errorTable && <div className="book-form__error">Please select a table</div>}
        {errorPhone && <div className="book-form__error">Please enter valid phone number</div>}
        <input type="button" value="Book table" className="book-form__button" onClick={handleClick}/>
      </form>
    </section>
  );

  function handleChange(e) {
    const targetValue = e.target.value;
    savePhone(targetValue);
  }
  function handleClick() {
    const {date, time, selectedTable} = props;
    setErrorTable(false);
    setErrorPhone(false);
    const isPhoneValid = phone && !phone.includes('_');
    const isTableValid = !!selectedTable;

    if (!isTableValid) {
      setErrorTable(true);
    }
    if (!isPhoneValid) {
      setErrorPhone(true);
    }
    if (!isTableValid || !isPhoneValid) {
      return;
    }

    const data = {date, time, selectedTable, phone};
    props.bookTable(data);

    const tableToSave = {
      number: selectedTable,
      date: date,
      time: time,
    };
    props.saveBookedTable(tableToSave);
    props.history.push("/book-table-success");
  }
}
export default withRouter(connect(
  state => ({
    bookedTables: state.tables.bookedTables,
    date: state.tables.date,
    time: state.tables.time,
    selectedTable: state.tables.selectedTable,
  }),
  {
    bookTable,
    saveBookedTable,
  }
)(BookTableForm));

