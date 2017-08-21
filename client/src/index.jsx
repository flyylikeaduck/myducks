import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.jsx';
import BuddyForm from './components/BuddyForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      markers: []
    }

    this.handleUsersUpdate = this.handleUsersUpdate.bind(this);
  }

  handleUsersUpdate(users) {
    console.log('USERS UPDSTE $$$', users)
    this.setState({
      users: users
    });
  }

  render() {
    return (
    <div>
      <div id='pagetitle'>
        SafetyBuddy
      </div>
      <div>
       <SignUpForm
          users={this.state.users}
          handleUsersUpdate={this.handleUsersUpdate}
        />
      </div>
      <div>
        <Map
          users={this.state.users}
          handleUsersUpdate={this.handleUsersUpdate}
        />
      </div>
      <div>
        <BuddyForm/>
      </div>
    </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('index'));