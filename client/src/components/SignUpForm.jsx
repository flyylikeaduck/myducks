import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      address: '',
      phoneNumber: '',
      passWord: ''
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
  };

  render () {
    return (
      <form>
        <input 
          name="username"
          placeholder="Username" 
          value={this.state.firstName} 
          onChange={e => this.change(e)}
        />
        <br/>
        <input 
          name="address"
          placeholder="Address" 
          value={this.state.lastName} 
          onChange={e => this.change(e)}
        />
        <br/>
        <input 
          name="phoneNumber"
          placeholder="Phone Number" 
          value={this.state.userName} 
          onChange={e => this.change(e)}
        />
        <br/>
        <input 
          name="password"
          placeholder="Password" 
          value={this.state.phoneNumber} 
          onChange={e => this.change(e)}
        />
        <br/>
        <button onClick={e => this.onSubmit(e)}>SIGN UP</button>
      </form>
    );
  }
}