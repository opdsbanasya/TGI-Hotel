import Banner from "./Banner";
import buildingImg from "../assets/building.jpg";
import Facility from "./Facility";
import { FACILITIES_DATA } from "../utils/constants";

const Facilities = () => {
    return (
        <div className="w-screen min-h-[50vh] px-28 py-7">
            <Banner bannerImg={buildingImg} />
            <h3 className="text-4xl font-light font-serif text-center py-12">Facilities at TGI Grand Fortuna, Hosur</h3>
            <div className="flex items-center justify-start gap-5 flex-wrap">
                {FACILITIES_DATA.map((item)=>(
                    <Facility item={item} />
                ))}
            </div>
        </div>
    );
}

export default Facilities;