import React, { useState , useEffect} from 'react';
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AuthContext from '../action/AuthContext';

const Signup = () => {

    const [username, setUsername]  = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const {registerUser} = useContext(AuthContext);
    
    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, password,password2);

    };

  return (
    <div className='container mt-5'>
    <h1>Sign Up</h1>
    <p>Create your Account</p>
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
                className='form-control'
                type='text'
                id='username'
                onChange={e => setUsername(e.target.value)}
                placeholder='Username*'
                name='first_name'
                required
            />
        </div>
        <br />
        <br />
        <br />
        <div className='form-group'>
            <input
                className='form-control'
                type='password'
                id='password'
                placeholder='Password*'
                onChange={e => setPassword(e.target.value)}
                required
            />
        </div>
        <br />
        <div className='form-group'>
            <input
                className='form-control'
                type='password'
                id='confirm-password'
                placeholder='Confirm Password*'
                onChange={e => setPassword2(e.target.value)}
                required
            />
            <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <br />
        <button className='btn btn-primary' type='submit'>Register</button>
    </form>
   
    <br />
   
    <p className='mt-3'>
        Already have an account? <Link to='/login'>Sign In</Link>
    </p>
</div>
  );
};

export default Signup