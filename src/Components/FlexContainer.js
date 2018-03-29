import './style/FlexContainer.css'

import React, { Component } from 'react'

export default class FlexContainer extends Component {
    render() {
        return (
            <div className="FlexContainer" style={this.props.style || {}}>
                {this.props.children}
            </div>
        )
    }
}