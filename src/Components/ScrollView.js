import './style/ScrollView.css'
import Global from '../Global.json'

import React, { Component } from 'react'

import CardView from '../Components/CardView'

export default class ScrollView extends Component {
    render() {
        let style = this.props.style || {}
        // style.margin = '0 0 0 0'
        return (
            <div className="ScrollView grey lighten-1" style={style}>
                <div className="card-panel card light-green darken-3" style={{height: this.props.panelHeight || '400px'}}>
                    {/* {this.props.title && <h1 style={{backgroundColor: Global.colors.primary, color: Global.colors.tertiary}}>{this.props.title}</h1>}
                    {this.props.children} */}
                    {this.props.title && <h1 class="card-title">{this.props.title}</h1>}
                    <div class="card-content light-green darken-3">
                        <div className="ScrollView-content" style={this.props.scrollViewContentBG && {backgroundColor: this.props.scrollViewContentBG}}>{this.props.children}</div>
                    </div>
                </div>
            </div>
        )
    }
}