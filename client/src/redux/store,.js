import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'
import { userReducer } from "./users/userReducers"

const initialState = {
    userLogin : {
        response : sessionStorage.getItem('userInfo')
    }
} 


const store = createStore(userReducer, initialState, applyMiddleware(thunk))

export default store