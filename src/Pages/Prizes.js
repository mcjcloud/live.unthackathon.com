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
                        <p>The First Place team will be awarded up to $2500 in Digital Ocean credit, $500 cash from Tyler Technology, one year of Wolfram | One Personal Edition, one year of Wolfram | Alpha Pro ($400 in value).</p>
                    </ScrollView>
                    <ScrollView title="Second Place" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The Second Place team will be awarded up to $1250 in Digital Ocean credit.</p>
                    </ScrollView>
                    <ScrollView title="Third Place" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The Third Place team will be awarded up to $625 in Digital Ocean credit.</p>
                    </ScrollView>
                    <ScrollView title=".TECH Domains" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>.Tech Domains is giving a free .tech domain to every particpant (a $50 value)!</p>
                        <p>They are also giving away a $200 Amazon Gift Voucher to the person with the best website on a .tech domain!</p>
                    </ScrollView>
                    <ScrollView title="Samsung Internet"style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}> 
                        <p>Samsung Internet is offering a $500 Amazon Gift Card and Samsung Gift Packs for the team with the best project made using WebXR.</p>
                    </ScrollView>
                    <ScrollView title="JCPenney" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The winning team will receive a $250 VISA gift card for creating the "Store of the Future." Teams can select from the following challenges:</p>
                        <p>1. Interactive Store Map with the ability to: create a digital display of the store, departments, products, and customer location, track where you are in the store at any time (e.g. to display coupons specific to that department), locate a product anywhere in the store, and request assistance from a Store Associate (send location to Store associate)</p>
                        <p>2. A Sentiment Analysis application with the ability to understand the customers feelings at any time. This will allow associates to interact appropriately with the customer. (i.e. Are they angry, upset, happy, etc.)</p>
                        <p>3. A Predictive Customer Analytics application with the ability analyze a customer, predict their shopping patterns, and market to the customer. (i.e. Current patterns and previous patterns)</p>
                        <p>4. An H/V Associate that must have the ability to include Natural Language, speech-to-text, text-to-speech and understand the 'intent' of the customers communications and actions</p>
                        <p>5. An application with the ability to automatically size a customer and offer products based on their sizes.</p>
                    </ScrollView>
                    <ScrollView title="Wolfram" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The Wolfram Award is granted to the top 15 teams, for a maximum of 75 winners. Everyone on the team will receive a year of Wolfram|One Personal Edition plus a one year subscription to Wolfram|Alpha Pro.</p>
                    </ScrollView>
                    <ScrollView title="Chiloso" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The winner will recieve a $100 VIP Chiloso Gift Card for the best "Chiloso Serves Alcohol" Social Media post.</p>
                    </ScrollView>
                    <ScrollView title="Standard User" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The winner will receive a $500 scholarship for submitting the best Security Related application.</p>
                    </ScrollView>
                    <ScrollView title="DAIR" style={{marginTop: '10px', marginBottom: '10px', maxWidth: '400px'}}>
                        <p>The winner will receive $500 for the best use of disparate or analytic data to help inform data-based decision making on a real world problem/challenge.</p>
                    </ScrollView>
                </FlexContainer>
            </div>
        )
    }
}