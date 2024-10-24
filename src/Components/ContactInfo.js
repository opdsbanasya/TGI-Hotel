import { IoMdCall, IoMdMail } from "react-icons/io";

const ContactInfo = () => {
    return (
        <div className="flex justify-between w-[80%] mx-auto py-10 mt-10">
            <h3 className="text-3xl font-semibold font-serif text-center text-black">Contact Info</h3>
            <div>
                <h4 className="w-full flex items-center justify-between gap-28 mr-10 cursor-pointer text-2xl py-4 border-y-2 border-zinc-500 border-spacing-1  "><IoMdMail className="bg-black text-white size-10 p-1 rounded-full" />
                    appleinn@tgihotels.com</h4>
                <h4 className="w-full flex items-center justify-between gap-28 cursor-pointer text-2xl py-4 border-b-2 border-zinc-500 border-spacing-1  "><IoMdCall className="bg-black text-white size-10 p-1 rounded-full" />
                    +91 14 1486 0090 </h4>
                <h4 className="w-full flex items-center justify-between gap-28 cursor-pointer text-2xl py-4 border-b-2 border-zinc-500 border-spacing-1  "><IoMdCall className="bg-black text-white size-10 p-1 rounded-full" />
                    180 0258 3100</h4>
            </div>

        </div>
    );
}

export default ContactInfo;
