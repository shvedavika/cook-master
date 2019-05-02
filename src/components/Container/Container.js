import React from 'react';
import './Container.scss';
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

class Container extends React.Component {
  render() {
    const {eventsPage} = this.props;
    let className = 'home-container';
    if (eventsPage) {
      className += ' events-container';
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
