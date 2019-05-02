import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Pagination.scss';
import {connect} from "react-redux";
import {setPageNumber} from "../../reducers/eventReducer";
import PropTypes from "prop-types";

function Pagination(props) {
  const {buttonsLimit, buttonsTotalCount} = props;

  let paginationItems = [];
  for(let i=1; i<= buttonsTotalCount; i++) {
    paginationItems.push(i);
  }

  // const centerPaginationItems = (buttonId) => {
  //   let buttons = [...paginationItems].slice(0, buttonsLimit);
  //   if(activeButton > buttonsLimit){
  //     buttons = [...paginationItems].slice(1, buttonsLimit);
  //   }
  // };

  let [activeButton, setActiveButton] = useState(1);

  const handleClick = (e) => {
    const targetId = e.target.id;

    if(targetId === 'next' && activeButton !== buttonsTotalCount){
      setActiveButton(activeButton+1);
      props.setPageNumber(activeButton);
    } else if(targetId === 'previous') {
      if(activeButton === 1){return;}
      setActiveButton(activeButton-1);
      props.setPageNumber(activeButton);
    } else if(activeButton !== buttonsTotalCount || activeButton === 1){
      const targetId = +e.target.id;
      setActiveButton(targetId);
      props.setPageNumber(targetId);
    }
  };

  const renderPaginationItems = paginationItems.map(number => {
    const className = activeButton === number ? 'pagination__item pagination__item--active' : 'pagination__item';
    return(
      <li
        key={number}
        className={className}
        id={number}
        onClick={handleClick}
      >
        {number}
      </li>
    )
  });
  return(
    <ul className="pagination">
      <li>
        <FontAwesomeIcon onClick={handleClick} id="previous" icon={['fa', 'chevron-left']} className="pagination__item"/>
      </li>
      <ul className="pagination__items">{renderPaginationItems}</ul>
      <li>
        <FontAwesomeIcon onClick={handleClick} id="next" icon={['fa', 'chevron-right']} className="pagination__item"/>
      </li>
    </ul>
  )
}
export default connect(
  null,
  {
    setPageNumber
  }
)(Pagination);

Pagination.propTypes = {
  buttonsLimit: PropTypes.number.isRequired,
  buttonsTotalCount: PropTypes.number.isRequired,
};
