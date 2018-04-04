import './style/Schedule.css'
import Global from '../Global.json'

import React, { Component } from 'react'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import ScrollView from '../Components/ScrollView'
import CardView from '../Components/CardView'

export default class Schedule extends Component {
    /*render() {
        return (
            <div className="Schedule" style={{backgroundColor: Global.colors.secondary}}>
                <FullHeightView>
                    <FlexContainer>
                        <ScrollView title="April 6th" style={{width: '30%', height: height + 'px', marginTop: mTop + 'px', backgroundColor: Global.colors.tertiary}}>
                            {Global.schedule.sixth.map(elem => {
                                return (
                                    <p>{elem.title}</p>
                                )
                            })}
                        </ScrollView>
                        <ScrollView title="April 7th" style={{width: '30%', height: height + 'px', marginTop: mTop + 'px', backgroundColor: Global.colors.tertiary}}>
                            {['test1', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5'].map(str => {
                                return <h3>{str}</h3>
                            })}
                        </ScrollView>
                        <ScrollView title="April 8th" style={{width: '30%', height: height + 'px', marginTop: mTop + 'px', backgroundColor: Global.colors.tertiary}}>
                            {['test1', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5', 'test2', 'test3', 'test4', 'test5'].map(str => {
                                return <h3>{str}</h3>
                            })}
                        </ScrollView>
                    </FlexContainer>
                </FullHeightView>
            </div>
        )
    }*/
    render() {
        return (
            <FullHeightView style={{backgroundColor: Global.colors.secondary}}>
                <FlexContainer style={{height: '100%', padding: '10px'}}>
                    <div className="row section">
                        <ScrollView title="April 6th" style={{backgroundColor: 'blue', height: '100%'}}>
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
                        <ScrollView title="April 7th" style={{backgroundColor: 'blue', height: '100%'}}>
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
                        <ScrollView title="April 8th" style={{backgroundColor: 'blue', height: '100%'}}>
                            {Global.schedule.eighth.map(elem => {
                                    return (
                                        <tr>
                                            <td valign="center">{elem.startTime}{elem.endTime && (' - ' + elem.endTime)}</td>
                                            <td valign="center">{elem.title}</td>
                                        </tr>
                                    )
                                })}
                        </ScrollView>
                    </div>
                </FlexContainer>
            </FullHeightView>
        )
    }
}