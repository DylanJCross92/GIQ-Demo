import React, {Component} from 'react'
import {connect} from 'react-redux'
import { goBack } from '../reducers/session.jsx'
import { dispatchNavWarning } from '../reducers/popups.jsx'

export function NavigationWarning ({goBack, dispatchNavWarning, location}) {
    return (
        <div className="overlay-wrapper">
            <div className="overlay-container">
                <div className="header">WARNING</div>

                <div className="body">

                    You have unsaved changes to this page that will be lost if you navigate away from this page.

                </div>

                <div className="button-wrapper">
                    <a className="button gray close-overlay-wrapper" onClick={e=>{
                        e.preventDefault()
                        dispatchNavWarning(false)
                    }}>Stay on this page</a>
                    <a className="button orange close-overlay-wrapper leave-page" style={{float:'right'}} onClick={e=>{
                        e.preventDefault()
                        goBack(location, true)
                        dispatchNavWarning(false)
                    }}>Leave this page</a>
                </div>

            </div>
        </div>
    )
}




const mapState = (state) => {
    return {

    }
}

const mapDispatch = {
    goBack,
    dispatchNavWarning
}

NavigationWarning = connect(mapState, mapDispatch)(NavigationWarning)

export default class NavigationWarningContainer extends Component {
    // componentDidMount(){
    //     $(window).trigger('resize')
    // }

    render (){
        return <NavigationWarning {...this.props} />
    }
}