import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Feed from './Feed';
import generateFeed from '../lib/feedGenerator';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Feed feed={generateFeed()} />
          Hello, World!
        </div>
      </Router>
    );
  }
}

export default App;
