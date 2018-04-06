import './style/Schedule.css'
import Global from '../Global.json'

import React, { Component } from 'react'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import ScrollView from '../Components/ScrollView'
import CardView from '../Components/CardView'

export default class Schedule extends Component {
   render() {
       return (
            <FullHeightView>
                <FlexContainer>
                <ScrollView isGreen={true} scrollViewContentBG={'##558b2f'} className="grey lighten-1" panelHeight={'100%'} style={{width: '90%', minWidth: '300px', fontSize: '12pt', backgroundColor: '#bdbdbd'}}>
                        <table className="ScrollView-Section light-green darken-3" style={{backgroundColor: 'inherit', width: '100%'}}>
                            <tr className="white">
                                <td>April 6th</td>
                            </tr>
                            <tr>
                                <th style={{width: '10%'}}>Start Time</th>
                                <th style={{width: '40%'}}>Event</th>
                                <th style={{width: '40%'}}>Location</th>
                            </tr>
                            {Global.schedule.sixth.map(elem => {
                                return (
                                    <tr className="Schedule-row">
                                        <td style={{width: '10%'}}>{elem.startTime}</td>
                                        <td style={{width: '40%'}}>{elem.title}</td>
                                        <td style={{width: '40%'}}>{elem.location}</td>
                                    </tr>
                                )
                            })}
                        </table>
                        <br /><br /><br />
                        {/* April 7th */}
                        <table className="ScrollView-Section  light-green darken-3" style={{backgroundColor: 'inherit', width: '100%'}}>
                            <tr className="white">
                                <td>April 7th</td>
                            </tr>
                            <tr>
                                <th style={{width: '10%'}}>Start Time</th>
                                <th style={{width: '40%'}}>Event</th>
                                <th style={{width: '40%'}}>Location</th>
                            </tr>
                            {Global.schedule.seventh.map(elem => {
                                return (
                                    <tr className="Schedule-row">
                                        <td style={{width: '10%'}}>{elem.startTime}</td>
                                        <td style={{width: '40%'}}>{elem.title}</td>
                                        <td style={{width: '40%'}}>{elem.location}</td>
                                    </tr>
                                )
                            })}
                        </table>
                        <br /><br /><br />
                        {/* April 8th */}
                        <table className="ScrollView-Section  light-green darken-3" style={{backgroundColor: 'inherit', width: '100%'}}>
                            <tr className="white">
                                <td>April 8th</td>
                            </tr>
                            <tr>
                                <th style={{width: '10%'}}>Start Time</th>
                                <th style={{width: '40%'}}>Event</th>
                                <th style={{width: '40%'}}>Location</th>
                            </tr>
                            {Global.schedule.eighth.map(elem => { 
                                return (
                                    <tr className="Schedule-row">
                                        <td style={{width: '10%'}}>{elem.startTime}</td>
                                        <td style={{width: '40%'}}>{elem.title}</td>
                                        <td style={{width: '40%'}}>{elem.location}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </ScrollView>
                    </FlexContainer>
            </FullHeightView>
       )
   }
}