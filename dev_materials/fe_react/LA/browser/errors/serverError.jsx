import React from 'react'
import { connect } from 'react-redux'

export function ServerError ({zipcode, quoteId}){
    return (
        <div className="left">
            <div className="back-arrow-wrapper">
                <a className="back-arrow display-none"></a>
            </div>

            <div className="content-wrapper">

                <h1><a className="not-bold" href={(zipcode && quoteId )?
                    `recallquote.html?qdata=${btoa(`${zipcode}:${quoteId}`)}` : 'recallquote.html'}>Click here</a> to continue where you left off.</h1>
                <div className="body">
                    <p>It seems there was an error with the server. If the issue persists please try again later.</p>
                    <p className="h1-match"> Or call <strong>(800) 566-1518</strong> to finish your quote. Please provide the below quote number.</p>
                    <p className="QuoteIDWrapper">Quote number:  <strong className="QuoteID">{quoteId}</strong></p>
                    <p><strong>Thank you for requesting a quote.</strong></p>
                </div>
            </div>

            <div className="forward-arrow-wrapper">
                 <a className="forward-arrow display-none"></a>
            </div>


        </div>
    )
}





const mapState = (state) => {
    return {
        zipcode: state.session.zipcode,
        quoteId: state.session.quoteId
    }
}

export default connect(mapState)(ServerError)
