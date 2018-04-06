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
                <div class="card light-green darken-3" style={{height: '100%'}}>
                    {/* {this.props.title && <h1 className="card-title" style={{backgroundColor: Global.colors.primary}}>{this.props.title}</h1>} */}
                    {/* {this.props.children} */}
                    {/* <div class="card-content black-text">
                        {this.props.children}
                    </div> */}
                    <div class="card-image">
                        <img src={this.props.img} alt="none" />
                        {/* {this.props.title && <span class="card-title">{this.props.title}</span>} */}
                    </div>
                    {(this.props.children) && <div class="card-content" style={{backgroundColor: 'white', padding: '10px'}}>
                        {this.props.children}
                    </div>}
                </div>
            </div>
        )
    }
}