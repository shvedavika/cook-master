import React from 'react';
import './ContactsMap.scss';
import {connect} from "react-redux";
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

function ContactsMap() {
  return(
    <section className="map-container">
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 50.398038, lng: 30.638237}}
        defaultOptions={{
          mapTypeControl: true,
          zoomControl: true,
        }}
        className="map"
      >
      <Marker position={{ lat: 50.398038, lng: 30.638237 }}/>
      </GoogleMap>
    </section>
  )
}
export default connect()(withScriptjs(withGoogleMap(ContactsMap)));
