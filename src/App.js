import React, { Component } from 'react';
import './App.css';

import Home from './Home.js';
import Music from './Music.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link className="tab" to="/">Home</Link>
            <Link className="tab" to="/music">Music</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/music" component={Music} />
        </div>
      </Router>
    );
  }
}

export default App;