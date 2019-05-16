import React from 'react';
import Container from "../../components/Container/Container";
import ContactsMap from "../../components/ContactsMap/ContactsMap";
import Contacts from "../../components/Contacts/Contacts";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";

export default function ContactsPage() {
  const key = 'AIzaSyBj41DVnfmjqPj4IlCvDUdrLBq6letRFFU&v=3';
  const linkWithKey = `https://maps.googleapis.com/maps/api/js?key=${key}.exp&libraries=places&language=en&region=EN"`;
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem to="/contacts">Contacts</BreadcrumbsItem>
      </Breadcrumbs>

      <Container contactsPage>
        <Contacts/>
        <ContactsMap
          googleMapURL={linkWithKey}
          loadingElement={<div style={{height: `400px`}} />}
          containerElement={<div className="map-container"/>}
          mapElement={<div style={{height: `400px`}} />}
        />
      </Container>
    </>
  )
}
