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

