import { IoMdCall, IoMdMail } from "react-icons/io";
import homeBg from "../assets/home1.png";
import { CONTACT_INFO } from "../utils/constants";

const Address = () => {
    return (
        <div style={{backgroundImage:`url(${homeBg}})`}} className="w-full text-center font-light my-16 py-10 space-y-4">
            <h2 className="text-4xl font-light font-serif">{CONTACT_INFO?.name}</h2>
            <p className="">{CONTACT_INFO?.address}</p>
            <div className="flex justify-center gap-8">
                <h4 className="flex items-center gap-3 mr-10 cursor-pointer"><IoMdMail className="bg-black text-white size-6 p-1 rounded-full" />                     
                    {CONTACT_INFO?.email}</h4>
                <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-black text-white size-6 p-1 rounded-full" />
                    {CONTACT_INFO?.phone1} </h4>
                <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-black text-white size-6 p-1 rounded-full" />
                    {CONTACT_INFO?.phone2}</h4>
            </div>
            <div className="flex justify-center gap-5 text-sm">
                <p><strong>Check-in Time: </strong>12:00PM</p>
                <p><strong>Check-out Time: </strong>11:00AM</p>
            </div>
        </div>
    );
}

export default Address;