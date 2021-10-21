import { POST_USER_DATA, POST_USER_ERROR, POST_USER_SUCCESS } from "./userTypes"
import axios from 'axios'

export const postUserData = () => {
    return {
        type : POST_USER_DATA
    }
}

export const postUserSuccess = data =>{
    return {
        type : POST_USER_SUCCESS,
        payload : data
    }
}

export const postUserFailure = error => {
    return {
        type : POST_USER_ERROR,
        payload : error
    }
}

export const postUser = data => {
    return async (dispatch)=>{
        dispatch(postUserData)
        await axios.post('http://localhost:8888/user/signIn', data)
            .then((response) => {
                const responseData = response.data
                console.log(response.data)
                dispatch(postUserSuccess(responseData))
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(postUserFailure(errorMessage));
            })
    }
}