import dropdownMenus from '../frontendOptions/dropdownMenus.js'
import {getSessionCookie, getZipcode } from '../utils/utils.jsx'
import { beginIqsSession } from '../utils/iqsServicePromise.js'

/* -----------------    ACTIONS     -----------------*/

/* -----------   ACTION CREATORS     ------------------ */



/* ------------       REDUCERS     ------------------ */

const initialState = {
    dropdownMenus,
    Product_State: 'LA',
    Insurance_Product: 'HO3',
    QuoteIDPrefix: 'CRU4Q-',
    serviceUrl: '../../Iqs/api.php',
    steps: ['1.1', '2.1', '2.2', '3.1', '3.2', '3.3', '3.4', '3.5', '4.1']



}

export default function reducer(prevState = initialState, action) {
    const newState = Object.assign({}, prevState)
    switch (action.type) {


        
        default:
            return prevState
    }
    return newState
}

/* ------------       DISPATCHERS     ------------------ */

