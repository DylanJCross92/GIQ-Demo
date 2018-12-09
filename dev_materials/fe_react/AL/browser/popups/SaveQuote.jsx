import React, {Component} from 'react'
import {connect} from 'react-redux'
import { saveQuote } from '../reducers/defaultData.jsx'
import { dispatchIncPage, dispatchThankYou } from '../reducers/popups.jsx'
import PopupWrapper from './PopupWrapper.jsx'
import { submit, reduxForm } from 'redux-form'
import { getQuoteIdCookie } from '../utils/utils.jsx'




function SaveQuote ({quoteId, Product_State, dispatchThankYou}) {


    let host = window.location.host
    let pathname = window.location.pathname
    let recallUrl = window.location.pathname.search('/giq') > -1 ? `https://${window.location.hostname}/giq/recallquote.html` : `https://${window.location.hostname}/quotes/recallquote.html`


    return (
        <div className="overlay-wrapper save-quote">
            <div className="overlay-container">
                <a onClick={e=>{
                    e.preventDefault()
                    dispatchThankYou(false)

                }}><div className="close-x"></div></a>
                <div className="header">THANK YOU</div>
                {/*<?php*/}

                {/*$recallURL = strpos($_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"], '/giq') !== false ? "http://".$_SERVER["SERVER_NAME"]."/giq/recallquote.html" : "http://".$_SERVER["SERVER_NAME"]."/quotes/recallquote.html";*/}

                {/*?>*/}
                <div className="body">
                    Your quote has been saved. To retrieve your quote, please visit <a href={recallUrl}>{recallUrl}</a>. You will need your quote number <strong><span className="QuoteID">{getQuoteIdCookie(Product_State).split('-')[1]}</span></strong> and zip code.
                </div>



            </div>
        </div>
    )
}






const mapState = (state) => ({
    quoteId: state.session.quoteId,
    Product_State: state.config.Product_State
})

const mapDispatch = {dispatchThankYou}

export default connect(mapState, mapDispatch)(SaveQuote)

