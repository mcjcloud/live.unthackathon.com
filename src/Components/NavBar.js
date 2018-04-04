import './style/NavBar.css'
import logo from '../res/logo.png'
import Global from '../Global.json'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            /*
            <div className="NavBar" style={{height: Global.navbarHeight + 'px', lineHeight: Global.navbarHeight + 'px', backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>
                <Link to={'/home'}><img src={logo} alt="logo" style={{height: (Global.navbarHeight * 0.9) + 'px', paddingTop: (Global.navbarHeight * 0.05) + 'px'}} /></Link>
                <Link to={'/home'}><p style={{color: Global.colors.tertiary}}>Home</p></Link>
                <Link to={'/schedule'}><p style={{color: Global.colors.tertiary}}>Schedule</p></Link>
                <Link to={'/map'}><p style={{color: Global.colors.tertiary}}>Map</p></Link>
                <Link to={'/prizes'}><p style={{color: Global.colors.tertiary}}>Prizes</p></Link>
                <h2>HackUNT 2018 LIVE</h2>
            </div>
            */
            <div class="NavBar">
                <nav class="navbar-fixed" style={{backgroundColor: Global.colors.primary}}>
                    <div class="nav-wrapper">
                    <Link to={'/home'} class="brand-logo">Logo</Link>
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