
import {getSessionCookie, getZipcode, setInsuranceProductToggleCookie, setSessionCookie } from '../utils/utils.jsx'
import { beginIqsSession, logSessionTrack, getHomeFeatures } from '../utils/iqsServicePromise.js'
import { setDataFields } from './defaultData.jsx'
import { setLoadFeatures } from './popups.jsx'

/* -----------------    ACTIONS     -----------------*/

export const SET_HOME_FEATURES = 'SET_HOME_FEATURES'
export const SET_DEFAULT_FEATURES = 'SET_DEFAULT_FEATURES'


/* ----------   ACTION CREATORS     ------------------ */


export const setHomeFeatures = (homeFeatures) => ({type:SET_HOME_FEATURES, homeFeatures})
export const setDefaultFeatures = (defaultFeatures) => ({type:SET_DEFAULT_FEATURES, defaultFeatures})

/* ------------       REDUCERS     ------------------ */

const initialState = {
    featureNames: {
        '100': 'OpenPorch',
        '800': 'WoodDeck',
        '900': 'CompositeDeck',
        '500': 'Greenhouse',
        '200': 'ScreenedPorch',
        '300': 'OpenBreezeway',
        '400': 'ScreenedBreezeway'
    },
    featureImages: {
        '100': "assets/other_features/open-porch.png",
        '800': "assets/other_features/wood-deck.png",
        '900': "assets/other_features/composite-deck.png",
        '500': "assets/other_features/greenhouse.png",
        '200': "assets/other_features/screened-porch.png",
        '300': "assets/other_features/open-breezeway.png",
        '400': "assets/other_features/screened-breezeway.png"
    },
    homeFeatures: ['800', '900', '100', '500', '200', '300', '400'],
    defaultFeatures: []


}

export default function reducer(prevState = initialState, action) {

    const newState = Object.assign({}, prevState)

    switch (action.type) {


        case SET_HOME_FEATURES:
            newState.homeFeatures = action.homeFeatures.slice(0)
            break;

        case SET_DEFAULT_FEATURES:
            newState.defaultFeatures = action.defaultFeatures.slice(0)
            break;


        default:
            return prevState
    }
    return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const setFeatures = (defaultFeatures) => (dispatch, getState) => {
    const {homeFeatures} = getState().homeFeatures
    let newHomeFeatures =  homeFeatures.slice(0);
    defaultFeatures.forEach((value)=>{
        if (newHomeFeatures.indexOf(value) > - 1) {
            newHomeFeatures.splice(newHomeFeatures.indexOf(value), 1)
        }
    })

    dispatch(setHomeFeatures(newHomeFeatures))
    dispatch(setDefaultFeatures(defaultFeatures))
    return Promise.resolve()
}

export const loadDefaultHomeFeatures = (sessionId) => (dispatch, getState) => {

    sessionId = sessionId || getState().session.sessionId
    const { featureNames } = getState().homeFeatures
    dispatch(setLoadFeatures(true))
    getHomeFeatures(sessionId)
        .then(res=>res.data)
        .then(data => {

             let defaultHomeFeatures = data.responseDataPayload.DefaultHomeFeatures
             let defaultFeatures = []


            if(defaultHomeFeatures.HomeFeatures1){
                let value = defaultHomeFeatures.HomeFeatures1
                let sqft = '' + Math.ceil(defaultHomeFeatures.HomeFeatures1SquareFeet/100)*100

                dispatch(setDataFields({
                    [featureNames[value]] : true,
                    [`${featureNames[value]}SqFt`] :sqft
                }))

                defaultFeatures.push(value)
            }

            if(defaultHomeFeatures.HomeFeatures2){
                let value = defaultHomeFeatures.HomeFeatures2
                let sqft = '' + Math.ceil(defaultHomeFeatures.HomeFeatures2SquareFeet/100)*100

                dispatch(setDataFields({
                    [featureNames[value]] : true,
                    [`${featureNames[value]}SqFt`] :sqft
                }))

                defaultFeatures.push(value)
            }
            dispatch(setFeatures(defaultFeatures))
            dispatch(setLoadFeatures(false))
            return Promise.resolve()
        })
        .catch(err => {
            console.log('caught in homefeatures', err)
        })
}

export const loadDefaultHomeFeaturesWithoutValues = (sessionId) => (dispatch, getState) => {
    sessionId = sessionId || getState().session.sessionId
    const { featureNames } = getState().homeFeatures
    getHomeFeatures(sessionId)
        .then(res=>res.data)
        .then(data => {

            let defaultHomeFeatures = data.responseDataPayload.DefaultHomeFeatures
            let defaultFeatures = []


            if(defaultHomeFeatures.HomeFeatures1){
                let value = defaultHomeFeatures.HomeFeatures1
                let sqft = '' + Math.ceil(defaultHomeFeatures.HomeFeatures1SquareFeet/100)*100

                defaultFeatures.push(value)
            }
            if(defaultHomeFeatures.HomeFeatures2){
                let value = defaultHomeFeatures.HomeFeatures2
                let sqft = '' + Math.ceil(defaultHomeFeatures.HomeFeatures2SquareFeet/100)*100

                defaultFeatures.push(value)
            }
            dispatch(setFeatures(defaultFeatures))
            return Promise.resolve()
        })
        .catch(err => {
            console.log('caught in homefeatures', err)
        })
}


