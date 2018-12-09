import { connect } from 'react-redux'
import React, { Component } from 'react'
import store from './store.jsx'
import { getSessionCookie, checkBrowser, getZipcode, getQuoteIdCookie } from './utils/utils.jsx'
import { checkZipcode, setSessionId, setBeginQuote } from './reducers/session.jsx'
import { setOnLoadPopup } from './reducers/popups.jsx'
import { setDataFields, getSessionStorage } from './reducers/defaultData.jsx'
import { startIqsSession } from './reducers/session.jsx'



import App from './App.jsx'

export default class AppContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hash: "/",
        }

    }

    componentWillMount () {

        let step = get("step")
        if (getSessionCookie(Product_State) && getQuoteIdCookie(Product_State)) {
            // get Storage Data, redirect to last completed page, etc, etc.
            //set onLoadPopup to false
            store.dispatch(setBeginQuote(true))
            store.dispatch(setSessionId(getSessionCookie(Product_State)))
            store.dispatch(setOnLoadPopup(false))
            store.dispatch(getSessionStorage(getSessionCookie(Product_State)))

            let zip = store.getState().session.zipcode || getZipcode()
            if(zip) {
                if (typeof google != "undefined") {
                    zip = zip ? zip : false;
                    let lat;
                    let lng;
                    let geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ 'address': zip }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            geocoder.geocode({'latLng': results[0].geometry.location}, function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        let PropertyState = getState(results);
                                        let PropertyCity = getCity(results);

                                        let defaultAddress = {
                                            PropertyCity,
                                            PropertyState,
                                            PropertyZipCode: zip
                                        }
                                        store.dispatch(setDataFields(defaultAddress))
                                    }


                                }
                            })
                        }
                    })
                }
            }

        }
        //requires plugins.js
        else if (store.dispatch(checkZipcode()) && (!get("step")|| step == '1.1')) {

            this.setState({hash: '/section=1&step=1.1'})
            store.dispatch(startIqsSession())

            let zip = store.getState().session.zipcode || getZipcode()
            if(zip) {
                if (typeof google != "undefined") {
                    zip = zip ? zip : false;
                    let lat;
                    let lng;
                    let geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ 'address': zip }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            geocoder.geocode({'latLng': results[0].geometry.location}, function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        let PropertyState = getState(results);
                                        let PropertyCity = getCity(results);

                                        let defaultAddress = {
                                            PropertyCity,
                                            PropertyState,
                                            PropertyZipCode: zip
                                        }
                                        store.dispatch(setDataFields(defaultAddress))
                                    }


                                }
                            })
                        }
                    })
                }
            }

        }
        else if (!getSessionCookie()) {
            this.setState({hash: '/errors/sessionError'})
            window.location.hash='/errors/sessionError'

        }
        else {
             this.setState({hash: 'errors/noSessionError'})
            window.location.hash ='errors/noSessionError'
        }

        if(!checkBrowser()) {
            window.location = 'unsupported-browser.html'
        }

    }

    render () {
        return ( <App {...this.state} />)
    }


}