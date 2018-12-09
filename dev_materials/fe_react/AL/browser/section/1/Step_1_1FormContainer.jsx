import React, { Component } from 'react'
import store from '../../store.jsx'
import { dispatchSetDataFields, setAddress } from '../../reducers/defaultData.jsx'
import { checkZipcode, setPageId } from '../../reducers/session.jsx'
import { initialize } from 'redux-form'

import { connect } from 'react-redux'
import { change } from 'redux-form'
import Step_1_1Form from './Step-1.1.jsx'

export class Step1_1FormContainer extends Component {

    componentDidMount(){
            let pageId = '1.1'
           store.dispatch(setPageId(this.props.location.pathname.split('=')[1]))
            this.props.change('FORM','LastQuoteSectionPageId', '1.1')
        // if(this.props.zipcode) {
        //     if (typeof google != "undefined") {
        //         let zip = this.props.zipcode ? this.props.zipcode : false;
        //         let lat;
        //         let lng;
        //         let geocoder = new google.maps.Geocoder();
        //         let acceptedState = this.props.Product_State;
        //         geocoder.geocode({ 'address': zip }, function (results, status) {
        //             if (status == google.maps.GeocoderStatus.OK) {
        //                 geocoder.geocode({'latLng': results[0].geometry.location}, function(results, status) {
        //                     if (status == google.maps.GeocoderStatus.OK) {
        //                         if (results[1]) {
        //                             let PropertyState = getState(results);
        //                             let PropertyCity = getCity(results);
        //
        //                             let defaultAddress = {
        //                                 PropertyCity,
        //                                 PropertyState,
        //                                 PropertyZipCode: zip
        //                             }
        //                             store.dispatch(dispatchSetDataFields(defaultAddress))
        //
        //                         }
        //
        //
        //                     }
        //                 })
        //             }
        //         })
        //     }
        // }
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
        return ( <Step_1_1Form {...this.props} />)
    }


}

const mapState = (state) => {
    return {
        zipcode: state.session.zipcode
    }
}

export default connect(mapState, {change})(Step1_1FormContainer)