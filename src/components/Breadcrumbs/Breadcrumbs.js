import React from 'react';
import './Breadcrumbs.scss';
import BreadcrumbsItem from "./BreadcrumbsItem/BreadcrumbsItem";

export default function Breadcrumbs(props){
  return (
    <section className="breadcrumbs">
      <BreadcrumbsItem to="/">CookMaster</BreadcrumbsItem>
      {props.children}
    </section>
  )
}
