import './style/CardView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

export default class CardView extends Component {
    constructor(props) {
        super(props)
        this.height = -1
    }

    render() {
        // let wS = this.props.widthScale
        // let hS = this.props.heightScale
        // let height = window.innerHeight - Global.navbarHeight
        // let w = window.innerWidth * wS - 20
        // if(window.innerWidth * wS - 80 < height * hS - 40) {
        //     w = height * hS - 20
        // }
        // else {
        //     w = window.innerWidth * wS - 20
        // }
        // this.height = w
        // let marginSide = (window.innerWidth - (w * (1 / wS))) / (1 / wS) + 'px' // take the remaining width after the cards and divide it evenly to pad
        // let marginTop = (height - (w * (1 / hS))) / (1 / hS * 2) + 'px' // take the remaining height after the cards and divide it evenly to pad
        let cardStyle = this.props.style || {}
        cardStyle.height = '100%'
        // cardStyle.height = w
        // cardStyle.width = w,
        // cardStyle.backgroundColor = Global.colors.tertiary,
        // cardStyle.marginLeft = marginSide,
        // cardStyle.marginRight = marginSide,
        // cardStyle.marginTop = marginTop,
        // cardStyle.marginBottom = marginTop

        return (
            // <div className="CardView" style={cardStyle}>
            //     {this.props.title && <h1 style={{backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>{this.props.title}</h1>}
            //     {this.props.children}
            // </div>
            <div class="col s4" style={cardStyle}>
                <div class="card-panel" style={{padding: '0', height: '100%'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}