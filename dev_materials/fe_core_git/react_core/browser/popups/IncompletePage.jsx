import React, {Component} from 'react'
import {connect} from 'react-redux'
import { saveQuote } from '../reducers/defaultData.jsx'
import { dispatchIncPage } from '../reducers/popups.jsx'
import PopupWrapper from './PopupWrapper.jsx'
import { submit, reduxForm } from 'redux-form'




function IncompletePage ({dispatchIncPage, saveQuote}) {
    return (
        <div className="overlay-wrapper incomplete-page">
            <div className="overlay-container">
                <div className="header">WARNING!</div>

                <div className="body">
                    Only completed pages may be saved.  If you wish to save the data on this page, click the <strong>"Cancel"</strong> button now, complete the page, and click the <strong>"Save Your Quote"</strong> button again.  Otherwise, click the <strong>"Save"</strong> button below to save your quote data up to and including the previous page.
                </div>

                <div className="button-wrapper">
                    <a className="button gray  quit" onClick={e => {
                        e.preventDefault()
                        dispatchIncPage(false)
                    }}>Cancel</a>
                    <a className="button orange  empty-save" onClick={(e)=>{
                        e.preventDefault()
                        saveQuote()
                    }} style={{float:'right'}}>Save</a>
                </div>

            </div>
        </div>
    )
}






const mapState = (state) => ({
    verAddress: state.session.verAddress,
    addresses: state.session.addresses,
    enteredAddress: state.session.enteredAddress
})

const mapDispatch = {saveQuote, dispatchIncPage}

export default connect(mapState, mapDispatch)(IncompletePage)

