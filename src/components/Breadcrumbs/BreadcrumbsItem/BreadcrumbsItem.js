import React from 'react';
import './BreadcrumbsItem.scss';
import {Link} from "react-router-dom";

export default function BreadcrumbsItem(props) {
  const {to} = props;
  return (
     <Link to={to} className="breadcrumbsLink">
       {props.children}
     </Link>
   )
}
