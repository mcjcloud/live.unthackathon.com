import './style/FullHeightView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

export default class FullHeightView extends Component {
    render() {
        let style = this.props.style || {}
        style.minHeight = (window.innerHeight - 70) + 'px';
        return (
            <div className="FullHeightView" style={style}>
                {this.props.children}
            </div>
        )
    }
}