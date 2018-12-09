import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { Link } from 'react-router-dom'

const ForwardArrow = ({ dispatch, formName, nextPage, submitting, isValidating }) => (
    <div className ="forward-arrow-wrapper">
        <div className="loader"></div>
        <button type="submit" disabled={submitting || isValidating} className="forward-arrow" style={{border:'none', backgroundColor:'transparent'}}></button>
    </div>
)

export default connect()(ForwardArrow)