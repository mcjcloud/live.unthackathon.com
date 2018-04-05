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
            <div class="CardView" style={cardStyle}>
                <div class="card-panel card light-green darken-3" style={{padding: '0', height: '100%'}}>
                    {/* {this.props.title && <h1 className="card-title" style={{backgroundColor: Global.colors.primary}}>{this.props.title}</h1>} */}
                    {/* {this.props.children} */}
                    <div class="card-content black-text">
                        <span class="card-title">Card Title</span>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}