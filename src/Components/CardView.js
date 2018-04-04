import './style/CardView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

export default class CardView extends Component {
    constructor(props) {
        super(props)
        this.height = -1
    }

    render() {
        let cardStyle = this.props.style || {}

        return (
            <div class="CardView col s4" style={cardStyle}>
                <div class="card-panel" style={{padding: '0', height: '100%'}}>
                    {this.props.title && <h1 className="card-title" style={{backgroundColor: Global.colors.primary}}>{this.props.title}</h1>}
                    {this.props.children}
                </div>
            </div>
        )
    }
}