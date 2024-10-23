import React from 'react';
import { SERVICES } from '../utils/constants';
import Service from './Service';

const Services = ({about}) => {
    console.log(SERVICES);

    return (
        <div className={`w-full mx-auto min-h-screen ${about && "pt-16"}`}>
            {SERVICES.map((service) => (
                <Service key={service.id} service={service} about={about && about} />
            ))}
        </div>
    );
}

export default Services;
