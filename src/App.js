import './App.css'

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './Pages/Home'
import SchedulePage from './Pages/Schedule'
import NavBar from './Components/NavBar'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App" style={{marginTop: '50px'}}>
                    <NavBar />
                    <Route path="/home" component={HomePage} />
                    <Route path="/schedule" component={SchedulePage} />
                </div>
            </Router>
        )
    }
}

export default App;
