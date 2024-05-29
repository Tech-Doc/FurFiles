import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DataPage from './components/DataPage';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/data" component={DataPage} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/services" component={OurServices} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
