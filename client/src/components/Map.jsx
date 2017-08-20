import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import axios from 'axios';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 37.783697, lng: -122.408966 }}
    onClick={props.onMapClick}
  >
  {props.markers.map((marker, index) => (
      <Marker
        // {...marker}
        // onClick={this.onMarkerClick}
        position={{ lat: marker.lat, lng: marker.lng }}
        key={marker.key}
        icon={marker.icon}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {lat: 37.783327, lng:-122.413554, icon: 'http://i95.fastpic.ru/big/2017/0819/a3/9ad0ad417641864026cc88372c9c70a3.jpg'}, 
        {lat: 37.782852, lng:-122.409541, icon: 'http://i95.fastpic.ru/big/2017/0819/26/b5dd50ffbe055dd8412c984a36933926.jpg'}],
    };
    
    event = this.event.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then(res => {
        let users = res.data.users;
        console.log(users);
        this.setState({
          users,
        });
      })
  }

  event(event) {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    
    axios.post('http://localhost:3000/event', {lat: lat, lng: lng})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let markers = this.state.users.map((el, key) => {
        return {icon: el.icon, key: key, lat: el.lat, lng: el.lng};
    });
    console.log(markers);
    
    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{height: '500px'}} />
        }
        mapElement={
          <div style={{ height: '500px' }} />
        }
        // onMapLoad={_.noop}
        onMapClick={this.event}
        markers={markers}
        //onMarkerRightClick={_.noop} 
      />
    );
  }
}

export default Map;