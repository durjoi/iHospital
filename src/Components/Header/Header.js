import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">iHospital.</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                        </li>
                        {
                            !user.email &&  <li className="nav-item">
                            <NavLink className='nav-link' to='/login'>Login</NavLink>
                            </li>
                        }
                        {
                            !user.email &&  <li className="nav-item">
                            <NavLink className='nav-link' to='/register'>Register</NavLink>
                            </li>
                        }

                        {
                            user.email &&  <li className="nav-item">
                            <button className='nav-link' onClick={logOut}>Logout</button>
                            </li>
                        }
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Header;