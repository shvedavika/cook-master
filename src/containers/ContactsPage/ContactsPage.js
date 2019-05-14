import React from 'react';
import Container from "../../components/Container/Container";
import ContactsMap from "../../components/ContactsMap/ContactsMap";
import Contacts from "../../components/Contacts/Contacts";

export default function ContactsPage() {
  return (
    <Container contactsPage>
      <Contacts/>
      <ContactsMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBj41DVnfmjqPj4IlCvDUdrLBq6letRFFU&v=3.exp&libraries=places&language=en&region=EN"
        loadingElement={<div style={{height: `400px`}} />}
        containerElement={<div className="map-container"/>}
        mapElement={<div style={{height: `400px`}} />}
      />
    </Container>
  )
}
