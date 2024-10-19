import React from 'react';
import { SERVICES } from '../utils/constants';
import Service from './Service';

const Services = () => {
    console.log(SERVICES);

    return (
        <div className='w-[100vw] mx-auto min-h-screen'>
            {SERVICES.map((service) => (
                <Service key={service.id} service={service} />
            ))}
        </div>
    );
}

export default Services;
