
import {getSessionCookie, getZipcode, setInsuranceProductToggleCookie, setSessionCookie } from '../utils/utils.jsx'
import { beginIqsSession, logSessionTrack, getHomeFeatures } from '../utils/iqsServicePromise.js'
import { setDataFields } from './defaultData.jsx'

/* -----------------    ACTIONS     -----------------*/

export const SET_HOME_FEATURES = 'SET_HOME_FEATURES'
export const SET_DEFAULT_FEATURES = 'SET_DEFAULT_FEATURES'


/* ----------   ACTION CREATORS     ------------------ */


export const setHomeFeatures = (homeFeatures) => ({type:SET_HOME_FEATURES, homeFeatures})
export const setDefaultFeatures = (defaultFeatures) => ({type:SET_DEFAULT_FEATURES, defaultFeatures})

/* ------------       REDUCERS     ------------------ */

const initialState = {
    preferredQuoteTemp: {
        AdditionalAmountsOfInsurance: "2500",
        OptionCoverageB: "1000",
        OptionCoverageC: "7000",
        OptionCoverageD: "3000",
        PersonalPropertyReplacementCost: "100",
        EarthquakeCoverage: "200",
        IdentityFraudCoverage: "0",
        WaterBackupCoverage: "0",
        JewelrySpecialLimits: "1500",
        MechanicalBreakdownCoverage: "200",
        LossAssessmentCoverage: "1000",
        IncreasedOrdinanceLimit: "1000",
        AllOtherPerilsDeductible: "10",
        CoverageE: "300000",
        CoverageF: "1000",
        PersonalInjuryCoverage: "200",
    },
    basicQuoteTemp: {
        AdditionalAmountsOfInsurance: "2500",
        OptionCoverageB: "1000",
        OptionCoverageC: "7000",
        OptionCoverageD: "3000",
        PersonalPropertyReplacementCost: "100",
        EarthquakeCoverage: "200",
        IdentityFraudCoverage: "0",
        WaterBackupCoverage: "0",
        JewelrySpecialLimits: "1500",
        MechanicalBreakdownCoverage: "200",
        LossAssessmentCoverage: "1000",
        IncreasedOrdinanceLimit: "1000",
        AllOtherPerilsDeductible: "25",
        CoverageE: "300000",
        CoverageF: "1000",
        PersonalInjuryCoverage: "200",
    }


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





