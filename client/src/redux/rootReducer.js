import { combineReducers  } from "redux"
import { userReducer } from "./users/userReducers"

export const rootReducer = combineReducers({
    user : userReducer
})
    