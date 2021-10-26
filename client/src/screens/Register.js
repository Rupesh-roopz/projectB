import React from 'react'
import SignIn from '../components/SignIn'
import Login from '../components/Login.'

function Register() {
    return (
        <div className='container Landing-mainDiv d-flex justify-content-lg-around'>
            <div className='logIn-component col-md-4'>
                <Login />
            </div>
            <div className='signUp-component col-md-6'>
                <SignIn />
            </div>
        </div>
    )
}

export default Register
