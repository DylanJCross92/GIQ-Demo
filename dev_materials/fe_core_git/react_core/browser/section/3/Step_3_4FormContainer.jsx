import React, { Component } from 'react'

import { connect } from 'react-redux'
import { change } from 'redux-form'
import Step_3_4 from './Step-3.4.jsx'
import {dispatchSetPageId } from '../../reducers/session.jsx'

export class Step_3_4FormContainer extends Component {
    componentDidMount (){

        let pageId = '3.4'
        this.props.dispatchSetPageId('3.4')
        this.props.change('FORM', 'LastQuoteSectionPageId', '3.4')

        $('.navigation > a').each(function() {
            var className = $(this).attr("class");
            var classNumber = className.match(/([0-9]+)/)[0];

            classNumber <= pageId ? $(this).addClass("current").unbind('click', false) : $(this).removeClass("current").bind('click', false);
        })

        const gaScript = document.createElement('script')
        const mixpanelScript = document.createElement('script')
        gaScript.src = "../../js/analytics.js"
        mixpanelScript.src = "../../js/mixpanel.js"
        document.getElementsByClassName('content-wrapper')[0].appendChild(gaScript)
        document.getElementsByClassName('content-wrapper')[0].appendChild(mixpanelScript)

    }

    render () {
        return ( <Step_3_4 {...this.props} />)
    }
}

const mapState = (state) => ({

})

const mapDispatch =  {
    change,
    dispatchSetPageId,

}

export default connect(mapState, mapDispatch)(Step_3_4FormContainer)