import Global from '../Global.json'
import './style/Home.css'
import map from '../res/floor1.png'
import parking from '../res/parking.png'

import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import ScrollView from '../Components/ScrollView'
import CardView from '../Components/CardView'

export default class Home extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <FullHeightView>
                <FlexContainer style={{height: '100%'}}>
                    <div className="twitter" style={{maxWidth: '400px'}}><Timeline
                        dataSource={{
                            sourceType: 'widget',
                            widgetId: '978024429673476096'
                        }}
                        options={{
                            height: 400
                        }}
                        onLoad={() => console.log('Timeline is loaded!')}
                    /></div>
                    <ScrollView style={{maxWidth: '400px'}}  title="Important Info">
                        <p>Grab a parking pass from a volunteer at the Campus Gate Booth or the Check-In booth.</p>
                        <p>Park in lot 93 to avoid being towed</p>
                        <p>Building doors will close Friday at Midnight. You will not be let back in without your Event Badge or Student ID.</p>
                        <p>Discovery Park gates will be closing 12:00AM-6:00AM every day. If you need to leave, we recommend you do it before or after those times. UNTPD can let you out in the case of an emergency.</p>
                        <p>Unfortunately, no blankets or pillows will be allowed in the building</p>
                        <p>Join our Slack and check out our discord!</p>
                        <FlexContainer style={{width: '100%'}}>
                            <a style={{textAlign: 'center', margin: '20px', color: 'white'}} class="waves-effect waves-light light-green darken-3 btn" href="https://communityinviter.com/apps/hackunt/hackunt">Slack</a>
                            <a style={{textAlign: 'center', margin: '20px', color: 'white'}} class="waves-effect waves-light light-green darken-3 btn" href="https://hackunt2018.devpost.com">DevPost</a>
                        </FlexContainer>
                    </ScrollView>
                    <CardView title="Event Map" img={map} className="twitter" style={{padding: '0', maxWidth: '400px'}}>
                        {/* <img style={{width: '100%'}} src={map} /> */}
                    </CardView>
                    <CardView title="Parking Map" img={parking} className="twitter" style={{padding: '0', maxWidth: '400px'}}>
                        <p>Park in lot 93 to avoid being towed</p>
                    </CardView>
                </FlexContainer>
            </FullHeightView>
        )
    }
    
}