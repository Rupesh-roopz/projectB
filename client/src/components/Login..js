import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../redux/users/userActions'

function Login(props) {
    let history = useHistory()
    const [ email, setEmail ] = useState('test@mail.com');
    const[ password, setPassword] = useState('Hello');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = {
            email : email,
            password : password
        }
        props.fetchUserData(data)
        console.log(props.userDataResponse)
    }

    return (<div className='container-fluid 
                            d-flex 
                            justify-content-center 
                            align-items-center 
                            Landing-mainDiv'
            >
            <div className='card'>
                <div className='card-header'>
                    <h2>Project B</h2>
                </div>
                <div className='card-body'>
                    <form className="forms" onSubmit={handleOnSubmit}> 
                        <div className=' row mb-3'>
                            <label 
                                htmlFor='loginEmail'
                                className='col-4'
                            >
                                Email
                            </label>
                            <input 
                                type='text'
                                className='col-8'
                                id='loginEmail'
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='row mb-4'>
                            <label 
                                htmlFor='loginPassword' 
                                className='col-4'
                            >
                                password
                            </label>
                            <input 
                                type='password'
                                className='col-8'
                                id='loginPassword'
                                value={password}
                                onChange={ e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mb-3 row d-flex justify-content-center'>
                            <button 
                                className='btn btn-primary col-auto'
                                type='submit'
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
                <div className='card-footer'>
                    <p>Sign up for 
                        <span 
                            className = 'linkTag' 
                            onClick={()=>history.push('/signin')}
                        >
                            Project B
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userDataResponse : state.userLogin.response
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        fetchUserData : data => dispatch(fetchUser(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
