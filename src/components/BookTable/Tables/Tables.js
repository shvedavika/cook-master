import React, {useEffect} from 'react';
import {connect} from "react-redux";
import './Tables.scss';
import Table from "../Table/Table";
import {saveSelectedTable, tablesLoadedSuccessfully} from "../../../reducers/bookTableReducer";
import TABLES_FROM_BACKEND from "../../../reducers/tablesData";

const tablesLeft = [1, 2, 3, 4];
const tablesRight = [5, 6, 7, 8];
function Tables(props) {
  const {tablesLoadedSuccessfully, bookedTables, date, time} = props;
  useEffect(() => {
    tablesLoadedSuccessfully(TABLES_FROM_BACKEND);
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
    tablesLoadedSuccessfully,
    saveSelectedTable,
  }
)(Tables);
