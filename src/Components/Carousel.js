import React from 'react';
import CarouselBack from './CarouselBack';
import CarouselTitle from './CarouselTitle';

const Carousel = () => {
    return (
        <div className='max-w-[90vw] max-h-[100vh] mx-auto relative'>
            <CarouselBack />
            <CarouselTitle />
        </div>
    );
}

export default Carousel;
