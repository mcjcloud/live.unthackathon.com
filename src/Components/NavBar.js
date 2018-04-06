import './style/NavBar.css'
import logo from '../res/logo.png'
import Global from '../Global.json'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div class="NavBar">
                <nav class="navbar-fixed white" style={{minWidth: '450px', overflow: 'auto'}}>
                    <div class="nav-wrapper" style={{height: '100%'}}>
                        {/* <Link to={'/home'} class="brand-logo left" style={{height: '100%'}}><img style={{height: '100%'}} src={logo} /></Link> */}
                        {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
                        <ul id="nav-mobile" class="left" style={{height: '100%'}}>
                            <li style={{height: '100%'}}><a href={'https://unthackathon.com'} style={{height: '100%'}}><img style={{height: '90%'}} src={logo} /></a></li>
                            <li><Link to={'/home'}>Home</Link></li>
                            <li><Link to={'/schedule'}>Schedule</Link></li>
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