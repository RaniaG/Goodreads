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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
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
                <PrivateRoute path="/search" exact component={SearchResults} />
                <PrivateRoute path="/search/:value" exact component={SearchResults} />
                <PrivateRoute path="/search/category/:category" exact component={SearchResults} />
                <PrivateRoute path="/categories" exact component={CategoriesList} />
                <PrivateRoute path="/profile" exact component={UserProfile} />
                <PrivateRoute path="/authors" exact render={(routeProps) => (
                  <AuthorListing {...routeProps} showControls={false} />
                )} />
                <PrivateRoute path="/books" exact render={(routeProps) => (
                  <BookListing {...routeProps} showControls={false} />
                )} />
                <PrivateRoute path="/author/:id" exact component={AuthorDetails} />
                <PrivateRoute path="/book/:id" exact component={BookDetails} />
                <Route path="/login" exact component={Login} />
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