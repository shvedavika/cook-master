import React from 'react';
import './BookStep.scss';
import PropTypes from "prop-types";

export default function BookStep(props) {
  const {stepNumber} = props;
  return(
    <span className="book-step">{stepNumber}</span>
  )
}

BookStep.propTypes = {
  stepNumber: PropTypes.number.isRequired,
};

