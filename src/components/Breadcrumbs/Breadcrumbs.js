import React from 'react';
import {Route} from "react-router-dom";
import BreadcrumbsItem from "./BreadcrumbsItem/BreadcrumbsItem";

export default function Breadcrumbs() {
  return(
    <div className="breadcrumbs">
      <ul className='breadcrumbs__container'>
        <Route path='/:path' component={BreadcrumbsItem} history/>
      </ul>
    </div>
  )
}
