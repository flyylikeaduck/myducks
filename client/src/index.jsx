import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>
        <Map/>
      </h1>
      
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('index'));