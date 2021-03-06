import './style/Map.css'
import Global from '../Global.json'
import floor1Img from '../res/floor1.png'
import parkingImg from '../res/parking.png'

import React, { Component } from 'react'

import FullHeightView from '../Components/FullHeightView'
import ScrollView from '../Components/ScrollView'
import FlexContainer from '../Components/FlexContainer'

export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedImage: floor1Img }
    }
    render() {
        return (
            <div className="Map">
                <FullHeightView>
                    <FlexContainer style={{alignItems: 'center', height: window.innerHeight - Global.navbarHeight}}>
                            <div align="center" className="MapPanel" style={{width: '70%', height: '80%', paddingTop: '20px'}}>
                                <img src={floor1Img} style={{height: '100%'}} alt={this.state.selectedImage} />
                            </div>
                            <div align="center" className="MapPanel" style={{width: '70%', height: '80%', paddingTop: '20px'}}>
                                <img src={parkingImg} style={{height: '100%'}} alt={this.state.selectedImage} />
                            </div>
                    </FlexContainer>
                </FullHeightView>
            </div>
        )
    }
}