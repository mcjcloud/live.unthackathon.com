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
            <FullHeightView style={{backgroundColor: Global.colors.secondary}}>
                <FlexContainer style={{height: '100%', padding: '10px'}}>
                    <ScrollView title="April 6th" panelHeight={'100%'} style={{backgroundColor: 'blue', height: (window.innerHeight - 80), width: '33%', minWidth: '300px'}}>
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
                    <ScrollView title="April 7th" panelHeight={'100%'} style={{backgroundColor: 'blue', height: (window.innerHeight - 80), width: '33%', minWidth: '300px'}}>
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
                    <ScrollView title="April 8th" panelHeight={'100%'} style={{backgroundColor: 'blue', height: (window.innerHeight - 80), width: '33%', minWidth: '300px'}}>
                        {Global.schedule.eighth.map(elem => {
                                return (
                                    <tr>
                                        <td valign="center">{elem.startTime}{elem.endTime && (' - ' + elem.endTime)}</td>
                                        <td valign="center">{elem.title}</td>
                                    </tr>
                                )
                            })}
                    </ScrollView>
                </FlexContainer>
            </FullHeightView>
        )
    }
}