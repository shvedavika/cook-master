import React from 'react';
import './Container.scss';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import {withRouter} from "react-router-dom";
import Search from "../Search/Search";

function Container(props) {
  const {eventsPage, menuPage, bookTablePage, contactsPage, eventPage} = props;
  let className = 'home-container';
  if (eventsPage) {
    className += ' events-container';
  } else if(menuPage) {
    className += ' menu-container';
  } else if(bookTablePage) {
    className += ' book-table-container';
  } else if(contactsPage){
    className += ' contacts-container';
  } else if(eventPage) {
    className += ' event-container';
  }

  return(
    <>
      <section className="navigation">
        <Breadcrumbs {...props}/>
        <Search/>
      </section>
      <section className={className}>
        {props.children}
      </section>
    </>
  )
}

export default withRouter(Container);
