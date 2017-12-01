import React, { Component } from 'react';
import './App.css';

import Home from './Home.js';
import Sports from './Sports.js';

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
            <Link class="tab" to="/">Home</Link>
            <Link class="tab" to="/sports">Sports</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/sports" component={Sports} />
        </div>
      </Router>
    );
  }
}

export default App;
