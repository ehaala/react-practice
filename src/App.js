import React, { Component } from 'react';
import './App.css';
import { AppBar, IconMenu, IconButton, MenuItem} from 'material-ui';
import Reorder from 'material-ui/svg-icons/content/filter-list';

import Home from './Home.js';
import Music from './Music.js';
import Navbar from './Navbar.js';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/music" component={Music} />
        </div>
      </Router>
    );
  }
}

export default App;