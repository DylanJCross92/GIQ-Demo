import React, { Component } from 'react'

import { connect } from 'react-redux'
import { change } from 'redux-form'
import Step_2_2 from './Step-2.2.jsx'
import {dispatchSetPageId } from '../../reducers/session.jsx'

export class Step_2_2FormContainer extends Component {
    componentDidMount (){

        let pageId = '2.2'
        this.props.dispatchSetPageId('2.2')
        this.props.change('FORM', 'LastQuoteSectionPageId', '2.2')
        // this.props.change('Form', 'NumberOfClaims', this.props.NumberOfClaims)
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

        $(document).on("click", ".date-selector", function(){
            console.log('clicked')
            var datepickerID = $(this).closest("label").attr("for");
            console.log(datepickerID)
            $("#"+datepickerID).focus();
        });
    }

    render () {
        return ( <Step_2_2 {...this.props} />)
    }
}

const mapState = (state) => ({
    NumberOfClaims: state.defaultData.NumberOfClaims
})

const mapDispatch =  {
    change,
    dispatchSetPageId,

}

export default connect(mapState, mapDispatch)(Step_2_2FormContainer)