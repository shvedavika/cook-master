import React from 'react';
import Container from "../../components/Container/Container";
import AboutUs from "../../components/AboutUs/AboutUs";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem to="/about-us">About us</BreadcrumbsItem>
      </Breadcrumbs>

      <Container>
        <AboutUs/>
      </Container>
    </>
  )
}
