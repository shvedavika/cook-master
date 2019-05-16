import React from 'react';
import './BookTableSuccess.scss';
import Container from "../../components/Container/Container";
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function BookTableSuccess() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem to="/book-table">Book table</BreadcrumbsItem>
        <BreadcrumbsItem to="/book-table-success">Booking</BreadcrumbsItem>
      </Breadcrumbs>

      <Container bookTablePage>
        <h2 className="book-table-header">Thank you for your order.<br/>We will get in touch with you soon.</h2>
      </Container>
    </>
  )
}
