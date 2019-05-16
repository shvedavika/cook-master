import React from 'react';
import Container from "../../components/Container/Container";
import BookTable from "../../components/BookTable/BookTable";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";

export default function BookTablePage() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem to="/book-table">Book table</BreadcrumbsItem>
      </Breadcrumbs>

      <Container bookTablePage>
        <BookTable/>
      </Container>
    </>
  )
}
