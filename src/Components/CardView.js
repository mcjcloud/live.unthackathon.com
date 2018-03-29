import './style/CardView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

export default class CardView extends Component {
    constructor(props) {
        super(props)
        this.height = -1
    }

    render() {
        let wS = this.props.widthScale
        let hS = this.props.heightScale
        let w = 0
        let height = window.innerHeight - 50
        if(window.innerWidth * wS - 80 < height * hS - 40) {
            w = height * hS - 20
        }
        else {
            w = window.innerWidth * wS - 20
        }
        this.height = w
        let cardStyle = {
            height: w,
            width: w,
            backgroundColor: Global.colors.tertiary,
            margin: 10 + 'px'
        }

        return (
            <div className="CardView" style={cardStyle}>
                {this.props.title && <h1 style={{backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>{this.props.title}</h1>}
                {this.props.children}
            </div>
        )
    }
}