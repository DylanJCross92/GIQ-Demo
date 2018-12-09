import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Fields, reduxForm } from 'redux-form'

import { loadHomeInfo } from '../../utils/utils.jsx'
import PropertyInfo from '../../frontendOptions/propertyInfo.js'
import { dispatchSelectedRoofStyle, dispatchRoofStylePop } from '../../reducers/popups.jsx'
import store from '../../store.jsx'




function RoofStyle ({RoofStyleValue, change, dispatchSelectedRoofStyle, dispatchRoofStylePop}) {
    return (
        <div className="overlay-wrapper" style={{display:'block'}}>
            <div className="overlay-container wide">

                <h2>Choose the most appropriate shape of your roof from the options provided.</h2>

                <ul className="selection-list roof-type v-align-bot">
                    {loadHomeInfo(PropertyInfo.RoofShape, change, RoofStyleValue, dispatchSelectedRoofStyle, 'RoofGeometryType')}
                </ul>

                <div className="button-wrapper">
                    <a className="button gray " onClick={(event)=>{
                        event.preventDefault()
                        dispatchRoofStylePop(false)
                    }}>Cancel</a>
                    {/*<a className="button orange" onClick={(event)=>{*/}
                        {/*event.preventDefault()*/}
                        {/*dispatchRoofStylePop(false)*/}
                    {/*}} data-for="S3_RoofShape" data-selection-type="RoofShape">OK</a>*/}
                </div>

            </div>
        </div>


        )
}




const mapState = (state) => ({

})

const mapDispatch = {dispatchSelectedRoofStyle, dispatchRoofStylePop}

RoofStyle = connect(mapState, mapDispatch)(RoofStyle)

export default class RoofStyleContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <RoofStyle {...this.props} />
    }
}