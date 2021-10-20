import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-5 pb-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>iHospital</h2>
                        <p>Bangladesh first online hospital with premium services</p>
                    </div>
                    <div className="col-md-6 text-end">
                        copyright @ 2021 - Alright Reserved by iHospital
                    </div>    
                </div>            
            </div>
        </div>
    );
};

export default Footer;