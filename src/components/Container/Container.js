import React from 'react';
import './Container.scss';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

class Container extends React.Component {
  render() {
    const {eventsPage, menuPage} = this.props;
    let className = 'home-container';
    if (eventsPage) {
      className += ' events-container';
    } else if(menuPage) {
      className += ' menu-container';
    }
    return(
      <>
        <Breadcrumbs/>
        <section className={className}>
          {this.props.children}
        </section>
      </>
    )
  }
}
export default Container;
