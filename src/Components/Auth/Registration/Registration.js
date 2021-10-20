import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Registration = () => {
    const {signUpUsingEmail} = useAuth();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        signUpUsingEmail(email, password);
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
            <h1>Registration</h1>

            <form onSubmit={handleFormSubmit}>
                <input type="email" onChange={handleEmailChange} value={email} required/>
                <br/>
                <input type="password" onChange={handlePasswordChange} value={password} required/>
                <br/>
                <input type="submit" value="Submit" />
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>

            <button>Google Signin</button>
        </div>
    );
};

export default Registration;