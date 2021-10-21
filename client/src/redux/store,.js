import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'
import { userReducer } from "./users/userReducers"

const store = createStore(userReducer, applyMiddleware(thunk))

export default store