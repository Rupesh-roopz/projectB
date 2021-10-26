import { 
    POST_USER_DATA,
    POST_USER_ERROR,
    POST_USER_SUCCESS,
    FETCH_USER_DATA,
    FETCH_USER_ERROR,
    FETCH_USER_SUCCESS
} from "./userTypes"
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

export const fetchUserData = () => {
    return {
        type : FETCH_USER_DATA
    }
}

export const fetchUserSuccess = data =>{
    return {
        type : FETCH_USER_SUCCESS,
        payload : data
    }
}

export const fetchUserFailure = error => {
    return {
        type : FETCH_USER_ERROR,
        payload : error
    }
}

export const postUser = data => {
    return (dispatch)=>{
        dispatch(postUserData)
        axios.post('http://localhost:8888/user/signin', data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(async (response) => {
                const responseData = response.data
                console.log(response.data)
                await dispatch(postUserSuccess(responseData))
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(postUserFailure(errorMessage));
            })
    }
}

export const fetchUser = data => {
    return (dispatch) => {
        dispatch(fetchUserData)
        axios.post('http://localhost:8888/user/login', data)
            .then((response) => {
                const responseData = response.data
                sessionStorage.setItem('userInfo',responseData)
                dispatch(fetchUserSuccess(responseData));
                console.log(response.status);
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(fetchUserFailure(errorMessage));
            })
    }
}