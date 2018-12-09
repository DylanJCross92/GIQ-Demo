import React, {Component} from 'react'
import { connect } from 'react-redux'

export  function UWBlock ({quoteId}){
    return (
        <div className="left">
            <div className="back-arrow-wrapper">
                <a className="back-arrow display-none"></a>
            </div>

            <div className="content-wrapper">

                <h1>Call us now at (800) 566-1518,</h1>
                <p className="hcolor">and provide your quote number: <span className="QuoteID">{quoteId.split('-')[1]}</span></p>

                <div className="body">Thank you for requesting a quote.
                    <br/>
                    Based on the information you provided we are unable to provide you with an online quote.</div>

            </div>

                <div className="forward-arrow-wrapper">
                <a className="forward-arrow display-none"></a>
                </div>


        </div>
    )
}




const mapState = (state) => {
    return {
        quoteId: state.session.quoteId
    }
}

export default connect(mapState)(UWBlock)