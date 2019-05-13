import React from 'react';
import {Link} from "react-router-dom";

export default function BreadcrumbsItem({match, history}) {
  return(
    <>
    <li className={match.isExact ? 'breadcrumb-active' : undefined}>
      <Link to={match.url || ''}>
        {match.url}
        {console.log({match})}
      </Link>
    </li>
    {/*<Route path={`${match.url}/:path`} component={BreadcrumbsItem} />*/}
    </>
  )
}
