import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/Home/Home';
import CategoriesList from './components/Categories/Listing';
import BookListing from './components/Book/Listing';
import AuthorListing from './components/Author/Listing';
import AuthorDetails from './components/Author/Details';
import AddAuthor from './components/Author/Add';
import UserNavbar from './components/NavBar/UserNavbar';
import SearchResults from './components/SearchResults/SearchResults';


//Components


class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <>
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
          </>
        </Router>
      </div>
    )
  }
}

export default App;
