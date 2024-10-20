import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { LOGO } from "../utils/constants";

const Footer = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className="w-full py-10 px-28 flex justify-center items-center ">
                <div className="w-3/12">
                    <img src={LOGO} className="" />
                </div>
                <div className="w-4/12 ml-28 mr-14 space-y-5 text-xl">
                    <h4 className="text-2xl">Contact Us</h4>
                    <h4 className="flex items-center gap-3 mr-10 cursor-pointer"><IoMdMail className="bg-white text-black size-6 p-1 rounded-full" />
                        appleinn@tgihotels.com</h4>
                    <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-white text-black size-6 p-1 rounded-full" />
                        +91 14 1486 0090 </h4>
                    <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-white text-black size-6 p-1 rounded-full" />
                        180 0258 3100</h4>
                </div>
                <div className=" w-4/12 space-y-5 text-xl">
                    <h4 className="text-2xl">Get In Touch</h4>
                    <FaFacebook className="cursor-pointer" /> 
                    <FaInstagram className="cursor-pointer" />
                    <FaLinkedin className="cursor-pointer" />
                    <FaXTwitter className="cursor-pointer" />
                </div>
            </div>
            <h5 className="w-full text-lg text-white mx-10 ">All Copyright &copy; Reserves</h5>
        </div> 
    );
}

export default Footer;
