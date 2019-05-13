import React from 'react';
import './Container.scss';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import AutoCompleteSearch from "../AutoCompleteSearch/AutoCompleteSearch";

class Container extends React.Component {
  render() {
    const {eventsPage, menuPage, bookTablePage} = this.props;
    let className = 'home-container';
    if (eventsPage) {
      className += ' events-container';
    } else if(menuPage) {
      className += ' menu-container';
    } else if(bookTablePage) {
      className += ' book-table-container';
    }
    return(
      <>
        <section className="navigation">
          <Breadcrumbs/>
          <AutoCompleteSearch/>
        </section>
        <section className={className}>
          {this.props.children}
        </section>
      </>
    )
  }
}
export default Container;
