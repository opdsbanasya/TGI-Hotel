
import Address from "./Address";
import Carousel from "./Carousel";
import Services from "./Services";

const Body = () => {
    return (
        <div className="overflow-hidden w-screen">
            <Carousel />
            <Address />
            <Services />
        </div>
    );
}

export default Body;
