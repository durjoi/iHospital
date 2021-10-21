import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../Hooks/useService';
// import { useParams } from 'react-router-dom';

const Service = () => {
    const {services, getService} = useService();
    
    
    const {id} = useParams();

    let item = getService(id);


    return (
        
        <div>
            <section className="container">
                <div className="top_banner" style={{ height: '100vh' }}>
                    <div className="top_banner_content pe-3">
                        <h2>{item?.title}</h2>
                        <p>{item?.detail}</p>
                    </div>
                    <div>
                        <img src={item?.image} />
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Service;