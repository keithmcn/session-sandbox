import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import CustomerDetails from './pages/CustomerDetails';
import SelectCustomer from './pages/SelectCustomer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/details' component={CustomerDetails}/>
            <Route path='/select' component={SelectCustomer}/>
          </Switch>
        </Router>
    )
  }
}

export default App;