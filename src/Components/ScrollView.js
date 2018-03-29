import './style/ScrollView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

export default class ScrollView extends Component {
    render() {
        return (
            <div className="ScrollView" style={this.props.style || {}}>
                {this.props.title && <h2 style={{backgroundColor: Global.colors.primary}}>{this.props.title}</h2>}
                <div style={this.props.title && {paddingTop: 50 + 'px'}}>{this.props.children}</div>
            </div>
        )
    }
}