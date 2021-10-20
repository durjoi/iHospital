import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const {user, signInUsingGoogle} = useFirebase();
    
    const handleFormSubmit = () => {
        console.log('formsubmitted');
    }

    return (
        <div>
            <h1>Login - {user.displayName}</h1>

            <form onSubmit={handleFormSubmit}>
                <input type="email" placeholder="Your Email" />
                <br/>
                <input type="password" />
                <br/>
                <input type="submit" value="Submit" />
                <p>New to iHospital? <Link to='/register'>Create New Account</Link></p>
            </form>

            <button onClick={signInUsingGoogle}>Google Signin</button>
        </div>
    );
};

export default Login;