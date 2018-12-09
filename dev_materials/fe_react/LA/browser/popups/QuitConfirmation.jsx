import React, {Component} from 'react'
import {connect} from 'react-redux'
import { cancelQuote } from '../reducers/defaultData.jsx'
import { dispatchIsCanceling } from '../reducers/popups.jsx'
import { getQuoteIdCookie } from '../utils/utils.jsx'






function QuitConfirmation ({dispatchIsCanceling, cancelQuote}) {
    return (
        <div className="overlay-wrapper quit-quote">
            <div className="overlay-container">
                <a onClick={e=>{
                    e.preventDefault()
                    dispatchIsCanceling(false)

                }}><div className="close-x"></div></a>                <div className="header">WARNING!</div>

                <div className="body">
                    Are you sure you want to cancel? All unsaved data will be lost.
                <p></p>
                You will need your quote number <strong><span className="QuoteID">{getQuoteIdCookie(Product_State).split('-')[1]}</span></strong> and zip code to restore this quote.
            </div>

            <div className="button-wrapper">
                <a className="button gray quit" style={{float:'left'}} onClick={e=>{
                    e.preventDefault()
                    dispatchIsCanceling(false)

                }}>Cancel</a>
                <a className="button orange continue" style={{float:'right'}} onClick={e => {
                    e.preventDefault()
                    cancelQuote()
                }} >Ok</a>
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

const mapDispatch = { dispatchIsCanceling, cancelQuote}

export default connect(mapState, mapDispatch)(QuitConfirmation)

