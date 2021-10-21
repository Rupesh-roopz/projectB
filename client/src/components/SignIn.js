import React, { useState } from "react"
import { connect } from 'react-redux'
import { postUser } from '../redux/users/userActions'

const SignIn = (props) => {
    const [name, setName ] = useState('Rupesh');
    const [email, setEmail] = useState('test@mail.com');
    const [password, setPassword] = useState('Hello');
    const [passwordVerify, setPasswordVerify] = useState('Hello');
    const [phoneNumber, setPhoneNumber] = useState('9898989898');
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('')

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        await props.postUserData( {
            name,email,password,passwordVerify,phoneNumber
        })
        console.log(props.userDataResponse.id)
    }

    const handleOnChange = e => {
        setFile(e => e.target.files[0])
        setFileName(e => e.target.files[0].name)
    }

    return(
        <div className='container-fluid d-flex justify-content-center align-items-center signIn-mainDiv'>
            <div className='row'>
                <form onSubmit = {handleOnSubmit}>
                    <div className='row mb-3'>
                        <label htmlFor='customFile'>{fileName}</label>
                        <input type='file' id='customFile' onChange={handleOnChange}/>
                    </div>

                    <div className='mb-3 row'>
                        <label className='col-4  col-form-label'>Name</label>
                        <div className='col-auto'>
                            <input 
                                type='text' 
                                className='form-control'
                                value={name}
                                onChange={e=>setName(e.target.value)}
                            />
                        </div> 
                    </div>
                    <div className='mb-3 row'>
                        <label className='col-4 col-form-label'>Email</label>
                        <div className='col-auto'>
                            <input 
                                type='text' 
                                className='form-control'
                                value={email}
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </div> 
                    </div>
                    <div className='mb-3 row'>
                        <label className='col-4  col-form-label'>Password</label>
                        <div className='col-auto'>
                            <input 
                                type='text' 
                                className='form-control'
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div> 
                    </div>
                    <div className='mb-3 row'>
                        <label className='col-4 col-form-label'>Re-enter Password</label>
                        <div className='col-auto'>
                            <input 
                                type='text' 
                                className='form-control'
                                value={passwordVerify}
                                onChange={e=>setPasswordVerify(e.target.value)}
                            />
                        </div> 
                    </div>
                    <div className='mb-3 row'>
                        <label className='col-auto col-form-label'>Phone Number</label>
                        <div className='col-auto'>
                            <input 
                                type='text' 
                                className='form-control'
                                value={phoneNumber}
                                onChange={e=>setPhoneNumber(e.target.value)}
                            />
                        </div> 
                    </div>
                    <div className='mb-3 row d-flex justify-content-center'>
                        <button className='btn btn-primary col-auto'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        userDataResponse : state.response
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postUserData : (data)=> dispatch(postUser(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn) 