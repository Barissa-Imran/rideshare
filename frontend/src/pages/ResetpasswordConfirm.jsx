import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reset_password_confirm } from '../action/auth';
import Axios from 'axios';

const ResetPasswordConfirm = (props) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        re_new_password: ''
    });

    let { token } = useParams();

    let newToken = /token\s*=\s*(.*)/.exec(token)

    const { password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const reset_password_confirm = (token, password, re_new_password) => {

        try {
            Axios.post(
                "/api/auth/users/reset_password/confirm/", {
                    password: password,
                    token: newToken[1],
                }
            ).then(response => {
                alert("Password reset succeful.")
                Navigate("/login");
            })
                .catch(error => {
                    alert(`Oops! Something went wrong. ${error.message}: Token not found or is already used`)
                })


        } catch (err) {
            alert("Failed! contact admin")
        }
    };

    const onSubmit = e => {
        e.preventDefault();

        reset_password_confirm(token, password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        // return <Navigate to='/' />
    }

    return (
        <div className='container mt-5'>
            <h2>Enter new password</h2>
            <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <br />
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <p className='text-danger'>{password !== re_new_password ? "Passwords do not match" : ""}</p>
                <button className='btn btn-primary my-3' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordConfirm;
