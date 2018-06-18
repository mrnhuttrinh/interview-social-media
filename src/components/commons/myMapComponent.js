import React from "react"
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB_dX2RIAvoQzcYOX8IJim0qqWs8bgioeU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new window.google.maps.LatLng(props.center.lat, props.center.lng)}
  >
    <Marker
      position={new window.google.maps.LatLng(props.center.lat, props.center.lng)}
    />
  </GoogleMap>
);

export default MyMapComponent;