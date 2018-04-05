import './style/Schedule.css'
import Global from '../Global.json'

import React, { Component } from 'react'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import ScrollView from '../Components/ScrollView'
import CardView from '../Components/CardView'

export default class Schedule extends Component {
    /*
    render() {
        return (
            <FullHeightView>
                <FlexContainer style={{height: '100%', padding: '10px'}}>
                    <ScrollView title="April 6th" panelHeight={'100%'} style={{height: (window.innerHeight - 80), width: '30%', minWidth: '300px', fontSize: '12pt'}}>
                        <table className="ScrollView-Section" style={{backgroundColor: 'inherit'}}>
                            {Global.schedule.sixth.map(elem => {
                                return (
                                    <tr>
                                        <td valign="center">{elem.startTime}{elem.endTime && (' - ' + elem.endTime)}</td>
                                        <td valign="center">{elem.title}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </ScrollView>
                    <ScrollView title="April 7th" panelHeight={'100%'} style={{height: (window.innerHeight - 80), width: '30%', minWidth: '300px', fontSize: '12pt'}}>
                        <table className="ScrollView-Section" style={{backgroundColor: 'inherit'}}>
                            {Global.schedule.seventh.map(elem => {
                                return (
                                    <tr>
                                        <td valign="center">{elem.startTime}{elem.endTime && (' - ' + elem.endTime)}</td>
                                        <td valign="center">{elem.title}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </ScrollView>
                    <ScrollView title="April 8th" panelHeight={'100%'} style={{height: (window.innerHeight - 80), width: '30%', minWidth: '300px', fontSize: '12pt'}}>
                        <table className="ScrollView-Section" style={{backgroundColor: 'inherit'}}>
                            {Global.schedule.eighth.map(elem => {
                                return (
                                    <tr>
                                        <td valign="center">{elem.startTime}{elem.endTime && (' - ' + elem.endTime)}</td>
                                        <td valign="center">{elem.title}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </ScrollView>
                </FlexContainer>
            </FullHeightView>
        )
    }
    */
   render() {
       return (
            <FullHeightView>
                <FlexContainer>
                <ScrollView scrollViewContentBG={'#bdbdbd'} className="grey lighten-1" panelHeight={'100%'} style={{width: '90%', minWidth: '300px', fontSize: '12pt', backgroundColor: '#bdbdbd'}}>
                        <table className="ScrollView-Section light-green darken-3" style={{backgroundColor: 'inherit', width: '100%'}}>
                            <tr className="white">
                                <td>April 6th</td>
                            </tr>
                            <tr>
                                <th style={{width: '10%'}}>Start Time</th>
                                <th style={{width: '10%'}}>End Time</th>
                                <th style={{width: '40%'}}>Event</th>
                                <th style={{width: '40%'}}>Location</th>
                            </tr>
                            {Global.schedule.sixth.map(elem => {
                                return (
                                    <tr className="Schedule-row">
                                        <td style={{width: '10%'}}>{elem.startTime}</td>
                                        <td style={{width: '10%'}}>{elem.endTime || 'NA'}</td>
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
                                <th style={{width: '10%'}}>End Time</th>
                                <th style={{width: '40%'}}>Event</th>
                                <th style={{width: '40%'}}>Location</th>
                            </tr>
                            {Global.schedule.seventh.map(elem => {
                                return (
                                    <tr className="Schedule-row">
                                        <td style={{width: '10%'}}>{elem.startTime}</td>
                                        <td style={{width: '10%'}}>{elem.endTime || 'NA'}</td>
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
                                <th style={{width: '10%'}}>End Time</th>
                                <th style={{width: '40%'}}>Event</th>
                                <th style={{width: '40%'}}>Location</th>
                            </tr>
                            {Global.schedule.eighth.map(elem => { 
                                return (
                                    <tr className="Schedule-row">
                                        <td style={{width: '10%'}}>{elem.startTime}</td>
                                        <td style={{width: '10%'}}>{elem.endTime || 'NA'}</td>
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