import { useEffect, useState } from "react";
import { CAROUSEL_IMG } from "../utils/constants";

const CarouselBack = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === CAROUSEL_IMG.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000);

        return () => clearInterval(slideTimer);
    }, []);

    return (
        <div className="overflow-hidden">
            <img
                src={CAROUSEL_IMG[currentSlide]}
                className="min-w-full h-[100vh] object-cover object-center"
            />
        </div>
    );
};

export default CarouselBack;
