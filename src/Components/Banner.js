import React from 'react';
import banner from "../assets/building-view.jpg"

const Banner = ({ bannerImg }) => {
    return (
        <div className='w-full h-[80vh] mx-auto overflow-hidden rounded-xl'>
            <img className="w-full h-full scale-110 object-cover object-bottom" src={bannerImg ? bannerImg : banner} />
        </div>
    );
}

export default Banner;
