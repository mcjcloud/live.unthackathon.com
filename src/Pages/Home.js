import Global from '../Global.json'

import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import ScrollView from '../Components/ScrollView'

export default class Home extends Component {
    render() {
        return (
            <FullHeightView>
                <FlexContainer style={{height: '100%'}}>
                    {/* <div class="row" style={{height: '5%'}}></div> */}
                    <ScrollView style={{maxWidth: '400px'}} >
                        <Timeline
                            dataSource={{
                                sourceType: 'widget',
                                widgetId: '978024429673476096'
                            }}
                            options={{
                                height: 400
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="DevPost">
                        <p>You can find the DevPost <a href="https://hackunt2018.devpost.com">here</a></p>
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="Wi-Fi">
                        <p>If you are a UNT student, sign in to eaglenet with your EUID and password.</p>
                        <p>If you are a visitor, you will be given a card with the Wi-Fi info at the Info Booth</p>
                    </ScrollView>
                    {/* <ScrollView style={{maxWidth: '400px'}}  title="Github">
                    <p>test</p>
                    <p>test</p>
                    </ScrollView> */}
                    <ScrollView style={{maxWidth: '400px'}}  title="Slack">
                        <p>Please join our slack <a href="https://hackunt.slack.com">here</a></p>
                    </ScrollView>
                    <ScrollView style={{maxWidth: '400px'}}  title="Contact">
                        <p>hackunt.slack.com</p>
                        <p>unthackathon.com</p>
                        <p>officialhackunt@gmail.com</p>
                        <p>UNT Police: 940-565-2700</p>
                    </ScrollView>
                </FlexContainer>
            </FullHeightView>
        )
    }
}