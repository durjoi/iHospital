import React from 'react';
import './Home.css';
import banner from '../../banner.svg';
import covid19 from '../../covid19.jpeg'
import Item from './Item';
import useService from '../../Hooks/useService';

const Home = () => {
    const {services} = useService();

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
                        services.map(service => <Item key={service.id} title={service.title} image={service.image} id={service.id} subtitle={service.subtitle}></Item>)
                    }
                    
                </div>
                
            </section>

            <section className="bg-light pt-5 pb-5 " style={{ height: '400px' }}>
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-12 h-100">
                        <div className="specialities d-flex align-items-center h-100">
                            <div className="specialities_title text-center">
                                <h2>24 Hours Telemedicine Service: Online Doctors in Bangladesh</h2>
                                <p>Telemedicine is a service that can help a patient/ doctor/ hospital in a remote location to consult with a Super Specialist at Jewmch Hospital, using ICT (Information and Communication Technology) for the purpose of Diagnosis, Treatment, Second Opinion, or Follow-up.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
                
            </section>

            <section className="container pb-5 pt-5">
                <div className="top_banner">
                <h1 className="title text-center">Get Covid 19 Vaccine from your home</h1>
                <div className="d-flex justify-content-center align-items-center w-100">
                        <img src={covid19} style={{ height: 'auto' }} />
                    </div>
                    <div className="top_banner_content w-100 text-left">
                        <p>
                        Equitable access to safe and effective vaccines is critical to ending the COVID-19 pandemic, so it is hugely encouraging to see so many vaccines proving and going into development. WHO is working tirelessly with partners to develop, manufacture and deploy safe and effective vaccines. 

Safe and effective vaccines are a game-changing tool: but for the foreseeable future we must continue wearing masks, cleaning our hands, ensuring good ventilation indoors, physically distancing and avoiding crowds. 

Being vaccinated does not mean that we can throw caution to the wind and put ourselves and others at risk, particularly because research is still ongoing into how much vaccines protect not only against disease but also against infection and transmission.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;