

/* -----------------    ACTIONS     ------------------ */
export const CHANGE_LOCATION = 'CHANGE_LOCATION'
/* ------------   ACTION CREATORS     ------------------ */

export const changeLocation = (location) => ({ type: CHANGE_LOCATION, location })
/* ------------       REDUCERS     ------------------ */

const initialState = {
    location: window.location.hash
}

export default function reducer(prevState = initialState, action) {
    const newState = Object.assign({}, prevState)
    switch (action.type) {
        case CHANGE_LOCATION:
            newState.location = action.location
            break

        default:
            return prevState
    }
    return newState
}

/* ------------       DISPATCHERS     ------------------ */