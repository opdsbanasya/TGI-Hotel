import { IoMdCall, IoMdMail } from "react-icons/io";
import { CONTACT_INFO } from "../utils/constants";

const ContactInfo = () => {
    return (
        <div className="flex justify-between w-[80%] mx-auto py-10 mt-10">
            <h3 className="text-3xl font-semibold font-serif text-center text-black">Contact Info</h3>
            <div>
                <h4 className="w-full flex items-center justify-between gap-28 mr-10 cursor-pointer text-2xl py-4 border-y-2 border-zinc-500 border-spacing-1  "><IoMdMail className="bg-black text-white size-10 p-1 rounded-full" />
                    {CONTACT_INFO?.email}</h4>
                <h4 className="w-full flex items-center justify-between gap-28 cursor-pointer text-2xl py-4 border-b-2 border-zinc-500 border-spacing-1  "><IoMdCall className="bg-black text-white size-10 p-1 rounded-full" />
                    {CONTACT_INFO?.phone1} </h4>
                <h4 className="w-full flex items-center justify-between gap-28 cursor-pointer text-2xl py-4 border-b-2 border-zinc-500 border-spacing-1  "><IoMdCall className="bg-black text-white size-10 p-1 rounded-full" />
                    {CONTACT_INFO?.phone2}</h4>
            </div>

        </div>
    );
}

export default ContactInfo;
