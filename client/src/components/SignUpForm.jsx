import React from 'react';
import axios from 'axios';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      address: '',
      phoneNumber: '',
      password: ''
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('/signup', {
      username: this.state.username,
      address: this.state.address,
      // location: {
      //   lat : 37.4224764,
      //   lng : -122.0842499
      // },
      phone: this.state.phoneNumber
    })
      .then(response => console.log('yay, got response', response))
      .catch(error => console.log('oops error', error));
  };

  render () {
    return (
      <form>
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br/>
        <input
          name="address"
          placeholder="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
        />
        <br/>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
          onChange={e => this.change(e)}
        />
        <br/>
        <input
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br/>
        <button onClick={e => this.onSubmit(e)}>SIGN UP</button>
      </form>
    );
  }
}