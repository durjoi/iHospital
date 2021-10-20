import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {user, signInUsingGoogle, signInUsingEmail, logOut} = useAuth();
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
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

            <button onClick={signInUsingGoogle}>Google Signin</button>

            <button onClick={logOut}>Log Out</button>
        </div>
    );
};

export default Login;