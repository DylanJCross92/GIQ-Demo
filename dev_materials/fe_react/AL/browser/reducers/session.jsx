
import {getSessionCookie, getZipcode, setInsuranceProductToggleCookie, setSessionCookie } from '../utils/utils.jsx'
import { beginIqsSession, logSessionTrack } from '../utils/iqsServicePromise.js'
import { setNavWarning } from './popups.jsx'
import history from '../history.js'

/* -----------------    ACTIONS     -----------------*/

export const SET_ZIPCODE = 'SET_ZIPCODE'
export const SET_SESSION_COOKIE = 'SET_SESSION_COOKIE'
export const SET_SESSION_ID = 'SET_SESSION_ID'
export const SET_DEBUG = 'SET_DEBUG'
export const SET_DP3ENABLED = 'SET_DP3ENABLED'
export const SET_VER_ADDRESS = 'SET_VER_ADDRESS'
export const SET_ADDRESSES = 'SET_ADDRESSES'
export const SET_PAGE_ID = 'SET_PAGE_ID'
export const SET_ENTERED_ADDRESS = 'SET_ENTERED_ADDRESS'
export const SET_ADD_VAL = 'SET_ADD_VAL'
export const SET_BEGIN_QUOTE = 'SET_BEGIN_QUOTE'
export const SET_SAVE_QUOTE = 'SET_SAVE_QUOTE'
export const SET_QUOTE_ID = 'SET_QUOTE_ID'

/* ----------   ACTION CREATORS     ------------------ */


export const setZipcode = (zipcode) => ({type:SET_ZIPCODE, zipcode})
export const setSessionId = (sessionId) => ({type: SET_SESSION_ID, sessionId})
export const setDebug = (debug) => ({type: SET_DEBUG, debug})
export const setDp3enabled = (dp3enabled) => ({type: SET_DP3ENABLED, dp3enabled})
export const setVerAddress = (verAddress) => ({type: SET_VER_ADDRESS, verAddress})
export const setAddresses = (addresses) => ({type: SET_ADDRESSES, addresses})
export const setPageId = (pageId) => ({type: SET_PAGE_ID, pageId})
export const setEnteredAddress = (enteredAddress) => ({type: SET_ENTERED_ADDRESS, enteredAddress})
export const setAddVal = (addressVal) => ({type: SET_ADD_VAL, addressVal})
export const setBeginQuote = (beginQuote) => ({type: SET_BEGIN_QUOTE, beginQuote})
export const setSaveQuote = (saveQuote) => ({type: SET_SAVE_QUOTE, saveQuote})
export const setQuoteId = (quoteId) => ({type: SET_QUOTE_ID, quoteId})


/* ------------       REDUCERS     ------------------ */

const initialState = {

    zipcode: "",
    sessionId: '',
    debug: '',
    dp3enabled: false,
    pageId: '1.1',
    verAddress: false,
    enteredAddress: {},
    addresses: [],
    addressVal: true,
    beginQuote: false,
    saveQuote: true,
    quoteId: ''


}

export default function sessionReducer(prevState = initialState, action) {

    const newState = Object.assign({}, prevState)

    switch (action.type) {

        case SET_QUOTE_ID:
            newState.quoteId = action.quoteId
            break;

        case SET_SAVE_QUOTE:
            newState.saveQuote = action.saveQuote
            break;

        case SET_BEGIN_QUOTE:
            newState.beginQuote = action.beginQuote
            break;

        case SET_PAGE_ID:
            newState.pageId = action.pageId
            break

        case SET_ADD_VAL:
            newState.addressVal = action.addressVal
            break

        case SET_ENTERED_ADDRESS:
            newState.enteredAddress = action.enteredAddress
            break

        case SET_ADDRESSES:
            newState.addresses = action.addresses
            break

        case SET_VER_ADDRESS:
            newState.verAddress = action.verAddress
            break


        case SET_ZIPCODE:
            newState.zipcode = action.zipcode
            break

        case SET_SESSION_ID:
            newState.sessionId = action.sessionId
            break

        case SET_DEBUG:
            newState.debug = action.debug
            break

        case SET_DP3ENABLED:
            newState.dp3enabled = action.dp3enabled


        default:
            return prevState
    }
    return newState
}

/* ------------       DISPATCHERS     ------------------ */


export const goBack = (location, pristine) => (dispatch, getState) => {
    const {config, defaultData} = getState()
    if(pristine) {
        let currentPage = location.pathname.split('&')[1].split('=')[1]

        let lastPage;
        if (currentPage == '4.1' && config.Product_State == 'FL') {
            lastPage == '3.5'
        }
        else if (currentPage == '3.1' && defaultData.NumberOfClaims == '0') {
            lastPage = '2.1'
        }
        else {
            lastPage = config.steps[config.steps.indexOf(currentPage) - 1]
        }
        history.push(`/section=${lastPage.split('.')[0]}&step=${lastPage}`)
        dispatch(setPageId(lastPage))
    }
    else {
        dispatch(setNavWarning(true))
    }
}

export const dispatchVerAddress = (addressType) => (dispatch) => {
    return dispatch(setVerAddress(addressType))
}
export const checkZipcode = () => (dispatch) => {
    const zip = getZipcode();
    dispatch(setZipcode(zip));
    return zip;
}

export const dispatchSetPageId = (pageId) => (dispatch) => {
     dispatch(setPageId(pageId))
    return pageId;
}

export const checkSessionCookie = () => (dispatch) => {
    const sessionCookie = getSessionCookie()
    dispatch(setSessionId(sessionCookie))
    return sessionCookie
}



export const startIqsSession = () => (dispatch, getState) => {
    const { Product_State, pageId } = getState().config

    let ProductDataArray = {
        Feid,
        AltData: 'SaneID' + SaneID,
        Debug: get('debug').toString(),
        pageId
    }

    return beginIqsSession(ProductDataArray)
        .then(res => res.data)
        .then(data => {
            if(data.exception){
                exceptionHandler(data) //exceptionHandler needs rewrite
            }
            else{
                dispatch(setSessionId(data.responseDataPayload.SessionId))
                dispatch(setDebug(data.responseDataPayload.debug))
                dispatch(setDp3enabled(data.responseDataPayload.dp3enabled == 'true' ? true : false))
                setInsuranceProductToggleCookie(data.responseDataPayload.dp3enabled, Product_State)
                setSessionCookie(data.responseDataPayload.SessionId, Product_State)
                return logSessionTrack(data.responseDataPayload.SessionId, {pageId})
            }
        })
        .then(res => {
            if(res.data.exception){
                exceptionHandler(res.data) //exceptionHandler needs rewrite
            }
        })
        .catch(err => {
            console.log('error', err)
        })
}