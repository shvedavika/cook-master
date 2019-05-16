import React from 'react';
import Container from "../../components/Container/Container";
import Menu from "../../components/Menu/Menu";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";


export default function MenuPage() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem to="menu">Menu</BreadcrumbsItem>
      </Breadcrumbs>

      <Container>
        <Menu/>
      </Container>
    </>
  )
}
