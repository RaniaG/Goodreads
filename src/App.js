import React, { Component } from 'react';
import './App.scss';
// import {BrowserRouter , Route , Switch} from 'react-router-dom';


//Components



import SearchResults from './components/SearchResults/SearchResults';


class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchResults />
      </div>
    )
  }
}

export default App;
