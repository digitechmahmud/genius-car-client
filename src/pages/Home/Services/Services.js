import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    
    return (
        <div>
            <h2 className='text-2xl font-bold text-orange-700 text-center mb-5'>Services</h2>
            <h3 className='text-5xl font-bold text-center mb-5'>Our Service Area</h3>
            <p className='text-center mb-10'>
                the majority have suffered alteration in some form, by injected humour, or<br/> randomised words which don't look even slightly believable. 
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ml-8'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;