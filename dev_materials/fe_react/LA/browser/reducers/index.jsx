import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as idleReducer } from 'redux-promises'

const rootReducer = combineReducers({
    config: require('./config.jsx').default,
    session: require('./session.jsx').default,
    defaultData: require('./defaultData.jsx').default,
    popups: require('./popups.jsx').default,
    homeFeatures: require('./homeFeatures.jsx').default,
    quotes: require('./quotes.jsx').default,
    form,
    idle: idleReducer
})

export default rootReducer
