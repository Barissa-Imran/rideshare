import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reset_password } from '../action/auth';
import axios from 'axios';

const ResetPassword = () => {
    const [requestSent, setRequestSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const reset_password = (email) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ email });

        try {
            axios.post('api/auth/users/reset_password/', body, config).then(response => {
               alert("An email has been sent with instructions on how to reset your password!")
               navigate("/login");
            })
                .catch(error => {
                    alert("Your email might not exist in our database, please try again!")
                    console.log(error)
                })
        } catch (err) {
            console.log({
                type: 'PASSWORD_RESET_FAIL'
            });
        }
    };

    const onSubmit = e => {
        e.preventDefault();

        setIsLoading(true)
        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        //return Navigate to='/reset-password-done' />
    }

    return (
        <div className='container mt-5'>
            <h1>Request Password Reset:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='btn btn-primary my-2' type='submit'>{ isLoading ? "Sending..." :"Reset Password"}</button>
            </form>
        </div>
    );
};

export default ResetPassword;
