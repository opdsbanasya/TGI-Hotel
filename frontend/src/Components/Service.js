import React from 'react';

const Service = ({service, about}) => {

    return (
        <div className={`w-full h-[50%] flex ${about ? "":"px-32"} py-10 justify-center items-center gap-20 ${service?.id%2 === 0 && "flex-row-reverse"}`}>
            <div className="w-1/2 space-y-5">
                <h2 className="text-4xl font-serif text-justify">{service?.title}</h2>
                <p className="text-sm text-justify font-light">{service?.description}</p>
            </div>
            <div className="w-1/2">
                <img className=" rounded-lg h-full shadow-2xl aspect-[5/3]" src={service?.img}></img>
            </div>
        </div>
    );
}

export default Service;
