import React, {useEffect} from 'react';
import {connect} from "react-redux";
import './Tables.scss';
import Table from "../Table/Table";
import {saveSelectedTable, loadTables} from "../../../reducers/bookTableReducer";

const tablesLeft = [1, 2, 3, 4];
const tablesRight = [5, 6, 7, 8];
function Tables(props) {
  const {loadTables, bookedTables, date, time} = props;
  useEffect(() => {
    loadTables();
  }, []);

  return (
    <section className="tables-wrapper">
      <section className="tables">
        <section className="tables--left">
          {tablesLeft.map((number) => (
            <Table number={number}
              key={number}
              onClick={handleClick}
              isSelected={isSelected(number)}
              isBooked={isBooked(number)}/>
          ))}
        </section>
        <section className="tables--right">
          {tablesRight.map((number) => (
            <Table number={number}
              key={number}
              onClick={handleClick}
              isSelected={isSelected(number)}
              isBooked={isBooked(number)}/>
          ))}
        </section>
      </section>
    </section>
  );

  function handleClick(number) {
    if(isBooked(number)){
      return;
    }
    props.saveSelectedTable(number);
  }

  function isSelected(number) {
    return props.selectedTable === number;
  }

  function isBooked(number) {
    return bookedTables.some((table) =>
         table.number === number
      && table.date === date
      && table.time === time);
  }
}

export default connect(
  state => ({
    bookedTables: state.tables.bookedTables,
    date: state.tables.date,
    time: state.tables.time,
    selectedTable: state.tables.selectedTable,
  }),
  {
    loadTables,
    saveSelectedTable,
  }
)(Tables);
