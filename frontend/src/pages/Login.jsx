import React, { useContext} from 'react';
import { Link, Navigate } from 'react-router-dom';
import AuthContext from '../action/AuthContext';

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 0 && loginUser(username, password);
    }

    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        id='username'
                        placeholder='Username'
                        name='username'
                    />
                </div>
                <br />
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        id='password'
                        placeholder='Password'
                        name='password'
                    />
                </div>
                <br/>
                <p >
                    <Link className='text-decoration-none' to='/reset-password'>Forgot password?</Link>
                </p>
                <button className='btn btn-primary' type='submit'>Login</button>
                </form>

                <br/>

                <p className='mt-3'>
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </p>
                {/* <p className='mt-3'>
                    Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
                </p> */}
            </div>
    )
}


export default Login
