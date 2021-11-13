import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import SelectCustomer from './pages/SelectCustomer';
import AddCustomer from './pages/AddCustomer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/select' component={SelectCustomer}/>
            <Route path='/add' component={AddCustomer}/>
          </Switch>
        </Router>
    )
  }
}

export default App;