import React from 'react'
import {connect} from 'react-redux'
import {dispatchOnLoadPopup} from '../../reducers/popups.jsx'

export function Landing ({dispatchOnLoadPopup}) {
    return (
        <div className="wrapper overlay">
            <div className="container">
                <div className="inner-wrapper">
                    <a onClick={(event) => {
                        event.preventDefault()
                        dispatchOnLoadPopup(false)

                    }}><img className="close close-popup" src="assets/close-x.png" /></a>
                    <div className="header">important information</div>
                    <div className="body">
                        You are connecting to the Federated National Insurance Company for your insurance quote. If you purchase a home policy from Federated National, the policy will be serviced by GEICO Insurance Agency, Inc. and will be underwritten by Federated National. The Federated National Insurance Company <a href="http://www.fednat.com/home/privacy-policy" target="_blank">Privacy Policy</a>  will apply.
                    </div>

                    <a className="button orange orange-button close-popup" onClick={(event) => {
                        event.preventDefault()
                        dispatchOnLoadPopup(false)

                    }} >OK</a>

                </div>
            </div>
        </div>
    )
}

const mapState = () => ({})

const mapDispatch = {dispatchOnLoadPopup}

export default connect(mapState, mapDispatch)(Landing)