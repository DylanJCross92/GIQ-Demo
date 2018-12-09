import store from '../store.jsx'
import {initialize, submit} from 'redux-form'
import { validateAddress, beginQuoteSession, updateQuoteSession, updateSessionStorageData, logSessionTrack, getSessionStorageData, generateSavedQuote, terminateIqsSession } from '../utils/iqsServicePromise.js'
import { setSessionCookie, getSessionCookie, setQuoteIdCookie, refreshSessionCookie, getQuoteIdCookie, getHomeFeature, getHomeFeatureSqFt } from '../utils/utils.jsx'
import exceptionHandler, { clearSessionCookie } from '../utils/exceptionHandler.js'
import TermNames from '../frontendOptions/termNames'
import dropdownMenus from '../frontendOptions/dropdownMenus.js'
import PropertyInfo from '../frontendOptions/propertyInfo.js'
import { setVerAddress, setAddresses, setEnteredAddress, setBeginQuote, setSessionId, setSaveQuote, setQuoteId, setAddVal} from './session.jsx'
import { setIsSaving, setThankYou, setIncPage, setIsValidating, dispatchSelectedHomeStyle, dispatchSelectedGarageType, dispatchSelectedRoofStyle, dispatchSelectedRoofType } from './popups.jsx'
import { SubmissionError, stopSubmit } from 'redux-form'
import { loadDefaultHomeFeatures, loadDefaultHomeFeaturesWithoutValues } from './homeFeatures.jsx'
import history from '../history.js'
import { ensureIdleState } from 'redux-promises'
import { once } from 'redux-when'
import checkBlockCodes from '../utils/checkBlockCodes.js'

/* -----------------    ACTIONS     -----------------*/
export const SET_DATA_FIELD = 'SET_DATA_FIELD'

/* -----------   ACTION CREATORS     ------------------ */

export const setDataFields = (termNames) => {return { type: SET_DATA_FIELD, termNames } }


/* ------------       REDUCERS     ------------------ */

const initialState = {}
//     PropertyStreetNumber: "",
//     PropertyStreetName: "",
//     PropertyStreetAddress: "",
//     PropertyAddressLine2: "",
//     PropertyCity: "",
//     PropertyState: "",
//     PropertyZipCode: "",
//     InsuredByCorporation: "",
//     InsuredName: "",
//     ApplicantFirstName: "",
//     ApplicantLastName: "",
//     InsuredFirstName: "",
//     InsuredLastName: "",
//     PropertyUsage: "",
//     PropertyOccupancy: "",
//     MonthsUnoccupied: "",
//     PropertyCounty:"",
//
//     NumberOfMonthsUnoccupied: "",
//     ShortTermRental: "",
//     SingleOccupancy: "",
//     StudentOccupancy: "",
//     PropertyManagerType: "",
//     PropertyManagerAddressLine1: "",
//     PropertyManagerAddressLine2: "",
//     PropertyManagerCity: "",
//     PropertyManagerState: "",
//     PropertyManagerZip: "",
//
//     CurrentInsurance: "", //Note: Not an EZQuote TermName
//     PriorCarrierNumber: "",
//     PriorCarrierOther: "",
//     PriorExpirationDate: "",
//     NumberOfClaims: "",
//     PriorCoverageA: "",
//     LossDate1: "",
//     LossAmount1: "",
//     LossType1: "",
//     LossCatIndicator1: "",
//     LossDescription1: "",
//     LossDate2: "",
//     LossAmount2: "",
//     LossType2: "",
//     LossCatIndicator2: "",
//     LossDescription2: "",
//     LossDate3: "",
//     LossAmount3: "",
//     LossType3: "",
//     LossCatIndicator3: "",
//     LossDescription3: "",
//     HomeStyle: "",
//     ConstructionYear: "",
//     SquareFootUnderRoof: "",
//     NumberOfStories: "",
//     StructureType: "",
//     ConstructionYearRoof: "",
//     RoofCoveringType: "",
//     RoofGeometryType: "",
//     GarageSize: "", //Note: Not an EZQuote TermName
//     GarageType: "",
//     SquareFootUnderRoofGarage: "",
//     FoundationType: "",
//     ConstructionType: "",
//     Cladding: "",
//     MasonryVeneerPercentage: "",
//     NumberOfKitchens: "",
//     KitchenQuality: "",
//     NumberOfFullBaths: "",
//     FullBathQuality: "",
//     NumberOfHalfBaths: "",
//     HalfBathQuality: "",
//     NumberOfFireplaces: "",
//     HeatPump: "",
//     CentralAir: "",
//     WoodStove: "",
//     WallHeight: "",
//     FloorCoveringType: "",
//     StepsRisersWithoutHandrails: "",
//     NumberOfStepsRisersWithoutHandrails: "",
//     HomeFeatures1: "",
//     HomeFeatures1SquareFeet: "",
//     HomeFeatures2: "",
//     HomeFeatures2SquareFeet: "",
//     HomeFeatures3: "",
//     HomeFeatures3SquareFeet: "",
//
//     //Note EZQuote TermNames//
//     /**/HomeFeaturesWoodDeck: "",
//     /**/HomeFeaturesWoodDeckSF: "",
//     /**/HomeFeaturesCompositeDeck: "",
//     /**/HomeFeaturesCompositeDeckSF: "",
//     /**/HomeFeaturesOpenPorch: "",
//     /**/HomeFeaturesOpenPorchSF: "",
//     /**/HomeFeaturesGreenhouse: "",
//     /**/HomeFeaturesGreenhouseSF: "",
//     /**/HomeFeaturesScreenedPorch: "",
//     /**/HomeFeaturesScreenedPorchSF: "",
//     /**/HomeFeaturesOpenBreezeway: "",
//     /**/HomeFeaturesOpenBreezewaySF: "",
//     /**/HomeFeaturesScreenedBreezeway: "",
//     /**/HomeFeaturesScreenedBreezewaySF: "",
//     ////////////////////////////
//
//     Pets: "",
//     Dogs: "",
//     DistanceFireHydrant: "",
//     PoolType: "",
//     PoolFence: "",
//     DivingBoardSlide: "",
//     DivingBoardSlide2: "",
//     ImmovablePoolLadder: "",
//     MultiPolicy: "",
//     AutoPolicyNumber: "",
//     PrimeTimeDiscount: "",
//
//     WindMitigationForm: "",
//     BCEquivalent: "",
//     RoofDeckAttachmentType: "",
//     RoofWallConnectionType: "",
//     SecondaryWaterResistance: "",
//     OpeningProtectionTypeWLMForm: "",
//
//     Insured1BirthDate: "",
//     Insured1SSN: "",
//     //Insured1SSNRequiredIndicator: "", //Note: not a form on front-end
//     InsuredEmailAddress: "",
//     FireAlarm: "",
//     BurglarAlarm: "",
//     Sprinklers: "",
//     AcceptLegalTerms: "", //Note: not an EZQuote TermName
//
//     CoverageADisplay: "",
//     CoverageA: "",
//     AdditionalAmountsOfInsurance: "",
//     PersonalPropertyReplacementCost: "",
//     OptionCoverageB: "",
//     CoverageB: "",
//     OptionCoverageD: "",
//     CoverageD: "",
//     OptionCoverageC: "",
//     CoverageC: "",
//     ReplacementCostRounded: "",
//     ReplacementCost: "",
//     EarthquakeCoverage: "",
//     IdentityFraudCoverage: "",
//     WaterBackupCoverage: "",
//     JewelrySpecialLimits: "",
//     MechanicalBreakdownCoverage: "",
//     PersonalInjuryCoverage: "",
//     TheftCoverage: "",
//     LossAssessmentCoverage: "",
//     IncreasedOrdinanceLimit: "",
//     AllOtherPerilsDeductible: "",
//     HurricaneDeductible: "",
//     WindHailDeductible: "",
//     //HurricaneDeductible: "",
//     CoverageE: "",
//     CoverageL: "",
//     CoverageF: "",
//     CoverageM: ""
//
// }

export default function sessionReducer(prevState = initialState, action) {

    const newState = Object.assign({}, prevState)

    switch (action.type) {

        case SET_DATA_FIELD:
            Object.assign(newState, action.termNames)
            break

        default:
            return prevState
    }
    return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const setAddress = (termNames) => (dispatch) => {
    dispatch(setDataFields(termNames))
    dispatch(initialize('S1_FORM', termNames))
    return Promise.resolve()
}

export const dispatchSetDataFields = (termNames) => (dispatch) => {
     dispatch(setDataFields(termNames))
    return Promise.resolve()
}

export const addressValidation = (values) => (dispatch, getState) => {



    dispatch(setIsValidating((true)))

    const { defaultData, session, config } = getState()

    if (checkBlockCodes(values)) {
        history.push('/errors/underwriting-block')
        dispatch(setIsValidating(false))
        return;
    }

    let step1TermNames = ["PropertyStreetNumber",
        "PropertyStreetName",
        "PropertyStreetAddress",
        "PropertyAddressLine2",
        "PropertyCity",
        "PropertyState",
        "PropertyZipCode",
        "InsuredByCorporation",
        "InsuredName",
        "ApplicantFirstName",
        "ApplicantLastName",
        "InsuredFirstName",
        "InsuredLastName",
        "PropertyUsage",
        "PropertyOccupancy",
        "MonthsUnoccupied",
        "NumberOfMonthsUnoccupied",
        "ShortTermRental",
        "SingleOccupancy",
        "StudentOccupancy",
        "PropertyManagerType",
        "PropertyManagerAddressLine1",
        "PropertyManagerAddressLine2",
        "PropertyManagerCity",
        "PropertyManagerState",
        "PropertyManagerZip"]

    let updates = false;

    step1TermNames.forEach(term => {
        if(values[term] != defaultData[term]){
            updates = true;
        }
    })


    let AddressDataArray = {
        PropertyStreetNumber: values[TermNames.PropertyStreetAddress].substr(0,values[TermNames.PropertyStreetAddress].indexOf(' ')),
        PropertyStreetName: values[TermNames.PropertyStreetAddress].substr(values[TermNames.PropertyStreetAddress].indexOf(' ')+1),
        PropertyCity: values[TermNames.PropertyCity],
        PropertyState: values[TermNames.PropertyState],
        PropertyZipCode: values[TermNames.PropertyZipCode],
        PropertyStreetAddress: values[TermNames.PropertyStreetAddress]
    }
    dispatch(setDataFields(Object.assign({}, values, {
        LastQuoteSectionPageId: '1.1'
    }, AddressDataArray)))



    if(!session.sessionId) {
        dispatch(setSessionId(getSessionCookie(config.Product_State)))
    }


    if(!session.addressVal || AddressDataArray.PropertyStreetNumber != defaultData.PropertyStreetNumber || AddressDataArray.PropertyStreetName != defaultData.PropertyStreetName || AddressDataArray.PropertyCity != defaultData.PropertyCity) {
        dispatch(setAddVal(false))
        DebugInformation("validateAddress", AddressDataArray)
       return validateAddress(session.sessionId || getSessionCookie(config.Product_State), AddressDataArray)
            .then(res => res.data)
            .then(data => {
                if(data.exception != null) {
                    exceptionHandler(data)
                }
                dispatch(setAddresses(data.responseDataPayload.Addresses))
                dispatch(setEnteredAddress({
                    [TermNames.PropertyStreetAddress]: values[TermNames.PropertyStreetAddress],
                    [TermNames.PropertyCity]: values[TermNames.PropertyCity],
                    [TermNames.PropertyState]: values[TermNames.PropertyState],
                    [TermNames.PropertyZipCode]: values[TermNames.PropertyZipCode]
                }))
                let _address = data.responseDataPayload.Addresses[0]

                let addressData = {
                    [TermNames.SquareFootUnderRoof]: _address['SquareFootUnderRoofRetrieved'] < 10000 ? _address['SquareFootUnderRoofRetrieved'] : '' ,
                    [TermNames.ConstructionYear]: _address['ConstructionYearRetrieved'],
                    [TermNames.NumberOfFullBaths]: _address['NumberOfFullBathsRetrieved'],
                    [TermNames.NumberOfHalfBaths]: _address['NumberOfHalfBathsRetrieved'],
                    [TermNames.NumberOfFireplaces]: _address['NumberOfFireplacesRetrieved'],
                    [TermNames.PropertyCounty]: _address['PropertyCounty'],
                }


                if (addressData[TermNames.NumberOfFullBaths]) addressData[TermNames.FullBathQuality] = '100'
                if (addressData[TermNames.NumberOfHalfBaths]) addressData[TermNames.HalfBathQuality] = '100'


                dispatch(setDataFields(addressData))

                if(AddressDataArray.PropertyStreetName != _address.PropertyStreetName || AddressDataArray.PropertyStreetNumber != _address.PropertyStreetNumber) {
                    if(data.responseDataPayload.Addresses.length == 1) {
                        dispatch(setVerAddress('single'))
                        dispatch(setIsValidating(false))
                    }
                    else if(data.responseDataPayload.Addresses > 1){
                        dispatch(setVerAddress('multiple'))
                        dispatch(setIsValidating(false))
                    }
                }
                else {
                    dispatch(setDataFields({
                        [TermNames.PropertyStreetNumber]: _address[TermNames.PropertyStreetNumber],
                        [TermNames.PropertyStreetName]: _address[TermNames.PropertyStreetName],
                        [TermNames.PropertyStreetAddress]: `${_address[TermNames.PropertyStreetNumber]} ${_address[TermNames.PropertyStreetName]}`
                    }))
                    return dispatch(beginQuote(Object.assign({}, values, {
                        [TermNames.PropertyStreetNumber]: _address[TermNames.PropertyStreetNumber],
                        [TermNames.PropertyStreetName]: _address[TermNames.PropertyStreetName],
                        [TermNames.PropertyStreetAddress]: `${_address[TermNames.PropertyStreetNumber]} ${_address[TermNames.PropertyStreetName]}`
                    } ), data.responseDataPayload.Addresses))
                }
            })
            .catch(err => {
                console.log(err)
                // exceptionHandler()
            })
    }
    else {

        return dispatch(beginQuote ())
    }

}

export const acceptAddress = (values) => (dispatch, getState) => {
    const { session } = getState();
    dispatch(setIsValidating(false))
    dispatch(setAddVal(true))

    let selectedAddress =( values && values.selectedAddress) ? values.selectedAddress : 0
    let address = session.addresses[+selectedAddress]
    dispatch(setDataFields ({
        [TermNames.PropertyStreetNumber]: address[TermNames.PropertyStreetNumber],
        [TermNames.PropertyStreetName]: address[TermNames.PropertyStreetName],
        [TermNames.PropertyStreetAddress]: `${address[TermNames.PropertyStreetNumber]} ${address[TermNames.PropertyStreetName]}`,
        [TermNames.PropertyCity]: address[TermNames.PropertyCity]
    }))

    return dispatch(beginQuote(null, null, selectedAddress))
}

export const beginQuote = (values, addresses, selectedAddress) => (dispatch, getState) => {
    dispatch(setIsValidating(false))
    dispatch(setAddVal(true))
    dispatch(setVerAddress(''))

    const {session, config, defaultData} = getState()
    history.push('/section=2&step=2.1')

    if(!values) values = defaultData
    let selectedAddress = selectedAddress ? selectedAddress : ( (values && values.selectedAddress) ? values.selectedAddress : 0)


    if (checkBlockCodes(values)) {
        history.push('/errors/underwriting-block')
        return;
    }

    if(getQuoteIdCookie(config.Product_State) && getSessionCookie(config.Product_State)){
        dispatch(setBeginQuote(true))
        refreshSessionCookie(config.Product_State)
        return dispatch(updateQuote(values))
    }

    let beginQuoteDataArray = {
        AddressId: '' + selectedAddress,
        Insurance_Product: config.Insurance_Product,
        InsuredByCorporation: values[TermNames.InsuredByCorporation] ? values[TermNames.InsuredByCorporation] : '200'
    }

    DebugInformation("beginQuoteSession", beginQuoteDataArray)
    return beginQuoteSession(session.sessionId || getSessionCookie(config.Product_State) , beginQuoteDataArray)
        .then(res => res.data)
        .then(data => {
            if(data.exception != null) {
                exceptionHandler(data)
            }
            else {
                // let updatedFields = {
                //     [TermNames.InsuredFirstName]: values[TermNames.InsuredFirstName],
                //     [TermNames.InsuredLastName]: values[TermNames.InsuredLastName],
                //     [TermNames.PropertyUsage]: values[TermNames.PropertyUsage],
                //     [TermNames.MonthsUnoccupied]: values[TermNames.MonthsUnoccupied],
                //     [TermNames.PropertyStreetNumber]: address[TermNames.PropertyStreetNumber],
                //     [TermNames.PropertyStreetName]: address[TermNames.PropertyStreetName],
                //     [TermNames.PropertyStreetAddress]: `${address[TermNames.PropertyStreetNumber]} ${address[TermNames.PropertyStreetName]}`,
                //     [TermNames.PropertyCity]: address[TermNames.PropertyCity],
                //     [TermNames.PropertyState]: address[TermNames.PropertyState],
                //     [TermNames.PropertyZipCode]: address[TermNames.PropertyZipCode]
                // }
                // dispatch(setDataFields(updatedFields))
                refreshSessionCookie(config.Product_State)
                setQuoteIdCookie(data.responseDataPayload.QuoteId, config.Product_State)
                dispatch(setQuoteId(data.responseDataPayload.QuoteId))

                dispatch(updateQuote(values, false))
                return dispatch(setBeginQuote(true))

            }
        }).catch(err => {
            console.log('ERROR', err)
            return exceptionHandler(err)
        })
}


export const submitUpdate = (values, dispatch, props) => (dispatch, getState) => {
    dispatch(setIncPage(false))
    if (checkBlockCodes(values)) {
        history.push('/errors/underwriting-block')
        return;
    }

    if(props.sidebar){
        dispatch(setIncPage(false))
        dispatch(setIsSaving(true))
        return dispatch(once(state => state.session.beginQuote, ()=>finishSaveQuote(values)))
    }

    const { config } = getState()
    let nextPage;
    let currentPage = history.location.pathname;

    values.LastQuoteSectionPageId = currentPage.split('&')[1].split('=')[1]

    if(values.LastQuoteSectionPageId != '1.1'){
        if (values.LastQuoteSectionPageId == '2.1'){
            if (values[TermNames.NumberOfClaims] > 0 && values[TermNames.NumberOfClaims] <= 3) {
                nextPage = '/section=2&step=2.2'
            }
            else {
                nextPage = '/section=3&step=3.1'
            }

        }
        else if (values.LastQuoteSectionPageId == '3.4'){
            if(config.Product_State == 'FL'){
                nextPage = '/section=4&step=4.1'
            }
            else {
                nextPage = '/section=3&step=3.5'
            }
        }
        else {
            let pageIndex = config.steps.indexOf(values.LastQuoteSectionPageId)
            nextPage = '/section=' + config.steps[pageIndex + 1].split('.')[0] + '&step=' + config.steps[pageIndex + 1]
        }

        history.push(nextPage)
    }

        dispatch(once(state => state.session.beginQuote, ()=>updateQuote(values)))


}

export const saveQuote = () => (dispatch, getState) => {
    const { config, session } = getState()

    const UpdateQuoteSessionArray = {
        Insurance_Product: config.Insurance_Product
    }

    dispatch(setIncPage(false))
    dispatch(setIsSaving(true))

    return updateQuoteSession(session.sessionId, false, UpdateQuoteSessionArray)
        .then(res => res.data)
        .then(data => {
            if(data.exception != null){
                exceptionHandler(data)
            }
            else {
                refreshSessionCookie(config.Product_State)
                return dispatch(updateSessionStorage()).then(() => {
                    dispatch(setThankYou(true))
                    dispatch(setIsSaving(false))

                })

            }
        })
        .catch(err=>{
            console.log('error in update quote', err)
        })
}

export const finishSaveQuote = (values) => (dispatch, getState) => {
    dispatch(setIncPage(false))
    return dispatch(updateQuote(values))
        .then(()=> {
            dispatch(setThankYou(true))
            dispatch(setIsSaving(false))

        })
        .catch(()=>{
            exceptionHandler()
        })

}

export const updateSaveQuote = (values) => (dispatch, getState) => {

    dispatch(setIncPage(false))
    if (checkBlockCodes(values)) {
        history.push('/errors/underwriting-block')
        return;
    }


    dispatch(setIsSaving(true))
     dispatch(once(state => state.session.beginQuote, ()=>finishSaveQuote(values)))



}

export const submitUpdateAfter = (values) => (dispatch, getState) => {
    const { config } = getState()
    let nextPage;
    if(values.LastQuoteSectionPageId != '1.1'){
        if (values.LastQuoteSectionPageId == '2.1'){
            if (values[TermNames.NumberOfClaims] > 0 && values[TermNames.NumberOfClaims] <= 3) {
                nextPage = '/step=2.2'
            }
            else {
                nextPage = '/step=3.1'
            }

        }
        else if (values.LastQuoteSectionPageId == '3.4'){
            if(config.Product_State == 'FL'){
                nextPage = '/step=4.1'
            }
            else {
                nextPage = '/step=3.5'
            }
        }
        else {
            let pageIndex = config.steps.indexOf(values.LastQuoteSectionPageId)
            nextPage = '/step=' + config.steps[pageIndex + 1]
        }

        history.push(nextPage)
    }

    return  dispatch(updateQuote(values))
        .catch(err => {
            console.log('problem in submit update', err)
        })

}

export const updateQuote = (values, skipEZQResponse=false, FormData) => (dispatch, getState) => {
    const { config, session, defaultData, homeFeatures } = getState()

    values = Object.assign({}, defaultData, values)
    let steps = ['1.1', '2.1', '2.2', '3.1', '3.2', '3.3', '3.4', '3.5', '4.1']

    const UpdateQuoteSessionArray = {
        Insurance_Product: config.Insurance_Product ,
        LastQuoteSectionPageId: values.LastQuoteSectionPageId}

    if(steps.includes(values.LastQuoteSectionPageId)) {

        if (values[TermNames.InsuredByCorporation] == 100) {
            UpdateQuoteSessionArray.InsuredByCorporation = cleanVar(values[TermNames.InsuredByCorporation]);
            UpdateQuoteSessionArray.InsuredName = cleanVar(values[TermNames.InsuredName]);
            UpdateQuoteSessionArray.ApplicantFirstName = cleanVar(values[TermNames.ApplicantFirstName]);
            UpdateQuoteSessionArray.ApplicantLastName = cleanVar(values[TermNames.ApplicantLastName]);
            UpdateQuoteSessionArray.InsuredFirstName = "";
            UpdateQuoteSessionArray.InsuredLastName = "";
        }
        else if (values[TermNames.InsuredByCorporation] == 200) {
            UpdateQuoteSessionArray.InsuredByCorporation = cleanVar(values[TermNames.InsuredByCorporation]);
            UpdateQuoteSessionArray.InsuredName = cleanVar(values[TermNames.InsuredFirstName] + " " + values[TermNames.InsuredLastName]);
            UpdateQuoteSessionArray.ApplicantFirstName = "";
            UpdateQuoteSessionArray.ApplicantLastName = "";
            UpdateQuoteSessionArray.InsuredFirstName = cleanVar(values[TermNames.InsuredFirstName]);
            UpdateQuoteSessionArray.InsuredLastName = cleanVar(values[TermNames.InsuredLastName]);
        }
        else {
            UpdateQuoteSessionArray.InsuredByCorporation = "";
            UpdateQuoteSessionArray.InsuredName = "";
            UpdateQuoteSessionArray.ApplicantFirstName = "";
            UpdateQuoteSessionArray.ApplicantLastName = "";
            UpdateQuoteSessionArray.InsuredFirstName = cleanVar(values[TermNames.InsuredFirstName]);
            UpdateQuoteSessionArray.InsuredLastName = cleanVar(values[TermNames.InsuredLastName]);
        }

        UpdateQuoteSessionArray.PropertyAddressLine2 = cleanVar(values[TermNames.PropertyAddressLine2]);
        if (Product_State !== "FL") {
            var propertyUsageVAL = values[TermNames.PropertyUsage].split("-")[0];
            var propertyOccupancyVAL = values[TermNames.PropertyUsage].split("-")[1];
            UpdateQuoteSessionArray.PropertyUsage = cleanVar(propertyUsageVAL);
            UpdateQuoteSessionArray.PropertyOccupancy = cleanVar(propertyOccupancyVAL);
        }
        else {
            UpdateQuoteSessionArray.PropertyOccupancy = cleanVar(100);
        }
        UpdateQuoteSessionArray.MonthsUnoccupied = cleanVar(values[TermNames.MonthsUnoccupied]);


        UpdateQuoteSessionArray.NumberOfMonthsUnoccupied = cleanVar(values[TermNames.NumberOfMonthsUnoccupied]);
        UpdateQuoteSessionArray.ShortTermRental = cleanVar(values[TermNames.ShortTermRental]);
        UpdateQuoteSessionArray.SingleOccupancy = cleanVar(values[TermNames.SingleOccupancy]);
        UpdateQuoteSessionArray.StudentOccupancy = cleanVar(values[TermNames.StudentOccupancy]);
        UpdateQuoteSessionArray.PropertyManagerType = cleanVar(values[TermNames.PropertyManagerType]);
        UpdateQuoteSessionArray.PropertyManagerAddressLine1 = cleanVar(values[TermNames.PropertyManagerAddressLine1]);
        UpdateQuoteSessionArray.PropertyManagerAddressLine2 = cleanVar(values[TermNames.PropertyManagerAddressLine2]);
        UpdateQuoteSessionArray.PropertyManagerCity = cleanVar(values[TermNames.PropertyManagerCity]);
        UpdateQuoteSessionArray.PropertyManagerState = cleanVar(values[TermNames.PropertyManagerState]);
        UpdateQuoteSessionArray.PropertyManagerZip = cleanVar(values[TermNames.PropertyManagerZip]);
    }
    if(steps.slice(1).includes(values.LastQuoteSectionPageId))
    {
        var PriorCarrierVAL = values[TermNames.CurrentInsurance] == "-" ? values[TermNames.PriorCarrierNumber] : values[TermNames.CurrentInsurance];
        var PriorCoverageA = cleanVar(cleanCurrency(values[TermNames.PriorCoverageA]));

        UpdateQuoteSessionArray.PriorCarrierNumber = cleanVar(PriorCarrierVAL);
        UpdateQuoteSessionArray.PriorCarrierOther = cleanVar(values[TermNames.PriorCarrierOther]);
        UpdateQuoteSessionArray.PriorExpirationDate = cleanVar(values[TermNames.PriorExpirationDate]);
        UpdateQuoteSessionArray.NumberOfClaims = cleanVar(values[TermNames.NumberOfClaims]);
        UpdateQuoteSessionArray.PriorCoverageA = PriorCoverageA;

        if(cleanVar(values[TermNames.NumberOfClaims]) == 0)
        {
            UpdateQuoteSessionArray.LossDate1 = "";
            UpdateQuoteSessionArray.LossAmount1 = "";
            UpdateQuoteSessionArray.LossType1 = "";
            UpdateQuoteSessionArray.LossCatIndicator1 = "";
            UpdateQuoteSessionArray.LossDescription1 = "";

            UpdateQuoteSessionArray.LossDate2 = "";
            UpdateQuoteSessionArray.LossAmount2 = "";
            UpdateQuoteSessionArray.LossType2 = "";
            UpdateQuoteSessionArray.LossCatIndicator2 = "";
            UpdateQuoteSessionArray.LossDescription2 = "";

            UpdateQuoteSessionArray.LossDate3 = "";
            UpdateQuoteSessionArray.LossAmount3 = "";
            UpdateQuoteSessionArray.LossType3 = "";
            UpdateQuoteSessionArray.LossCatIndicator3 = "";
            UpdateQuoteSessionArray.LossDescription3 = "";
        }

    }
    if(steps.slice(2).includes(values.LastQuoteSectionPageId))
    {
        UpdateQuoteSessionArray.LossDate1 = cleanVar(values[TermNames.LossDate1]);
        UpdateQuoteSessionArray.LossAmount1 = cleanVar(cleanCurrency(values[TermNames.LossAmount1]));
        UpdateQuoteSessionArray.LossType1 = cleanVar(values[TermNames.LossType1]);
        UpdateQuoteSessionArray.LossCatIndicator1 = cleanVar(values[TermNames.LossCatIndicator1]);
        UpdateQuoteSessionArray.LossDescription1 = cleanVar(values[TermNames.LossDescription1]);

        UpdateQuoteSessionArray.LossDate2 = cleanVar(values[TermNames.LossDate2]);
        UpdateQuoteSessionArray.LossAmount2 = cleanVar(cleanCurrency(values[TermNames.LossAmount2]));
        UpdateQuoteSessionArray.LossType2 = cleanVar(values[TermNames.LossType2]);
        UpdateQuoteSessionArray.LossCatIndicator2 = cleanVar(values[TermNames.LossCatIndicator2]);
        UpdateQuoteSessionArray.LossDescription2 = cleanVar(values[TermNames.LossDescription2]);

        UpdateQuoteSessionArray.LossDate3 = cleanVar(values[TermNames.LossDate3]);
        UpdateQuoteSessionArray.LossAmount3 = cleanVar(cleanCurrency(values[TermNames.LossAmount3]));
        UpdateQuoteSessionArray.LossType3 = cleanVar(values[TermNames.LossType3]);
        UpdateQuoteSessionArray.LossCatIndicator3 = cleanVar(values[TermNames.LossCatIndicator3]);
        UpdateQuoteSessionArray.LossDescription3 = cleanVar(values[TermNames.LossDescription3]);
    }
    if(steps.slice(3).includes(values.LastQuoteSectionPageId))
    {
        UpdateQuoteSessionArray.HomeStyle = '' + cleanVar(values[TermNames.HomeStyle]);
        UpdateQuoteSessionArray.ConstructionYear = '' + cleanVar(values[TermNames.ConstructionYear]);
        UpdateQuoteSessionArray.SquareFootUnderRoof = '' + cleanVar(values[TermNames.SquareFootUnderRoof]);
        UpdateQuoteSessionArray.NumberOfStories = '' + cleanVar(values[TermNames.NumberOfStories]);
        UpdateQuoteSessionArray.StructureType = '' + cleanVar(values[TermNames.StructureType]);
        UpdateQuoteSessionArray.ConstructionYearRoof = '' + cleanVar(values[TermNames.ConstructionYearRoof]);
        UpdateQuoteSessionArray.RoofCoveringType = '' + cleanVar(values[TermNames.RoofCoveringType]);
        UpdateQuoteSessionArray.RoofGeometryType = '' + cleanVar(values[TermNames.RoofGeometryType]);
    }
    if(steps.slice(4).includes(values.LastQuoteSectionPageId))
    {
        var garageType;

        if(cleanVar(values[TermNames.GarageSize]) > 1)
        {
            if(cleanVar(values[TermNames.GarageType].length) == 5)
            {
                garageType = cleanVar(values[TermNames.GarageType]);
            }
            else
            {

                if (cleanVar(values[TermNames.GarageType] == "205") && cleanVar(defaultData[TermNames.NumberOfStories] == "100")){
                    values[TermNames.GarageType] = "201";
                }

                garageType = cleanVar(values[TermNames.GarageType])+cleanVar(values[TermNames.GarageSize]);
            }
        }
        else
        {
            garageType = cleanVar(values[TermNames.GarageSize]);
        }

        UpdateQuoteSessionArray.GarageType = cleanVar(garageType);
        UpdateQuoteSessionArray.SquareFootUnderRoofGarage = cleanVar(values[TermNames.SquareFootUnderRoofGarage]);
        UpdateQuoteSessionArray.FoundationType = cleanVar(values[TermNames.FoundationType]);
        UpdateQuoteSessionArray.ConstructionType = cleanVar(values[TermNames.ConstructionType]);
        UpdateQuoteSessionArray.Cladding = cleanVar(values[TermNames.Cladding]);
        UpdateQuoteSessionArray.MasonryVeneerPercentage = cleanVar(values[TermNames.MasonryVeneerPercentage]);
    }
    if(steps.slice(5).includes(values.LastQuoteSectionPageId))
    {
        UpdateQuoteSessionArray.NumberOfKitchens = cleanVar(values[TermNames.NumberOfKitchens]);
        UpdateQuoteSessionArray.KitchenQuality = cleanVar(values[TermNames.KitchenQuality]);
        UpdateQuoteSessionArray.NumberOfFullBaths = cleanVar(values[TermNames.NumberOfFullBaths]);
        UpdateQuoteSessionArray.FullBathQuality = cleanVar(values[TermNames.FullBathQuality]);
        UpdateQuoteSessionArray.NumberOfHalfBaths = cleanVar(values[TermNames.NumberOfHalfBaths]);
        UpdateQuoteSessionArray.HalfBathQuality = cleanVar(values[TermNames.HalfBathQuality]);
        UpdateQuoteSessionArray.NumberOfFireplaces = cleanVar(values[TermNames.NumberOfFireplaces]);
        UpdateQuoteSessionArray.HeatPump = cleanVar(values[TermNames.HeatPump]);
        UpdateQuoteSessionArray.CentralAir = cleanVar(values[TermNames.CentralAir]);
        UpdateQuoteSessionArray.WoodStove = cleanVar(values[TermNames.WoodStove]);
        UpdateQuoteSessionArray.WallHeight = cleanVar(values[TermNames.WallHeight]);
        UpdateQuoteSessionArray.FloorCoveringType = cleanVar(values[TermNames.FloorCoveringType]);
        UpdateQuoteSessionArray.StepsRisersWithoutHandrails = cleanVar(values[TermNames.StepsRisersWithoutHandrails]);
        UpdateQuoteSessionArray.NumberOfStepsRisersWithoutHandrails = cleanVar(values[TermNames.NumberOfStepsRisersWithoutHandrails]);

        //FL only
        if(Product_State === "FL"){
            var DivingBoard = cleanVar(values[TermNames.DivingBoardSlide]) ? cleanVar(values[TermNames.DivingBoardSlide]) : cleanVar(values[TermNames.DivingBoardSlide2]);
            UpdateQuoteSessionArray.DistanceFireHydrant = cleanVar(values[TermNames.DistanceFireHydrant]);
            UpdateQuoteSessionArray.PoolType = cleanVar(values[TermNames.PoolType]);
            UpdateQuoteSessionArray.PoolFence = cleanVar(values[TermNames.PoolFence]);
            UpdateQuoteSessionArray.DivingBoardSlide = DivingBoard;
            UpdateQuoteSessionArray.ImmovablePoolLadder = cleanVar(values[TermNames.ImmovablePoolLadder]);
        }
    }
    if(steps.slice(6).includes(values.LastQuoteSectionPageId))
    {
        UpdateQuoteSessionArray.HomeFeatures1 = "";
        UpdateQuoteSessionArray.HomeFeatures1SquareFeet = "";
        UpdateQuoteSessionArray.HomeFeatures2 = "";
        UpdateQuoteSessionArray.HomeFeatures2SquareFeet = "";
        UpdateQuoteSessionArray.HomeFeatures3 = "";
        UpdateQuoteSessionArray.HomeFeatures3SquareFeet = "";

        let num = 1
        let featureNames = homeFeatures.featureNames
        for (let feature in featureNames){
            if (featureNames.hasOwnProperty(feature)){
                if (num < 4){
                    if (values[featureNames[feature]]){
                        UpdateQuoteSessionArray[`HomeFeatures${num}`] = feature
                        UpdateQuoteSessionArray[`HomeFeatures${num}SquareFeet`] = values[`${featureNames[feature]}SqFt`]
                        num++;
                    }
                }
            }
        }

        let HomeFeatures = {
            HomeFeaturesWoodDeck: "",
            HomeFeaturesWoodDeckSF: "",
            HomeFeaturesCompositeDeck: "",
            HomeFeaturesCompositeDeckSF: "",
            HomeFeaturesOpenPorch: "",
            HomeFeaturesOpenPorchSF: "",
            HomeFeaturesGreenhouse: "",
            HomeFeaturesGreenhouseSF: "",
            HomeFeaturesScreenedPorch: "",
            HomeFeaturesScreenedPorchSF: "",
            HomeFeaturesOpenBreezeway: "",
            HomeFeaturesOpenBreezewaySF: "",
            HomeFeaturesScreenedBreezeway: "",
            HomeFeaturesScreenedBreezewaySF: ""
        }

        if(UpdateQuoteSessionArray.HomeFeatures1){
        let feature = getHomeFeature(UpdateQuoteSessionArray, 'HomeFeatures1')
        HomeFeatures[feature] = true
        HomeFeatures[`${feature}SqFt`] = getHomeFeatureSqFt(UpdateQuoteSessionArray, 'HomeFeatures1')
    }

        if(UpdateQuoteSessionArray.HomeFeatures2){
            let feature = getHomeFeature(UpdateQuoteSessionArray, 'HomeFeatures2')
            HomeFeatures[feature] = true
            HomeFeatures[`${feature}SqFt`] = getHomeFeatureSqFt(UpdateQuoteSessionArray, 'HomeFeatures2')
        }

        if(UpdateQuoteSessionArray.HomeFeatures3){
            let feature = getHomeFeature(UpdateQuoteSessionArray, 'HomeFeatures3')
            HomeFeatures[feature] = true
            HomeFeatures[`${feature}SqFt`] = getHomeFeatureSqFt(UpdateQuoteSessionArray, 'HomeFeatures3')
        }

        dispatch(setDataFields(HomeFeatures))

    }
    if(steps.slice(7).includes(values.LastQuoteSectionPageId))
    {
        var DivingBoard = cleanVar(values[TermNames.DivingBoardSlide]) ? cleanVar(values[TermNames.DivingBoardSlide]) : cleanVar(values[TermNames.DivingBoardSlide2]);

        UpdateQuoteSessionArray.Pets = cleanVar(values[TermNames.Pets]);
        UpdateQuoteSessionArray.Dogs = cleanVar(values[TermNames.Dogs]);
        UpdateQuoteSessionArray.DistanceFireHydrant = cleanVar(values[TermNames.DistanceFireHydrant]);
        UpdateQuoteSessionArray.PoolType = cleanVar(values[TermNames.PoolType]);
        UpdateQuoteSessionArray.PoolFence = cleanVar(values[TermNames.PoolFence]);
        UpdateQuoteSessionArray.DivingBoardSlide = DivingBoard;
        UpdateQuoteSessionArray.ImmovablePoolLadder = cleanVar(values[TermNames.ImmovablePoolLadder]);
    }
    if(steps.slice(8).includes(values.LastQuoteSectionPageId))
    {
        var cleanSSN = cleanVar(values[TermNames.Insured1SSN]).replace(/-/g, "");

        UpdateQuoteSessionArray.MultiPolicy = cleanVar(values[TermNames.MultiPolicy]);
        UpdateQuoteSessionArray.AutoPolicyNumber = cleanVar(values[TermNames.AutoPolicyNumber]);
        UpdateQuoteSessionArray.PrimeTimeDiscount = cleanVar(values[TermNames.PrimeTimeDiscount]);
        //Update Wind Mitigation only if it exists
        if(cleanVar(values[TermNames.WindMitigationForm]))
        {
            UpdateQuoteSessionArray.WindMitigationForm = cleanVar(values[TermNames.WindMitigationForm]);

            if(cleanVar(values[TermNames.WindMitigationForm]) == 100)
            {
                UpdateQuoteSessionArray.BCEquivalent = cleanVar(values[TermNames.BCEquivalent]);
                UpdateQuoteSessionArray.RoofDeckAttachmentType = cleanVar(values[TermNames.RoofDeckAttachmentType]);
                UpdateQuoteSessionArray.RoofWallConnectionType = cleanVar(values[TermNames.RoofWallConnectionType]);
                UpdateQuoteSessionArray.SecondaryWaterResistance = cleanVar(values[TermNames.SecondaryWaterResistance]);
                UpdateQuoteSessionArray.OpeningProtectionTypeWLMvalues = cleanVar(values[TermNames.OpeningProtectionTypeWLMvalues]);
                UpdateQuoteSessionArray.OpeningProtectionType = cleanVar(values[TermNames.OpeningProtectionType]);
                UpdateQuoteSessionArray.RoofGeometryTypeWLMvalues = cleanVar(values[TermNames.RoofGeometryTypeWLMvalues]);
            }
            if(cleanVar(values[TermNames.WindMitigationForm]) == 200) {
                UpdateQuoteSessionArray.WindBorneDebrisRegion = '0';
            }
        }

        UpdateQuoteSessionArray.Insured1BirthDate = cleanVar(values[TermNames.Insured1BirthDate]);
        UpdateQuoteSessionArray.Insured1SSN = cleanSSN;
        UpdateQuoteSessionArray.Insured1SSNDisplay = cleanSSN;
        UpdateQuoteSessionArray.Insured1SSNRequiredIndicator = cleanVar(cleanSSN) ? "100" : "200";
        UpdateQuoteSessionArray.InsuredEmailAddress = cleanVar(values[TermNames.InsuredEmailAddress]);
        UpdateQuoteSessionArray.FireAlarm = cleanVar(values[TermNames.FireAlarm]);
        UpdateQuoteSessionArray.BurglarAlarm = cleanVar(values[TermNames.BurglarAlarm]);
        UpdateQuoteSessionArray.Sprinklers = cleanVar(values[TermNames.Sprinklers]);

        skipEZQResponse = false;
    }
    else if(values.LastQuoteSectionPageId == "covAOverride") {
        UpdateQuoteSessionArray.SquareFootUnderRoof = "";
        skipEZQResponse = false;
    }



    dispatch(setDataFields(values))
    DebugInformation("updateQuoteSession", UpdateQuoteSessionArray)
    return updateQuoteSession(session.sessionId, skipEZQResponse, UpdateQuoteSessionArray)
        .then(res => res.data)
        .then(data => {
            if(data.exception != null){
                exceptionHandler(data)
            }
            else {
                if (values.LastQuoteSectionPageId == '3.2' && !defaultData.HomeFeatures1) { dispatch(loadDefaultHomeFeatures(session.sessionId)) }
                refreshSessionCookie(config.Product_State)
               return dispatch(updateSessionStorage()).then(() => {
                    return dispatch(logSession(values))
               })

            }
        })
        .catch(err=>{
            console.log('error in update quote', err)
        })
}

export const updateSessionStorage = () => (dispatch, getState) => {
    const { defaultData, session } = getState()
    let updateData = JSON.stringify(defaultData)
    return updateSessionStorageData(session.sessionId, updateData)

}

export const logSession = (values) => (dispatch, getState) => {
    const {session} = getState()
    return logSessionTrack(session.sessionId, {pageId: values.LastQuoteSectionPageId})
}

export const getSessionStorage = (sessionId) => (dispatch, getState) => {
    const { config } = getState()
    return getSessionStorageData(sessionId)
        .then(res => res.data)
        .then(data => {
            if(data.exception != null) {
                exceptionHandler(data)
            }
            if(!data.responseDataPayload.SessionStorageData){
                history.push('/section=1&step=1.1')
            }
            else {

                let quoteData = JSON.parse(data.responseDataPayload.SessionStorageData)
                if(+quoteData.LastQuoteSectionPageId >= 3.4 || quoteData.HomeFeatures1) {
                    dispatch(loadDefaultHomeFeaturesWithoutValues(sessionId))
                }else if (+quoteData.LastQuoteSectionPageId >= 3.2) {
                    dispatch(loadDefaultHomeFeatures())
                }

                if(quoteData.PropertyStreetNumber && quoteData.PropertyStreetName){
                    quoteData.PropertyStreetAddress = `${quoteData.PropertyStreetNumber} ${quoteData.PropertyStreetName}`
                }

                if(config.Product_State != 'FL' && quoteData.PropertyUsage && quoteData.PropertyOccupancy){
                    quoteData.PropertyUsage = `${quoteData.PropertyUsage}-${quoteData.PropertyOccupancy}`
                }



                if(!quoteData.CurrentInsurance && quoteData.PriorCarrierNumber < 5){
                    quoteData.CurrentInsurance = quoteData.PriorCarrierNumber
                }else if(!quoteData.CurrentInsuarance && quoteData.PriorCarrierNumber >=5) {
                    quoteData.CurrentInsurance = '-'
                }

                if(!quoteData.GarageType || quoteData.GarageType == '1'){
                    quoteData.GarageSize = '1'
                    quoteData.GarageType= ''
                }else if (quoteData.GarageSize != '1' && quoteData.GarageType){
                    if (quoteData.GarageType.length == 3){
                        quoteData.GarageSize = quoteData.GarageType
                        quoteData.GarageType = ''
                    }else if(quoteData.GarageType.length == 5){
                        quoteData.GarageSize = quoteData.GarageType.slice(3,5)
                        quoteData.GarageType = quoteData.GarageType.slice(0,3)
                    }
                }



                if(quoteData.GarageType){
                    let garageTypeName;
                    for (let type in PropertyInfo.GarageType){

                        if(PropertyInfo.GarageType[type].value == +quoteData.GarageType){
                            garageTypeName = type
                        }
                    }
                    if (garageTypeName){
                        dispatch(dispatchSelectedGarageType(garageTypeName))
                    }
                }

                if(quoteData.HomeStyle){
                    let homeStyleName;
                    for (let type in PropertyInfo.HomeStyle){
                        if(PropertyInfo.HomeStyle[type].value == +quoteData.HomeStyle){
                            homeStyleName = type
                        }
                    }
                    if (homeStyleName){
                        dispatch(dispatchSelectedHomeStyle(homeStyleName))
                    }
                }

                if(quoteData.RoofCoveringType){
                    let RoofTypeName;
                    for (let type in PropertyInfo.RoofType){
                        if(PropertyInfo.RoofType[type].value == +quoteData.RoofCoveringType){
                            RoofTypeName = type
                        }
                    }
                    if (RoofTypeName){
                        dispatch(dispatchSelectedRoofType(RoofTypeName))
                    }
                }

                if(quoteData.RoofGeometryType || quoteData.RoofGeometryType == '0' ){
                    let RoofShapeName;
                    for (let type in PropertyInfo.RoofShape){
                        if(PropertyInfo.RoofShape[type].value == +quoteData.RoofGeometryType){
                            RoofShapeName = type
                        }
                    }
                    if (RoofShapeName){
                        dispatch(dispatchSelectedRoofStyle(RoofShapeName))
                    }
                }

                if(quoteData.HomeFeatures1){
                    let feature = getHomeFeature(quoteData, 'HomeFeatures1')
                    quoteData[feature] = true
                    quoteData[`${feature}SqFt`] = getHomeFeatureSqFt(quoteData, 'HomeFeatures1')
                }

                if(quoteData.HomeFeatures2){
                    let feature = getHomeFeature(quoteData, 'HomeFeatures2')
                    quoteData[feature] = true
                    quoteData[`${feature}SqFt`] = getHomeFeatureSqFt(quoteData, 'HomeFeatures2')
                }

                if(quoteData.HomeFeatures3){
                    let feature = getHomeFeature(quoteData, 'HomeFeatures3')
                    quoteData[feature] = true
                    quoteData[`${feature}SqFt`] = getHomeFeatureSqFt(quoteData, 'HomeFeatures3')
                }

                // if(quoteData.LastQuoteSectionPageId){
                //     history.push(`/section=${quoteData.LastQuoteSectionPageId.split('.')[0]}&step=${quoteData.LastQuoteSectionPageId}`)
                //     return dispatch(setDataFields(quoteData))
                // }


                return dispatch(setDataFields(quoteData))
            }
        })
        .catch(err => {
            console.log(err)
            exceptionHandler(err)
        })

}

export const updateWithCoverageA = (values) => (dispatch, getState) => {
    const { config, session } = getState()
    let nextPage;

    if(values.LastQuoteSectionPageId != '1.1'){
        if (values.LastQuoteSectionPageId == '2.1'){
            if (values[TermNames.NumberOfClaims] > 0 && values[TermNames.NumberOfClaims] <= 3) {
                nextPage = '/section=2&step=2.2'
            }
            else {
                nextPage = '/section=3&step=3.1'
            }

        }
        else if (values.LastQuoteSectionPageId == '3.4'){
            if(config.Product_State == 'FL'){
                nextPage = '/section=4&step=4.1'
            }
            else {
                nextPage = '/section=3&step=3.5'
            }
        }
        else {
            let pageIndex = config.steps.indexOf(values.LastQuoteSectionPageId)
            nextPage = '/section=' + config.steps[pageIndex + 1].split('.')[0] + '&step=' + config.steps[pageIndex + 1]
        }

        history.push(nextPage)
    }

        return dispatch(updateQuote(values))
        .then(() => {
            return dispatch(dispatchGenerateSavedQuote(session.sessionId, 'preferred'))
        })
        .catch(err => {
            console.log('problem in submit update', err)
        })

}

export const dispatchGenerateSavedQuote = (sessionId, quoteType) => (dispatch, getState) => {
    const {session, quotes } = getState()
    sessionId = sessionId || session.sessionId
    let quoteDataArray = quotes[`${quoteType}QuoteTemp`]
    dispatch(setSaveQuote(false))

    return generateSavedQuote(sessionId, quoteDataArray)
        .then(res=>res.data)
        .then(data => {
            if(data.exception != null) {
                exceptionHandler(data)
            }
            let coverageA = data.responseDataPayload.CoverageA || data.responseDataPayload.CoverageADisplay || data.responseDataPayload.CalculatedCoverageA

             dispatch(setDataFields({CoverageA: coverageA}))
            dispatch(setSaveQuote(true))
        })
        .catch(err => {
            exceptionHandler()
            console.log('error in generate saved quote', err )
        })

}

export const finishQuote = (values) => (dispatch, getState) => {
        return dispatch(updateQuote(values))

    .then(() => {

        window.location.href = 'viewquote.html'

    })
    .catch(err => {
        console.log('problem in submit update', err)
        exceptionHandler()
    })
}


export const submitQuote = (values) => (dispatch, getState) => {
    const {defaultData} = getState()
    dispatch(setIsSaving(true))


    dispatch(once(state => state.session.saveQuote, ()=>finishQuote(values)))

}

export const cancelQuote = (values) => (dispatch, getState) => {

    const { session } = getState()

    clearSessionCookie()
    terminateIqsSession(session.sessionId)
        .then(() => {
            window.location.href = 'https://www.geico.com'
        })


}