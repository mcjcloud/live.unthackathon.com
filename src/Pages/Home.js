import Global from '../Global.json'

import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import CardView from '../Components/CardView'

export default class Home extends Component {
    render() {
        let wS = 0.25
        let hS = 0.5
        let w = window.innerWidth * wS - 20
        let height = window.innerHeight - Global.navbarHeight
        // if(window.innerWidth * wS - 80 < height * hS - 40) {
        //     w = height * hS - 20
        // }
        // else {
        //     w = window.innerWidth * wS - 20
        // }
        return (
            <FullHeightView style={{backgroundColor: Global.colors.secondary}}>
                <FlexContainer style={{height: '100%'}}>
                    {/* <div class="row" style={{height: '5%'}}></div> */}
                    <CardView>
                        <Timeline
                            dataSource={{
                                sourceType: 'widget',
                                widgetId: '978024429673476096'
                            }}
                            options={{
                                height: w
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                    </CardView>
                    <CardView title="DevPost">
                    </CardView>
                    <CardView title="Wi-Fi">
                    </CardView>
                    <CardView title="Github">
                    </CardView>
                    <CardView title="Slack">
                    </CardView>
                    <CardView title="Contact">
                    </CardView>
                </FlexContainer>
            </FullHeightView>
        )
    }
}