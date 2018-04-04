import Global from '../Global.json'

import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import ScrollView from '../Components/ScrollView'

export default class Home extends Component {
    render() {
        return (
            <FullHeightView style={{backgroundColor: Global.colors.secondary}}>
                <FlexContainer style={{height: '100%'}}>
                    {/* <div class="row" style={{height: '5%'}}></div> */}
                    <ScrollView style={{maxWidth: '400px'}} >
                        <Timeline
                            dataSource={{
                                sourceType: 'widget',
                                widgetId: '978024429673476096'
                            }}
                            options={{
                                height: 300
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="DevPost">
                            <p>test</p>
                            <p>test</p>
                            <p>test</p>
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="Wi-Fi">
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="Github">
                    <p>test</p>
                    <p>test</p>
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="Slack">
                    <p>test</p>
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="Contact">
                    <p>test</p>
                    </ScrollView>
                </FlexContainer>
            </FullHeightView>
        )
    }
}