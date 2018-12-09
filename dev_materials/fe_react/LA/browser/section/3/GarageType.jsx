import React, {Component } from 'react'
import {connect} from 'react-redux'
import { Fields, reduxForm } from 'redux-form'

import { loadHomeInfo } from '../../utils/utils.jsx'
import PropertyInfo from '../../frontendOptions/propertyInfo.js'
import { dispatchSelectedGarageType, dispatchGarageTypePop } from '../../reducers/popups.jsx'
import store from '../../store.jsx'




function GarageType ({GarageTypeValue, change, dispatchSelectedGarageType, dispatchGarageTypePop}) {
    return (
        <div className="overlay-wrapper" style={{display:'block'}}>
            <div className="overlay-container wide">

                <h2>Select the image the best matches the property you are insuring.</h2>



                <ul className="selection-list roof-type v-align-bot">
                    {loadHomeInfo(PropertyInfo.GarageType, change, GarageTypeValue, dispatchSelectedGarageType, 'GarageType')}
                </ul>

                <div className="button-wrapper">
                    <a className="button gray " onClick={(event)=>{
                        event.preventDefault()
                        dispatchGarageTypePop(false)
                    }}>Cancel</a>
                    {/*<a className="button orange" onClick={(event)=>{*/}
                        {/*event.preventDefault()*/}
                        {/*dispatchGarageTypePop(false)*/}
                    {/*}} data-for="S3_GarageType" data-selection-type="GarageType">OK</a>*/}
                </div>

            </div>
        </div>
        )
}





const mapState = (state) => ({

})

const mapDispatch = {dispatchSelectedGarageType, dispatchGarageTypePop}

GarageType = connect(mapState, mapDispatch)(GarageType)

export default class GarageTypeContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <GarageType {...this.props} />
    }
}