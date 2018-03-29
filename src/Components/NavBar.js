import './style/NavBar.css'
import logo from '../res/logo.png'
import Global from '../Global.json'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    setUrl(url) {
        window.location.href = url
    }

    render() {
        return (
            <div className="NavBar" style={{height: Global.navbarHeight + 'px', backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>
                <img src={logo} alt="logo" style={{height: '100%'}} />
                <Link to={'/home'}><p style={{color: Global.colors.tertiary}}>Home</p></Link>
                <Link to={'/schedule'}><p style={{color: Global.colors.tertiary}}>Schedule</p></Link>
                <Link to={'/map'}><p style={{color: Global.colors.tertiary}}>Map</p></Link>
                <Link to={'/prizes'}><p style={{color: Global.colors.tertiary}}>Prizes</p></Link>
                <h2>HackUNT 2018 LIVE</h2>
            </div>
        )
    }
}