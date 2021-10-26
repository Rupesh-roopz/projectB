import * as user from "./userTypes"

// const initialState = {
//     loading : false,
//     response : {},
//     error : ''
// }

export const userReducer = (state = {} , action) => {
    switch (action.type) {
        case user.POST_USER_DATA : 
            return {
                ...state,
                loading : true
            }
        case user.POST_USER_SUCCESS : 
            return {
                ...state,
                response : action.payload,
                loading : false
            }
        case user.POST_USER_ERROR : 
            return {
                ...state,
                error : action.payload,
                loading : false
            }
        case user.FETCH_USER_DATA : 
            return {
                ...state,
                loading : true
            }
        case user.FETCH_USER_SUCCESS : 
            return {
                ...state,
                response : action.payload,
                loading : false
            }
        case user.FETCH_USER_ERROR : 
            return {
                ...state,
                error : action.payload,
                loading : false
            }

        default : return state
    }

}