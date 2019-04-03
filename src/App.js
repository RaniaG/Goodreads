import React, { Component } from 'react';
import './App.scss';

// import {BrowserRouter , Route , Switch} from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'


//Components
import AuthorDetails from './components/Author/Details';
import AuthorCard from './components/Author/Card';
import { Container, Row } from 'react-bootstrap'
import AddBook from './components/Book/Add';
import Rating from './components/Rating/Rating';
import Login from './components/Login/Login-nw';


// library.add(faIgloo)

// import AuthorDetails from './components/Author/Details';
// import AuthorCard from './components/Author/Card';
// import { Container, Row } from 'react-bootstrap';
// library.add(faIgloo)
// import AuthorDetails from './components/Author/Details';
// import AuthorCard from './components/Author/Card';
import BookDetails from './components/Book/Details';
import { Col } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/Home/Home';
import CategoriesList from './components/Categories/Listing';
import BookListing from './components/Book/Listing';
import AuthorListing from './components/Author/Listing';
import UserNavbar from './components/NavBar/user';
import AdminNavbar from './components/NavBar/admin';
import SearchResults from './components/SearchResults/SearchResults';
import AuthorDetails from './components/Author/Details';
import BookDetails from './components/Book/Details';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import CategoriesAdminListing from './components/Categories/AdminListing';
import UserProfile from './components/UserProfile/User-Profile';
//Components

class App extends Component {

  render() {
    const { user } = this.props;
    return (
      <div className="App">

        {/* <AuthorDetails data = {this.state.data}/>  */}
        <Login />
        {/* <SignUp /> */}
        {/* <AddBook /> */}
        {/* <Rating /> */}
        {/* <Container> 
          <Row>
             {this.state.data.map( m => <AuthorCard key = {m.id} author = {m}/>)} 
          </Row> 
        </Container> */}
      </div>
    )

    {/* <AuthorDetails data = {this.state.data}/>
        <Container>
        <Row>
        {this.state.data.map( m => <AuthorCard key = {m.id} author = {m}/>)}
        </Row>
        </Container> */}

        <Router>
          <>

            {user.type === 'user' ?
              <UserNavbar /> :
              <AdminNavbar />
            }
            <div className="content">
              <Switch >
                <Route path="/" exact component={HomeComponent} />
                <Route path="/home" exact component={HomeComponent} />
                <Route path="/search" exact component={SearchResults} />
                <Route path="/search/:value" exact component={SearchResults} />
                <Route path="/search/category/:category" exact component={SearchResults} />
                <Route path="/categories" exact component={CategoriesList} />
                <Route path="/profile" exact component={UserProfile} />
                {/* <Route path="/post/:id" exact component={PostDetails} /> */}
                <Route path="/authors" exact render={(routeProps) => (
                  <AuthorListing {...routeProps} showControls={false} />
                )} />
                <Route path="/books" exact render={(routeProps) => (
                  <BookListing {...routeProps} showControls={false} />
                )} />
                <Route path="/author/:id" exact component={AuthorDetails} />
                <Route path="/book/:id" exact component={BookDetails} />
                <Route path="/login" exact component={Login} />
                {/* <Route exact path="/author/add" component={AddAuthor} ></Route> */}
                {/* <Route exact path="/author/edit" component={AddAuthor} ></Route> */}
                <Route exact path="/author/:id" component={AuthorDetails} ></Route>

                {/* admin routes */}
                <Route path="/admin/categories" exact component={CategoriesAdminListing} />
                <Route path="/admin/books" exact render={
                  (props) => <BookListing showControls={true} />
                } />
                <Route path="/admin/authors" exact render={
                  (props) => <AuthorListing showControls={true} />
                } />
              </Switch>
            </div>


    {/* Aliaa */ }
    {/* <BooksList /> */ }
    {/* //</div> */}

    // );
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
    {/* // </div > */}
    // >>>>>>> 6b3e1e8ebc070de37840b577ce62fa3aaa754f2c

          </>
        </Router>
      // </div>
    // )

  }
}
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);

