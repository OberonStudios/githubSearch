import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={LandingPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
