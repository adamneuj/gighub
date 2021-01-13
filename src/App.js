import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './home/home';
import Login from './login/login';

class App extends Component {
  render() {
    return (
      <main>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </main>
    );
  }
}

export default App;
