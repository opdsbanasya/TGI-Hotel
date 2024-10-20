import React from 'react';

const Banner = ({bannerImg}) => {
    return (
        <div className='w-full h-[80vh] mx-auto overflow-hidden rounded-xl'>
            <img className="w-full h-full scale-110 object-cover object-bottom" src={bannerImg} />
        </div>
    );
}

export default Banner;
