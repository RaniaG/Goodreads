import React, { Component } from 'react';
import './App.scss';
// import {BrowserRouter , Route , Switch} from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// import AuthorDetails from './components/Author/Details';
// import AuthorCard from './components/Author/Card';
// import { Container, Row } from 'react-bootstrap';
// library.add(faIgloo)
// import AuthorDetails from './components/Author/Details';
// import AuthorCard from './components/Author/Card';
// import BookDetails from './components/Book/Details';
// import { Container, Row, Col } from 'react-bootstrap'
// import CategoriesList from './components/Categories/Listing';
// import BookListing from './components/Book/Listing';
// import SignUp from './components/Signup/Signup';


// Aliaa imports
//  import BooksList from './components/Book/List';


class App extends Component {
  state =
    {
      data: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          name: 'Ahmed Ibrahem'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          name: 'Aly Mohamed'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          name: 'Mohamed Alaa'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          name: 'Ibrahem Elsayed'
        },
        {
          id: 5,
          image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          name: 'Tarek Elsayed'
        },
        {
          id: 6,
          image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          name: 'Khalid Yosrey'
        },
      ]
    }
  render() {
    return (
      <div className="App">
        {/* <AuthorDetails data = {this.state.data}/>
        <Container>
        <Row>
        {this.state.data.map( m => <AuthorCard key = {m.id} author = {m}/>)}
        </Row>
        </Container> */}



        {/* Aliaa */}
        {/* <BooksList /> */}
      </div>

    );
      //   <BookDetails />
      //   {/* <AuthorDetails data = {this.state.data}/> */}
      //   {/* <Container>
      //     <Row>
      //       {this.state.data.map( m => <AuthorCard key = {m.id} author = {m}/>)}
      //     </Row>
      //   </Container> */}
      //   <Row className="no-gutters">
      //     <Col md={3}>
      //       <SignUp />
      //     </Col>
      //   </Row>
      //   <BookListing showControls={true}></BookListing>
      //   <CategoriesList />
      // </div >
  }
}

export default App;
