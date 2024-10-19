import React from 'react';
import CarouselBack from './CarouselBack';
import CarouselTitle from './CarouselTitle';

const Carousel = () => {
    return (
        <div className='max-w-[100vw] md:max-h-[50vh] mx-auto relative'>
            <CarouselBack />
            <CarouselTitle />
        </div>
    );
}

export default Carousel;
