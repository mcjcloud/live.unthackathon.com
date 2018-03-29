import './style/Schedule.css'
import Global from '../Global.json'

import React, { Component } from 'react'

import FullHeightView from '../Components/FullHeightView'
import FlexContainer from '../Components/FlexContainer'
import ScrollView from '../Components/ScrollView'

export default class Schedule extends Component {
    render() {
        let divHeight = (window.innerHeight - Global.navbarHeight)
        let height = 0.9 * divHeight
        let mTop = divHeight * 0.05
        return (
            <div className="Schedule" style={{backgroundColor: Global.colors.secondary}}>
                <FullHeightView>
                    <FlexContainer>
                        <ScrollView title="April 6th" style={{width: '30%', height: height + 'px', marginTop: mTop + 'px', backgroundColor: Global.colors.tertiary}}>
                            {Global.schedule.sixth.map(elem => {
                                return (
                                    <h2>{elem.title}</h2>
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
    }
}