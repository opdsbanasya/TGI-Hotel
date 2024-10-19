import React from 'react';
import CarouselBack from './CarouselBack';
import CarouselTitle from './CarouselTitle';

const Carousel = () => {
    return (
        <div className='max-w-[100vw] xm:max-h-[50vh] mx-auto '>
            <CarouselBack />
            <CarouselTitle />
        </div>
    );
}

export default Carousel;
