import React, {Component} from 'react'
import {connect} from 'react-redux'

export function Loading ({message}) {
    return (
        <div className="overlay-wrapper">
            <div className="overlay-container square">
                <div className="body label">{message ? message : <span>Loading...</span>}</div>
                <img className="loading-icon" src="assets/spinner.gif" />
            </div>
        </div>
    )
}


export default class LoadingContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <Loading {...this.props} />
    }
}

