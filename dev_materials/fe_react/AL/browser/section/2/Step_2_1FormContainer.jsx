import React, { Component } from 'react'

import { connect } from 'react-redux'
import { change } from 'redux-form'
import Step_2_1 from './Step-2.1.jsx'
import {dispatchSetPageId } from '../../reducers/session.jsx'

export class Step_2_1FormContainer extends Component {
    componentDidMount (){
        let pageId = '2.1'
        this.props.dispatchSetPageId('2.1')
        this.props.change('FORM', 'LastQuoteSectionPageId', '2.1')


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
        return ( <Step_2_1 {...this.props} />)
    }
}

const mapState = () => ({})

const mapDispatch =  {
    change,
    dispatchSetPageId
}

export default connect(mapState, mapDispatch)(Step_2_1FormContainer)