import './App.css'
import Global from './Global.json'

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './Pages/Home'
import SchedulePage from './Pages/Schedule'
import MapPage from './Pages/Map'
import PrizesPage from './Pages/Prizes'
import NavBar from './Components/NavBar'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App grey lighten-1">
                    <NavBar />
                    <Route path="/home" component={HomePage} />
                    <Route path="/schedule" component={SchedulePage} />
                    <Route path="/map" component={MapPage} />
                    <Route path="/prizes" component={PrizesPage} />
                </div>
            </Router>
        )
    }
}

export default App;
