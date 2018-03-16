import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from './pages/Home';
import About from './pages/About';
import Count from './pages/Count';

const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/count">Count</Link>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/count" component={Count} />
    </div>
  </Router>
);


export default hot(module)(App);
