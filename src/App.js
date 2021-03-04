import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute.js'
import LoginPage from './auth/LoginPage.js'
import HomePage from './home/HomePage.js'
import SearchPage from './search/SearchPage.js'
import CollectionPage from './collection/CollectionPage.js'
import Header from './common/Header.js'
import Footer from './common/Footer.js'
import { getToken, storeToken } from './utils/local-storage-utils.js'

export default class App extends Component {
  state = {
    token: getToken()
  }

  handleUserChange = (user) => {
    storeToken(user);
    this.setState({token: user.token})
  }

  handleLogoutClick = e => {
    localStorage.clear();
    this.setState({token: ''});
  }

  render() {
    // console.log(this.state);
    return (
      <Router>
        <Header 
        handleLogoutClick={this.handleLogoutClick}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HomePage {...routerProps} />}
          />
          <Route 
            path="/login"
            exact
            render={(routerProps) => 
            <LoginPage 
            handleUserChange = {this.handleUserChange}
            {...routerProps} />}
          />
          <PrivateRoute 
            path="/search"
            exact
            token={this.state.token}
            render={(routerProps) => <SearchPage {...routerProps} />}
          />
          <PrivateRoute 
            path="/collection"
            exact
            token={this.state.token}
            render={(routerProps) => <CollectionPage {...routerProps} />}
          />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

