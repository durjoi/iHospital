import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../../banner.svg';
import Service from './Service';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(response => response.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <section className="container">
                <div className="top_banner">
                    <div className="top_banner_content">
                        <h2>Welcome to iHospital</h2>
                        <p>Get the best online healthcare service from home</p>
                    </div>
                    <div>
                        <img src={banner} />
                    </div>
                </div>
            </section>

            <section className="container mt-5 mb-5">
                <div className="row">
                    {
                        services.map(service => <Service key={service.id} title={service.title} image={service.image} id={service.id} subtitle={service.subtitle}></Service>)
                    }
                    
                </div>
                
            </section>

        </div>
    );
};

export default Home;