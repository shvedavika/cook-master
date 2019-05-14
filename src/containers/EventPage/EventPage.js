import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Container from "../../components/Container/Container";
import Event from "../../components/Events/Event/Event";
import {loadEvent} from "../../reducers/eventReducer";

export function EventPage(props) {
  const {loadEvent, event, match} = props;

  useEffect(() => {
    loadEvent(match.params.id);
  }, []);
  return (
    <Container eventPage>
      {event && <Event event={event}/>}
      {!event && <div>Loading...</div>}
    </Container>
  )
}

export default connect(
  (state) => ({
    event: state.event.event
  }),
  {
    loadEvent
  }
)(EventPage);
