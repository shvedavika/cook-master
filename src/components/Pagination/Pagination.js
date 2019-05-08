import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Pagination.scss';
import {connect} from "react-redux";
import {setPageNumber} from "../../reducers/eventReducer";
import PropTypes from "prop-types";

function Pagination(props) {
  const {page, limit, totalCount} = props;
  let pages = generateItems(page, limit, totalCount);

  return (
    <>
      {!pages.length ? null :
        <ul className="pagination">
        <li>
          <FontAwesomeIcon onClick={() => handleClick('prev')}
            icon={['fa', 'chevron-left']}
            className="pagination__item"/>
        </li>

        <ul className="pagination__items">
          {pages.map(number => (
            <li
              key={number}
              className={page === number ? 'pagination__item pagination__item--active' : 'pagination__item'}
              onClick={() => handleClick(number)}
            >
              {number}
            </li>
          ))}
        </ul>

        <li>
          <FontAwesomeIcon onClick={() => handleClick('next')}
            icon={['fa', 'chevron-right']}
            className="pagination__item"/>
        </li>
      </ul>
      }
    </>
  );

  function handleClick(number) {
    const isMoreThenInRange = number === 'next' && page >= totalCount;
    const isLessThenInRange = number === 'prev' && page <= 1;

    if (isMoreThenInRange || isLessThenInRange) {
      return;
    }

    if(number === 'next'){
      const nextPage = page + 1;
      props.setPageNumber(nextPage);
      return;
    }

    if(number === 'prev') {
      const prevPage = page - 1;
      props.setPageNumber(prevPage);
      return;
    }

    const newPage = +number;
    props.setPageNumber(newPage);
  }
}

function generateItems(current, limit, total) {
  const around = (limit - 1) / 2;
  const from = current - around;
  const fromMax = Math.max(from, 1);
  const fromMaxMin = Math.min(fromMax, total - limit + 1);
  if(total < limit && total <= 1) {
    return [];
  }
  //добавила:
  if(!fromMaxMin) {
    return Array.from({length: total}, (value, index) => 1 + index);
  }
  return Array.from({length: limit}, (value, index) => fromMaxMin + index);
}

export default connect(
  state => ({
    page: state.event.page
  }),
  {
    setPageNumber,
  }
)(Pagination);

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};
