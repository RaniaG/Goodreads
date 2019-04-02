import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/Home/Home';
import CategoriesList from './components/Categories/Listing';
import BookListing from './components/Book/Listing';
import AuthorListing from './components/Author/Listing';
<<<<<<< HEAD
import AuthorDetails from './components/Author/Details';
import AddAuthor from './components/Author/Add';
import UserNavbar from './components/NavBar/UserNavbar';
=======
import UserNavbar from './components/NavBar/user';
import AdminNavbar from './components/NavBar/admin';
>>>>>>> 5b43cba026559d44a8ee7dd32745e91f49ec54e7
import SearchResults from './components/SearchResults/SearchResults';
import AuthorDetails from './components/Author/Details';
import BookDetails from './components/Book/Details';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
//Components


class App extends Component {

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Router>
          <>
<<<<<<< HEAD
            <UserNavbar />
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/home" exact component={HomeComponent} />
              <Route path="/search" exact component={SearchResults} />
              <Route path="/search/:value" exact component={SearchResults} />
              <Route path="/search/category/:id" exact component={SearchResults} />
              <Route path="/categories" exact component={CategoriesList} />
              {/* <Route path="/post/:id" exact component={PostDetails} /> */}
              <Route path="/authors" exact render={(routeProps) => (
                <AuthorListing {...routeProps} showControls={true} />
              )} />
              <Route path="/books" exact render={(routeProps) => (
                <BookListing {...routeProps} showControls={true} />
              )} />
              {/* <Route exact path="/author/add" component={AddAuthor} ></Route> */}
              <Route exact path="/author/edit" component={AddAuthor} ></Route>
              <Route exact path="/author/:id" component={AuthorDetails} ></Route>
            </Switch>
=======
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


                {/* admin routes */}
                {/* <Route path="/admin/categories" exact component={} /> */}
                <Route path="/admin/books" exact render={
                  (props) => <BookListing showControls={true} />
                } />
                <Route path="/admin/authors" exact render={
                  (props) => <AuthorListing showControls={true} />
                } />

              </Switch>
            </div>
>>>>>>> 5b43cba026559d44a8ee7dd32745e91f49ec54e7
          </>
        </Router>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(App);

