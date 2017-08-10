import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{ lat: 37.784415, lng: -122.435033 }}
    onClick={props.onMapClick}
  >
  {/* {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))} */}
  </GoogleMap>
));

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // let markers = this.props.places.map((el, key) => {
    //     return {key: key, lat: el.location.lat, lng: el.location.lng};
    // });

    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{height: '500px'}} />
        }
        mapElement={
          <div style={{ height: '500px' }} />
        }
        //onMapLoad={_.noop}
        //onMapClick={_.noop}
      //  markers={markers}
        //onMarkerRightClick={_.noop}
      />
    );
  }
}

export default Map;