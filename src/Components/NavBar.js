import './style/NavBar.css'
import logo from '../res/logo.png'
import Global from '../Global.json'

import React, { Component } from 'react'

export default class NavBar extends Component {
    setUrl(url) {
        window.location.href = url
    }

    render() {
        return (
            <div className="NavBar" style={{height: Global.navbarHeight + 'px', backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>
                <img src={logo} alt="logo" style={{height: '100%'}} />
                <a onClick={() => this.props.linkHandler('home')}><p style={{color: Global.colors.tertiary}}>Home</p></a>
                <a onClick={() => this.props.linkHandler('schedule')}><p style={{color: Global.colors.tertiary}}>Schedule</p></a>
                <a href=""><p style={{color: Global.colors.tertiary}}>Map</p></a>
                <a href=""><p style={{color: Global.colors.tertiary}}>Prizes</p></a>
                <h2>HackUNT 2018 LIVE</h2>
            </div>
        )
    }
}