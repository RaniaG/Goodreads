import React, { Component } from 'react';
import './App.scss';
//Components
import AuthorDetails from './components/Author/Details';


import BookDetails from './components/Book/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/Home/Home';
import CategoriesList from './components/Categories/Listing';
import BookListing from './components/Book/Listing';
import AuthorListing from './components/Author/Listing';
import UserNavbar from './components/NavBar/user';
import SearchResults from './components/SearchResults/SearchResults';
import Login from './components/Login/Login-nw';
import { connect } from 'react-redux';

import UserProfile from './components/UserProfile/User-Profile';
//Components

class App extends Component {

  render() {
    // const { user } = this.props;
    return (
      <Router>
        <div className="App">
          <>
            <UserNavbar />
            <div className="content">
              <Switch >
                <Route path="/" exact component={HomeComponent} />
                <Route path="/home" exact component={HomeComponent} />
                <Route path="/search" exact component={SearchResults} />
                <Route path="/search/:value" exact component={SearchResults} />
                <Route path="/search/category/:category" exact component={SearchResults} />
                <Route path="/categories" exact component={CategoriesList} />
                <Route path="/profile" exact component={UserProfile} />
                <Route path="/authors" exact render={(routeProps) => (
                  <AuthorListing {...routeProps} showControls={false} />
                )} />
                <Route path="/books" exact render={(routeProps) => (
                  <BookListing {...routeProps} showControls={false} />
                )} />
                <Route path="/author/:id" exact component={AuthorDetails} />
                <Route path="/book/:id" exact component={BookDetails} />
                <Route path="/login" exact component={Login} />

                <Route exact path="/author/:id" component={AuthorDetails} ></Route>


              </Switch>
            </div>

          </>
        </div>
      </Router>
    )

  }
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);