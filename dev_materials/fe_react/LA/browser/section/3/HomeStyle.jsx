import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Fields, reduxForm } from 'redux-form'

import { loadHomeStyle } from '../../utils/utils.jsx'
import PropertyInfo from '../../frontendOptions/propertyInfo.js'
import { dispatchSelectedHomeStyle, dispatchHomeStylePop } from '../../reducers/popups.jsx'
import store from '../../store.jsx'




function HomeStyle ({HomeStyleValue, change, storiesValue, dispatchSelectedHomeStyle, dispatchHomeStylePop}) {
    return (
        <div className="overlay-wrapper" style={{display:'block'}}>
            <div className="overlay-container wide">

                <h2>Select the style that best matches the home you are insuring.</h2>
                <div className="sub-header">Place cursor on image to see descriptions for each home style.</div>





                <ul className="selection-list v-align-bot home-style">
                    {loadHomeStyle(PropertyInfo.HomeStyle, change, HomeStyleValue, storiesValue, dispatchSelectedHomeStyle)}
                </ul>

                <div className="button-wrapper">
                    <a className="button gray " onClick={(event)=>{
                        event.preventDefault()
                        dispatchHomeStylePop(false)
                    }}>Cancel</a>
                    {/*<a className="button orange" onClick={(event)=>{*/}
                        {/*event.preventDefault()*/}
                        {/*dispatchHomeStylePop(false)*/}
                    {/*}} data-for="S3_StructureType" data-selection-type="StructureType">OK</a>*/}
                </div>

            </div>
        </div>
    )
}




const mapState = (state) => ({

})

const mapDispatch = {dispatchSelectedHomeStyle, dispatchHomeStylePop}

HomeStyle = connect(mapState, mapDispatch)(HomeStyle)

export default class HomeStyleContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <HomeStyle {...this.props} />
    }
}