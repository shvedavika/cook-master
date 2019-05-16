import React from 'react';
import './Container.scss';
import {withRouter} from "react-router-dom";
import Search from "../Search/Search";

function Container(props) {
  const {eventsPage, bookTablePage, contactsPage, searchPage} = props;
  let className = 'home-container';
  if (eventsPage) {
    className += ' events-container';
  } else if(bookTablePage) {
    className += ' book-table-container';
  } else if(contactsPage){
    className += ' contacts-container';
  } else if(searchPage) {
    className += ' search-container';
  }

  return(
    <>
      <section className="navigation">
        <Search/>
      </section>
      <section className={className}>
        {props.children}
      </section>
    </>
  )
}

export default withRouter(Container);
