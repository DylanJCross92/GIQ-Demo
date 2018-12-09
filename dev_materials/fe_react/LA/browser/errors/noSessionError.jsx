import React from 'react'

export default function NoSessionError (){
    return (
        <div className="left">
            <div className="back-arrow-wrapper">
                <a className="back-arrow display-none"></a>
            </div>

            <div className="content-wrapper">

                <h1>Thank you for requesting a quote.</h1>
                <div className="body">The server was unable to complete your request. Please click <a className="recall-href" href="recallquote.html">here</a> to try again. If the issue persists, please try again later.</div>

            </div>

            <div className="forward-arrow-wrapper">
                <a className="forward-arrow display-none"></a>
            </div>
        </div>
    )
}