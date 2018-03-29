import './style/FullHeightView.css'

import React, { Component } from 'react'

export default class FullHeightView extends Component {
    render() {
        let style = this.props.style || {}
        style.minHeight = window.innerHeight - 50
        return (
            <div className="FullHeightView" style={style}>
                {this.props.children}
            </div>
        )
    }
}