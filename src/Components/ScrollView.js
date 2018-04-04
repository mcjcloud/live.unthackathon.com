import './style/ScrollView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

import CardView from '../Components/CardView'

export default class ScrollView extends Component {
    render() {
        let style = this.props.style || {}
        // style.margin = '0 0 0 0'
        style.backgroundColor = Global.colors.secondary
        return (
            <div className="ScrollView" style={style}>
                <div className="card-panel" style={{backgroundColor: Global.colors.primary, height: this.props.panelHeight || '400px'}}>
                    {this.props.title && <h1 style={{backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>{this.props.title}</h1>}
                    {this.props.children}
                </div>
            </div>
        )
    }
}