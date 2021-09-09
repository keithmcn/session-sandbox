import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AddResource from './pages/AddResource';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/add' component={AddResource}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </Router>
    )
  }
}

export default App;