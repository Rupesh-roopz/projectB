import { POST_USER_DATA, POST_USER_ERROR, POST_USER_SUCCESS } from "./userTypes"

const initialState = {
    loading : false,
    response : {},
    error : ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_USER_DATA : 
            return {
                ...state,
                loading : true
            }
        case POST_USER_SUCCESS : 
            return {
                ...state,
                response : action.payload,
                loading : false
            }
        case POST_USER_ERROR : 
        return {
            ...state,
            error : action.payload,
            loading : false
        }
        default : return state
    }
}