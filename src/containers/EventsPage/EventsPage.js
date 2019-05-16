import React from 'react';
import Container from "../../components/Container/Container";
import Sort from "../../components/EventsSort/EventsSort";
import EventsFilter from "../../components/EventsFilter/EventsFilter";
import EventsPagination from "../../components/Events/EventsPagination/EventsPagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";

export default function EventsPage() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem to="/events">Events</BreadcrumbsItem>
      </Breadcrumbs>

      <Container eventsPage>
        <EventsFilter/>
        <EventsPagination limitEventsPerPage={2}/>
        <Sort/>
      </Container>
    </>
  )
}
