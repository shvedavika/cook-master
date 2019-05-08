import React from 'react';
import Container from "../../components/Container/Container";
import Sort from "../../components/EventsSort/EventsSort";
import EventsFilter from "../../components/EventsFilter/EventsFilter";
import EventsPagination from "../../components/Events/EventsPagination/EventsPagination";

export default function EventsPage() {
  return (
    <Container eventsPage>
      <EventsFilter/>
      <EventsPagination limitEventsPerPage={2}/>
      <Sort/>
    </Container>
  )
}
