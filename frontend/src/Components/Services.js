import React from 'react';
import { SERVICES } from '../utils/constants';
import Service from './Service';

const Services = ({about}) => {
    console.log(SERVICES);

    return (
        <div className={`w-full mx-auto min-h-screen ${about && "pt-16"}`}>
            {about ? (
                <Service key={SERVICES[0].id} service={SERVICES[0]} about={about && about} />
            ):(
                SERVICES.map((service) => (
                    <Service key={service.id} service={service}/>
                ))
            )}
        </div>
    );
}

export default Services;
