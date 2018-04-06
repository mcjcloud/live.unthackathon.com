import './style/ScrollView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

import CardView from '../Components/CardView'

export default class ScrollView extends Component {
    render() {
        let style = this.props.style || {}
        // style.margin = '0 0 0 0'
        let color = (this.props.isGreen ? 'light-green darken-3' : 'white')
        console.log('isGreen: ' + color)
        return (
            <div className="ScrollView light-green darken-3" style={style}>
                <div className={'card-panel card ' + color} style={{height: this.props.panelHeight || '400px'}}>
                    {/* {this.props.title && <h1 style={{backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>{this.props.title}</h1>}
                    {this.props.children} */}
                    {this.props.title && <h1 class="card-title">{this.props.title}</h1>}
                    <div class={'card-content ' + color}>
                        <div className="ScrollView-content" style={this.props.scrollViewContentBG && {backgroundColor: this.props.scrollViewContentBG}}>{this.props.children}</div>
                    </div>
                </div>
            </div>
        )
    }
}