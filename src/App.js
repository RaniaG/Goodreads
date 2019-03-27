import React, { Component } from 'react';
import './App.scss';
// import {BrowserRouter , Route , Switch} from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

//Components
import AuthorDetails from './components/Author/Details';
import AuthorCard from './components/Author/Card';
import {Container , Row } from 'react-bootstrap'
import Login from './components/Login/Login';
import AddBook from './components/Add-Book/Add-Book';
import Rating from './components/Rating/Rating';

// library.add(faIgloo)

class App extends Component {
  state = 
  {
    data : [
      {
        id: 1,
        image : 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' ,
        name: 'Ahmed Ibrahem' 
      },
      {
        id: 2,
        image : 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' ,
        name: 'Aly Mohamed' 
      },
      {
        id: 3,
        image : 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' ,
        name: 'Mohamed Alaa' 
      },
      {
        id: 4,
        image : 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' ,
        name: 'Ibrahem Elsayed' 
      },
      {
        id: 5,
        image : 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' ,
        name: 'Tarek Elsayed' 
      },
      {
        id: 6,
        image : 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' ,
        name: 'Khalid Yosrey' 
      },
    ]
  }
  render() {
    return (
      <div className="App">
        {/* <AuthorDetails data = {this.state.data}/>  */}
        {/* <Login /> */}
        {/* <AddBook /> */}
        {/* <Rating /> */}
         {/* <Container> 
          <Row>
             {this.state.data.map( m => <AuthorCard key = {m.id} author = {m}/>)} 
          </Row> 
        </Container> */}
       </div>
     )
  }
}

export default App;
