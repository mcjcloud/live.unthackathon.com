import './style/Prizes.css'

import React, { Component } from 'react'

import ScrollView from '../Components/ScrollView'
import FlexContainer from '../Components/FlexContainer'
import FullHeightView from '../Components/FullHeightView'

import Global from '../Global.json'

export default class Prizes extends Component {
    render() {
        return (
            <div className="Prizes">
                <FlexContainer style={{width: '100%', marginTop: '10px'}}>
                    <ScrollView title="First Place" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>1st: $500 of Digital Ocean credit for each team member</p>
                        <p>2nd: $250 of Digital Ocean credit for each team member</p>
                        <p>3rd: $125 of Digital Ocean credit for each team member</p>
                    </ScrollView>
                    <ScrollView title="Second Place" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>1st: $500 of Digital Ocean credit for each team member</p>
                        <p>2nd: $250 of Digital Ocean credit for each team member</p>
                        <p>3rd: $125 of Digital Ocean credit for each team member</p>
                    </ScrollView>
                    <ScrollView title="Third Place" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>1st: $500 of Digital Ocean credit for each team member</p>
                        <p>2nd: $250 of Digital Ocean credit for each team member</p>
                        <p>3rd: $125 of Digital Ocean credit for each team member</p>
                    </ScrollView>
                    <ScrollView title=".TECH Domains" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>.Tech Domains is giving a free .tech domain to every particpant (a $50 value)!</p>
                        <p>They are also giving away a $200 Amazon Gift Voucher to the person with the best website on a .tech domain!</p>
                    </ScrollView>
                    <ScrollView title="JCPenney" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>$200 Visa gift card</p>
                    </ScrollView>
                    <ScrollView title="Wolfram" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The Wolfram Award is granted to the top 15 teams, for a maximum of 75 winners. Everyone on the team will receive a year of Wolfram|One Personal Edition plus a one year subscription to Wolfram|Alpha Pro.</p>
                    </ScrollView>
                </FlexContainer>
            </div>
        )
    }
}