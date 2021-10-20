import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const handleFormSubmit = () => {
        console.log('formsubmitted');
    }

    return (
        <div>
            <h1>Registration</h1>

            <form onSubmit={handleFormSubmit}>
                <input type="email" Placeholder="Your Email" />
                <br/>
                <input type="password" />
                <br/>
                <input type="submit" value="Submit" />
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>

            <button>Google Signin</button>
        </div>
    );
};

export default Registration;