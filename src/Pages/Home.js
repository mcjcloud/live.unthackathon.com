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
        let w = 0
        let height = window.innerHeight - Global.navbarHeight
        if(window.innerWidth * wS - 80 < height * hS - 40) {
            w = height * hS - 20
        }
        else {
            w = window.innerWidth * wS - 20
        }
        return (
            <div>
                <FullHeightView style={{backgroundColor: Global.colors.secondary}}>
                    <FlexContainer style={{height: '100%'}}>
                        <CardView widthScale={0.25} heightScale={0.5}>
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
                        <CardView title="DevPost" widthScale={0.25} heightScale={0.5}>
                        </CardView>
                        <CardView title="Wi-Fi" widthScale={0.25} heightScale={0.5}>
                        </CardView>
                        <CardView title="Github" widthScale={0.25} heightScale={0.5}>
                        </CardView>
                        <CardView title="Slack" widthScale={0.25} heightScale={0.5}>
                        </CardView>
                        <CardView title="Contact" widthScale={0.25} heightScale={0.5}>
                        </CardView>
                    </FlexContainer>
                </FullHeightView>
            </div>
        )
    }
}