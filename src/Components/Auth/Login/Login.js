import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {user, signInUsingGoogle, signInUsingEmail, logOut} = useAuth();
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const location = useLocation();
    const history = useHistory()

    const redirect_uri = location.state?.from || '/';
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        signInUsingEmail(email, password);
        setEmail('');
        setPassword('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirect_uri);
        }).catch(function (error) {
            console.error(error);
          });
    }

    return (
        <div>
            <h1>Login - {user.email}</h1>

            <form onSubmit={handleFormSubmit}>
            <input type="email" onChange={handleEmailChange} value={email} required/>
                <br/>
                <input type="password" onChange={handlePasswordChange} value={password} required/>
                <br/>
                <input type="submit" value="Submit" />
                <p>New to iHospital? <Link to='/register'>Create New Account</Link></p>
            </form>

            <button onClick={handleGoogleLogin}>Google Signin</button>

            <button onClick={logOut}>Log Out</button>
            <Link to='/booking'>Booking</Link>
        </div>
    );
};

export default Login;