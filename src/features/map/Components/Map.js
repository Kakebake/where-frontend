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
      <div>
        <div>Map</div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {<Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      </div>
    );
  })
);

Map.propTypes = {};

export default Map;
