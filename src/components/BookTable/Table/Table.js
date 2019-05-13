import React from 'react';
import './Table.scss';
import PropTypes from "prop-types";

export default function Table(props) {
  const {number, onClick, isBooked, isSelected} = props;

  function handleClick() {
    onClick(number);
  }
  return (
    <div className={getClassName(isBooked, isSelected)}
      onClick={handleClick}>
      {props.number}
    </div>
  )
}

function getClassName(isBooked, isSelected) {
  const prefix = 'book-table-seat book-table-seat';
  if (isBooked) {
    return `${prefix}--busy`;
  }
  if(isSelected) {
    return `${prefix}--selected`;
  }
  return `${prefix}--free`;
}

Table.propTypes = {
  number: PropTypes.number.isRequired,
  isBooked: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
