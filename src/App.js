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

export default class App extends Component {
  state = {
    token: ''
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HomePage {...routerProps} />}
          />
          <Route 
            path="/login"
            exact
            render={(routerProps) => <LoginPage {...routerProps} />}
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
            render={(routerProps) => <SearchPage {...routerProps} />}
          />
        </Switch>
      </Router>
    )
  }
}

