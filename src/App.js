import './App.css'

import React, { Component } from 'react';

import HomePage from './Pages/Home'
import SchedulePage from './Pages/Schedule'
import NavBar from './Components/NavBar'

class App extends Component {
    constructor(props) {
        super(props)
        this.navBar = <NavBar linkHandler={(url) => this.updatePage(url)} />

        this.state = {}
    }

    componentDidMount() {
        this.updatePage()
    }

    updatePage(newPath) {
        let path = newPath || (window.location.href.split('/')[3] || '').toLowerCase()
        let pages = ['home', 'schedule']
        this.setState({page: (pages.indexOf(path) > -1) ? path : 'home'})
    }

    render() {
        let page
        switch(this.state.page) {
        case 'home':
            page = <HomePage />
            break
        case 'schedule':
            page = <SchedulePage />
            break
        default:
            page = <HomePage />
        }
        return (
            <div className="App" style={{marginTop: '50px'}}>
                {this.navBar}
                {page}
            </div>
        )
    }
}

export default App;
