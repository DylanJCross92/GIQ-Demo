import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Fields, reduxForm } from 'redux-form'

import { loadRoofType, loadHomeInfo } from '../../utils/utils.jsx'
import PropertyInfo from '../../frontendOptions/propertyInfo.js'
import { dispatchSelectedRoofType, dispatchRoofTypePop } from '../../reducers/popups.jsx'
import store from '../../store.jsx'




function RoofType ({RoofTypeValue, change, dispatchSelectedRoofType, dispatchRoofTypePop}) {
    return (
        <div className="overlay-wrapper" style={{display:'block'}}>
            <div className="overlay-container wide">

                <h2>If your roof includes more than one type of material, select the type that is most common.</h2>
                <div className="sub-header">Place cursor on image to see descriptions for each roof material.</div>




                <ul className="selection-list roof-type">
                    {loadHomeInfo(PropertyInfo.RoofType, change, RoofTypeValue, dispatchSelectedRoofType, 'RoofCoveringType')}
                </ul>

                <div className="button-wrapper">
                    <a className="button gray " onClick={(event)=>{
                        event.preventDefault()
                        dispatchRoofTypePop(false)
                    }}>Cancel</a>
                    {/*<a className="button orange" onClick={(event)=>{*/}
                        {/*event.preventDefault()*/}
                        {/*dispatchRoofTypePop(false)*/}
                    {/*}} data-for="S3_RoofType" data-selection-type="RoofType">OK</a>*/}
                </div>

            </div>
        </div>
        )
}




const mapState = (state) => ({

})

const mapDispatch = {dispatchSelectedRoofType, dispatchRoofTypePop}

RoofType = connect(mapState, mapDispatch)(RoofType)

export default class RoofTypeContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <RoofType {...this.props} />
    }
}