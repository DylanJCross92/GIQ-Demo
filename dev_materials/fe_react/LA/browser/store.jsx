import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index.jsx'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createMiddleware } from 'redux-promises'
import  middleware  from 'redux-when'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      middleware,
      thunkMiddleware
    )
  )
)

export default store


