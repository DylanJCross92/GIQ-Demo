
/* -----------------    ACTIONS     -----------------*/
export const SET_ONLOAD_POPUP = 'SET_ONLOAD_POPUP'
export const TOGGLE_EDITING_CY = 'TOGGLE_EDITING_CY'
export const TOGGLE_EDITING_SF = 'TOGGLE_EDITING_SF'
export const TOGGLE_EDITING_FB = 'TOGGLE_EDITING_FB'
export const TOGGLE_EDITING_HB = 'TOGGLE_EDITING_HB'
export const TOGGLE_EDITING_FP = 'TOGGLE_EDITING_FP'
export const SET_HOMESTYLE_POP = 'SET_HOMESTYLE_POP'
export const SET_SELECTED_HOMESTYLE = 'SET_SELECTED_HOMESTYLE'
export const SET_ROOFTYPE_POP = 'SET_ROOFTYPE_POP'
export const SET_SELECTED_ROOFTYPE = 'SET_SELECTED_ROOFTYPE'
export const SET_ROOFSTYLE_POP = 'SET_ROOFTSTYLE_POP'
export const SET_SELECTED_ROOFSTYLE = 'SET_SELECTED_ROOFSTYLE'
export const SET_GARAGETYPE_POP = 'SET_GARAGETYPE_POP'
export const SET_SELECTED_GARAGETYPE = 'SET_SELECTED_GARAGETYPE'
export const SET_KITCHENGRADE_POP = 'SET_KITCHENGRADE_POP'
export const SET_BATHROOMGRADE_POP = 'SET_BATHROOMGRADE_POP'
export const SET_IS_SAVING = 'SET_IS_SAVING'
export const SET_IS_VALIDATING = 'SET_IS_VALIDATING'
export const SET_NAV_WARNING = 'SET_NAV_WARNING'
export const SET_INC_PAGE = 'SET_INC_PAGE'
export const SET_THANK_YOU = 'SET_THANK_YOU'
export const SET_IS_CANCELING = 'SET_IS_CANCELING'
/* ----------   ACTION CREATORS     ------------------ */

export const setOnLoadPopup = (onLoadPopup) => {return { type: SET_ONLOAD_POPUP, onLoadPopup } }
export const toggleEditingCY = () => ({type: TOGGLE_EDITING_CY})
export const toggleEditingSF = () => ({type: TOGGLE_EDITING_SF})
export const toggleEditingFB = () => ({type: TOGGLE_EDITING_FB})
export const toggleEditingHB = () => ({type: TOGGLE_EDITING_HB})
export const toggleEditingFP = () => ({type: TOGGLE_EDITING_FP})
export const setHomeStylePop = (homeStylePop) => ({type: SET_HOMESTYLE_POP, homeStylePop})
export const setSelectedHomeStyle = (selectedHomeStyle) => ({type: SET_SELECTED_HOMESTYLE, selectedHomeStyle})
export const setRoofTypePop = (roofTypePop) => ({type: SET_ROOFTYPE_POP, roofTypePop})
export const setSelectedRoofType = (selectedRoofType) => ({type: SET_SELECTED_ROOFTYPE, selectedRoofType})
export const setRoofStylePop = (roofStylePop) => ({type: SET_ROOFSTYLE_POP, roofStylePop})
export const setSelectedRoofStyle = (selectedRoofStyle) => ({type: SET_SELECTED_ROOFSTYLE, selectedRoofStyle})
export const setGarageTypePop = (garageTypePop) => ({type: SET_GARAGETYPE_POP, garageTypePop})
export const setSelectedGarageType = (selectedGarageType) => ({type: SET_SELECTED_GARAGETYPE, selectedGarageType})
export const setKitchenGradePop = (kitchenGradePop) => ({type: SET_KITCHENGRADE_POP, kitchenGradePop})
export const setBathroomGradePop = (bathroomGradePop) => ({type: SET_BATHROOMGRADE_POP, bathroomGradePop})
export const setIsSaving = (isSaving) => ({type: SET_IS_SAVING, isSaving})
export const setIsValidating = (isValidating) => ({type: SET_IS_VALIDATING, isValidating})
export const setNavWarning = (navWarning) => ({type: SET_NAV_WARNING, navWarning})
export const setIncPage = (incPage) => ({type: SET_INC_PAGE, incPage})
export const setThankYou = (thankYou) => ({type: SET_THANK_YOU, thankYou})
export const setIsCanceling = (isCanceling) => ({type: SET_IS_CANCELING, isCanceling})

/* ------------       REDUCERS     ------------------ */

const initialState = {
    onLoadPopup: true,
    editingCY: false,
    editingSF: false,
    editingFB: false,
    editingHB: false,
    editingFP: false,
    homeStylePop: false,
    selectedHomeStyle: '',
    roofTypePop: false,
    selectedRoofType: '',
    roofStylePop: false,
    selectedRoofStyle: '',
    garageTypePop: false,
    selectedGarageType: '',
    kitchenGradePop: false,
    bathroomGradePop: false,
    isSaving: false,
    isValidating: false,
    navWarning: false,
    incPage: false,
    thankYou: false,
    isCanceling: false


}

export default function sessionReducer(prevState = initialState, action) {

    const newState = Object.assign({}, prevState)

    switch (action.type) {

        case SET_IS_CANCELING:
            newState.isCanceling = action.isCanceling
            break

        case SET_THANK_YOU:
            newState.thankYou = action.thankYou
            break

        case SET_INC_PAGE:
            newState.incPage = action.incPage
            break

        case SET_NAV_WARNING:
            newState.navWarning = action.navWarning
            break

        case SET_IS_VALIDATING:
            newState.isValidating = action.isValidating
            break

        case SET_IS_SAVING:
            newState.isSaving = action.isSaving
            break

        case SET_KITCHENGRADE_POP:
            newState.kitchenGradePop = action.kitchenGradePop
            break

        case SET_BATHROOMGRADE_POP:
            newState.bathroomGradePop = action.bathroomGradePop
            break

        case SET_SELECTED_GARAGETYPE:
            newState.selectedGarageType = action.selectedGarageType
            break

        case SET_GARAGETYPE_POP:
            newState.garageTypePop = action.garageTypePop
            break

        case SET_SELECTED_ROOFSTYLE:
            newState.selectedRoofStyle = action.selectedRoofStyle
            break

        case SET_ROOFSTYLE_POP:
            newState.roofStylePop = action.roofStylePop
            break

        case SET_SELECTED_ROOFTYPE:
            newState.selectedRoofType = action.selectedRoofType
            break

        case SET_ROOFTYPE_POP:
            newState.roofTypePop = action.roofTypePop
            break

        case SET_SELECTED_HOMESTYLE:
            newState.selectedHomeStyle = action.selectedHomeStyle
            break

        case SET_HOMESTYLE_POP:
            newState.homeStylePop = action.homeStylePop
            break

        case TOGGLE_EDITING_SF:
            newState.editingSF = !newState.editingSF
            break

        case TOGGLE_EDITING_CY:
            newState.editingCY = !newState.editingCY
            break

        case TOGGLE_EDITING_FB:
            newState.editingFB = !newState.editingFB
            break

        case TOGGLE_EDITING_HB:
            newState.editingHB = !newState.editingHB
            break

        case TOGGLE_EDITING_FP:
            newState.editingFP = !newState.editingFP
            break


        case SET_ONLOAD_POPUP:
            newState.onLoadPopup = action.onLoadPopup
            break

        default:
            return prevState
    }
    return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const dispatchIsCanceling = (isCanceling) => (dispatch) => {
    return dispatch(setIsCanceling(isCanceling))
}

export const dispatchThankYou = (thankYou) => (dispatch) => {
    return dispatch(setThankYou(thankYou))
}

export const dispatchIncPage = (incPage) => (dispatch) => {
    return dispatch(setIncPage(incPage))
}

export const dispatchNavWarning = (navWarning) => (dispatch) => {
    return dispatch(setNavWarning(navWarning))
}

export const dispatchSetIsValidating = (isValidating) => (dispatch) => {
    return dispatch(setIsValidating(isValidating))
}

export const dispatchSetIsSaving = (isSaving) => (dispatch) => {
    return dispatch(setIsSaving(isSaving))
}

export const dispatchBathroomGradePop = (bathroomGradePop) => (dispatch) => {
    return dispatch(setBathroomGradePop(bathroomGradePop))
}

export const dispatchKitchenGradePop = (kitchenGradePop) => (dispatch) => {
    return dispatch(setKitchenGradePop(kitchenGradePop))
}

export const dispatchSelectedGarageType = (selectedGarageType) => (dispatch) => {
    dispatch(setGarageTypePop(false))
    return dispatch(setSelectedGarageType(selectedGarageType))
}

export const dispatchGarageTypePop = (garageTypePop) => (dispatch) => {
    return dispatch(setGarageTypePop(garageTypePop))
}

export const dispatchSelectedRoofType = (selectedRoofType) => (dispatch) => {
    dispatch(setRoofTypePop(false))
    return dispatch(setSelectedRoofType(selectedRoofType))
}

export const dispatchRoofTypePop = (roofTypePop) => (dispatch) => {
    return dispatch(setRoofTypePop(roofTypePop))
}

export const dispatchSelectedRoofStyle = (selectedRoofStyle) => (dispatch) => {
    dispatch(setRoofStylePop(false))
    return dispatch(setSelectedRoofStyle(selectedRoofStyle))
}

export const dispatchRoofStylePop = (roofStylePop) => (dispatch) => {
    return dispatch(setRoofStylePop(roofStylePop))
}

export const dispatchSelectedHomeStyle = (selectedHomeStyle) => (dispatch) => {
    dispatch(setHomeStylePop(false))
    return dispatch(setSelectedHomeStyle(selectedHomeStyle))
}

export const dispatchHomeStylePop = (homeStylePop) => (dispatch) => {
    return dispatch(setHomeStylePop(homeStylePop))
}

export const dispatchToggleCY = (event) => (dispatch) => {
    event.preventDefault()
    return dispatch(toggleEditingCY())
}

export const dispatchToggleSF = (event) => (dispatch) => {
    event.preventDefault()
    return dispatch(toggleEditingSF())
}

export const dispatchToggleFB = (event) => (dispatch) => {
    event.preventDefault()
    return dispatch(toggleEditingFB())
}

export const dispatchToggleHB = (event) => (dispatch) => {
    event.preventDefault()
    return dispatch(toggleEditingHB())
}

export const dispatchToggleFP = (event) => (dispatch) => {
    event.preventDefault()
    return dispatch(toggleEditingFP())
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

export const dispatchOnLoadPopup = (onLoadPopup) => (dispatch) => {
    dispatch(setOnLoadPopup(onLoadPopup))
}
