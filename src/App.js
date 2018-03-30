import './App.css'
import Global from './Global.json'

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './Pages/Home'
import SchedulePage from './Pages/Schedule'
import MapPage from './Pages/Map'
import NavBar from './Components/NavBar'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App" style={{marginTop: Global.navbarHeight + 'px'}}>
                    <NavBar />
                    <Route path="/home" component={HomePage} />
                    <Route path="/schedule" component={SchedulePage} />
                    <Route path="/map" component={MapPage} />
                </div>
            </Router>
        )
    }
}

export default App;
