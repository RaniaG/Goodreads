import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';

// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

// library.add(faIgloo)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button variant="primary" >click me</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
          <div>
            learn react
            <FontAwesomeIcon icon={faIgloo} />
          </div>
        </header>

      </div>
    );
  }
}

export default App;
