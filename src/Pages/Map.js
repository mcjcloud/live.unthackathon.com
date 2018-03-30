import './style/Map.css'
import Global from '../Global.json'
import floor1Img from '../res/floor1.png'

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
            <div className="Map" style={{backgroundColor: Global.colors.secondary}}>
                <FullHeightView>
                    <FlexContainer style={{alignItems: 'center', height: window.innerHeight - Global.navbarHeight}}>
                        <div className="MapPanel" style={{width: '70%', height: '80%'}}>
                            <ScrollView title={'Map'} style={{width: (window.innerWidth * 0.7) * 0.3 + 'px', height: '100%', backgroundColor: Global.colors.tertiary}}>
                                <h1>Floor 1</h1>
                                <h1>Floor 2</h1>
                            </ScrollView>
                            <div style={{width: '70%', height: '100%'}}><img src={this.state.selectedImage} style={{height: '100%'}} alt={this.state.selectedImage} /></div>
                        </div>
                    </FlexContainer>
                </FullHeightView>
            </div>
        )
    }
}