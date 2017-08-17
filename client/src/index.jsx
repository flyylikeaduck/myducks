import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.jsx';
import BuddyForm from './components/BuddyForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div id='pagetitle'>
        SafetyBuddy
      </div>
      <div>
       <SignUpForm/>
      </div>
      <div>
        <Map/>
      </div>
      <div>
        <BuddyForm/>
      </div>
    </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('index'));