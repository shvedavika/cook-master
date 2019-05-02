import React from 'react';
import {Link, Route} from "react-router-dom";

export default function BreadcrumbsItem({match, history}) {
  return(
    <>
    <li className={match.isExact ? 'breadcrumb-active' : undefined}>
      <Link to={match.url || ''}>
        {match.url}
        {console.log({history})}
      </Link>
    </li>
    {/*<Route path={`${match.url}/:path`} component={BreadcrumbsItem} />*/}
    </>
  )
}
