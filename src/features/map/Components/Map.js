import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const Map = withScriptjs(
  withGoogleMap(props => {
    return (
      <p>
        <p>Map</p>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      </p>
    );
  })
);

Map.propTypes = {};

export default Map;
