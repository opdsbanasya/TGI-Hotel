import React from 'react';

const Service = ({service}) => {

    return (
        <div className={`w-full h-[50%] flex px-28 py-10 mb-10  justify-center items-center gap-10 ${service?.id%2 === 0 && "flex-row-reverse"}`}>
            <div className="w-1/2 space-y-5">
                <h2 className="text-4xl font-serif w-[80%]">{service?.title}</h2>
                <p className="text-sm w-[80%] font-light">{service?.description}</p>
            </div>
            <div className="w-1/2">
                <img className=" rounded-lg h-full shadow-2xl aspect-[4/3]" src={service?.img}></img>
            </div>
        </div>
    );
}

export default Service;
