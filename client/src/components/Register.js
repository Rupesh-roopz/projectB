import React, { useState } from "react"
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { postUser } from '../redux/users/userActions'

const Register = ({postUserData, userDataResponse}) => {
    const [name, setName ] = useState('Rupesh');
    const [email, setEmail] = useState('test@mail.com');
    const [password, setPassword] = useState('Hello');
    const [passwordVerify, setPasswordVerify] = useState('Hello');
    const [phoneNumber, setPhoneNumber] = useState('9898989898');
    const [file, setFile] = useState()
    let history = useHistory();

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('profileImage', file)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('passwordVerify', passwordVerify)
        formData.append('phoneNumber', phoneNumber)

        await postUserData(formData)

        if(userDataResponse !== undefined)
        console.log(userDataResponse)
    }

    return(
        <div className='container 
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
                    <form className="forms" onSubmit = {handleOnSubmit}>
                        <div className='row mb-3'>
                            <input type='file'
                            accept=".png, .jpg, .jpeg" 
                            id='customFile' 
                            onChange={e => setFile(e.target.files[0])}/>
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
                        <div className='mb-5 row'>
                            <label className='col-4 col-form-label'>Phone Number</label>
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
                            <button 
                                className='btn btn-primary col-auto'
                                type='submit'
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className='card-footer'>
                            <p>Already on Project-B? 
                                <span 
                                    className = 'linkTag' 
                                    onClick={()=>history.push('/')}
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register) 