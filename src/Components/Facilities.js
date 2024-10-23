import Banner from "./Banner";
import buildingImg from "../assets/building.jpg";
import Facility from "./Facility";
import { FACILITIES_DATA, OTHER_FAC } from "../utils/constants";
import OtherFacilities from "./OtherFacilities";

const Facilities = () => {
    return (
        <div className="w-full min-h-[50vh] px-28 py-7">
            <Banner bannerImg={buildingImg} />
            <h3 className="text-4xl font-light font-serif text-center py-12">Facilities at TGI Grand Fortuna, Hosur</h3>
            <div className="flex items-center justify-start gap-5 flex-wrap">
                {FACILITIES_DATA.map((item) => (
                    <Facility key={item.id} item={item} />
                ))}
            </div>
            <div className="py-10 mt-20 flex justify-evenly items-center gap-20 bg-zinc-200 rounded-xl">
                {OTHER_FAC.map(item => (
                    <OtherFacilities item={item} />
                ))}
            </div>
        </div>
    );
}

export default Facilities;