import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { Link } from 'react-router-dom'
import history from '../../history.js'
import {goBack} from '../../reducers/session.jsx'

const BackArrow = ({goBack, location, pristine }) => (
    <div className ="back-arrow-wrapper">
        <div className="loader"></div>
        <a className="back-arrow" style={{border:'none', backgroundColor:'transparent'}} onClick={(e)=>{
            e.preventDefault()
            goBack(location, pristine)
        }
        }></a>
    </div>
)

const mapState = (state) =>{
    return {}
}

const mapDispatch = {
    goBack
}

export default connect(mapState, mapDispatch)(BackArrow)