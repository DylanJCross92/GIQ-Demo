import React from 'react'
import { connect } from 'react-redux'

export function SessionError ({zipcode, quoteId}){
    return (
        <div className="left">
            <div className="back-arrow-wrapper">
                <a className="back-arrow display-none"></a>
            </div>

            <div className="content-wrapper">

                <h1>Your session has timed out.</h1>
            <div className="body">
                <p><a className="recall-href" href={(zipcode && quoteId )?
                    `recallquote.html?qdata=${btoa(`${zipcode}:${quoteId}`)}` : 'recallquote.html'}>Click here</a> to continue where you left off.
                For your safety, your secure browser session has timed out.
            </p>
            <p>
                Thank you for requesting a quote.
            </p>
            <div className="QuoteIDWrapper">Quote number:  <strong className="QuoteID">{quoteId}</strong></div>
                </div>

                </div>

                <div className="forward-arrow-wrapper">
                <a className="forward-arrow display-none"></a>
                </div>

                {/*<script>
                 if (getZipcode() && getQuoteID()){
                 var recallHref = "recallquote.html?qdata="+btoa(getZipcode()+":"+getQuoteID());
                 $(".recall-href").attr("href", recallHref);
                 }
             </script>*!/*/}
        </div>
    )
}

const mapState = (state) => {
    return {
        zipcode: state.session.zipcode,
        quoteId: state.session.quoteId
    }
}

export default connect(mapState)(SessionError)
