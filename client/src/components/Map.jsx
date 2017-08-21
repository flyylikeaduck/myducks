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
      events: [],
    };

    this.event = this.event.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then(res => {
        this.props.handleUsersUpdate(res.data);
        console.log('users from map.jsx!!', this.props.users)
        // let users = res.data;
        // console.log(res);
        // this.setState({
        //   users,
        // });
      })
  }

  event(event) {
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();

    let newArray = this.props.users.slice();
    let newEvent = {lat, lng}
    newArray.push({lat, lng, icon: 'http://i92.fastpic.ru/big/2017/0821/b9/d1115d93590b7d53de7cfe074b298eb9.png'});

    this.setState({
      users: newArray
    });

    axios.post('http://localhost:3000/event', {lat: lat, lng: lng})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log('TESTING RENDER USERS', this.props.users)
    let markers = this.props.users.map((el, key) => {
        return {icon: el.icon, key: key, lat: el.lat, lng: el.lng};
    });
    console.log('markers', markers);

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