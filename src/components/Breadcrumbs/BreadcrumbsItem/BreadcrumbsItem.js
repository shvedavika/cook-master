import React from 'react';
import {connect} from "react-redux";
import './BreadcrumbsItem.scss';
import {Link} from "react-router-dom";

function BreadcrumbsItem({match}) {
  const routes =  {
    "/": "CookMaster",
    "/menu": "Menu",
    "/about-us": "About us",
    "/contacts": "Contacts",
    "/book-table": "Book table",
    "/events": "Events",
    "/event/:id" : 'Event',
    "/search" : 'Search',
  };

  const routeName = findRoutName(match.url);

  return(
    <>
    {routeName ?
      <li className="breadcrumb">
        <Link className={!match.isExact ? 'breadcrumb__link' : 'breadcrumb__link breadcrumb__link--active'} to={match.url || ''}>{routeName}</Link>
      </li>
      : null
    }
    </>
  );

  function findRoutName(url){
    // const reg = new RegExp('\\d+');
    // const isUrlHasId = !!(url.match(reg));
    // console.log(isUrlHasId);
    // if(isUrlHasId) return 'Events';
    return routes[url];
  }

}
export default connect(
  state => ({
    // routes: state.search.searchData,
  }),
)(BreadcrumbsItem)
