import { IoMdCall, IoMdMail } from "react-icons/io";
import logo from "../assets/logo.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LOGO } from "../utils/constants";

const Footer = () => {
    return (
        <>
            <div className="w-full py-10 px-28 flex justify-center items-center bg-gradient-to-r from-slate-950">
                <div className="w-3/12">
                    <img src={LOGO} className="" />
                </div>
                <div className="w-4/12 space-y-5 text-xl">
                    <h4 className="text-2xl font-semibold">Contact Us</h4>
                    <h4 className="flex items-center gap-3 mr-10 cursor-pointer"><IoMdMail className="bg-gray-400 size-6 p-1 rounded-full" />
                        appleinn@tgihotels.com</h4>
                    <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-gray-400 size-6 p-1 rounded-full" />
                        +91 14 1486 0090 </h4>
                    <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-gray-400 size-6 p-1 rounded-full" />
                        180 0258 3100</h4>
                </div>
                <div className=" w-4/12 space-y-5 text-xl">
                    <h4 className="text-2xl font-semibold">Get In Touch</h4>
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                    <FaXTwitter />
                </div>
            </div>
        </>
    );
}

export default Footer;
