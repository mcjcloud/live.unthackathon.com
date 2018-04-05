import './style/NavBar.css'
import logo from '../res/logo.png'
import Global from '../Global.json'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div class="NavBar">
                <nav class="navbar-fixed light-green darken-3">
                    <div class="nav-wrapper">
                    <Link to={'/home'} class="brand-logo" style={{height: '100%'}}><img style={{height: '100%'}} src={logo} /></Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/schedule'}>Schedule</Link></li>
                        <li><Link to={'/map'}>Map</Link></li>
                        <li><Link to={'/prizes'}>Prizes</Link></li>
                    </ul>
                    </div>
                    {/* <div class="nav-content fixed">
                        <ul class="tabs tabs-transparent">
                            <li class="tab"><a href="#test1">Test 1</a></li>
                            <li class="tab"><a class="active" href="#test2">Test 2</a></li>
                            <li class="tab disabled"><a href="#test3">Disabled Tab</a></li>
                            <li class="tab"><a href="#test4">Test 4</a></li>
                        </ul>
                    </div> */}
                </nav>
            </div>
        )
    }
}