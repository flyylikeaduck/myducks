import React from 'react';

export default class BuddyForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      username: '',
      address: '',
      phoneNumber: '',
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e. preventDefault();
    console.log(this.state);
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
        <button onClick={e => this.onSubmit(e)}>ADD BUDDY</button>
      </form>

    )
  }
}
