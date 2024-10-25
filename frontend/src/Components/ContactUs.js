import { useState } from 'react';
import Banner from './Banner';
import mainEntrance from "../assets/mainEntrance.jpg";
import { handleChange, handleSubmit } from '../utils/validateForm';
import ContactInfo from './ContactInfo';
const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});


    return (
        <div className="w-full min-h-[50vh] px-5 md:px-10 lg:px-20 xl:px-28 lg:pb-10 py-7">
            <Banner />
            <ContactInfo />
            <div className="text-center lg:text-left xl:w-[80%] w-[90%] mx-auto">
                <h2 className="lg:text-3xl text-2xl lg:mx-0 mx-auto font-semibold font-serif text-black lg:my-10 py-5 mt-3">
                    Reach out to Us
                </h2>
            </div>
            <div id="contact-form" className="flex flex-col lg:flex-row items-center justify-center bg-zinc-300 rounded-xl overflow-hidden">
                <div className="lg:w-1/2 w-full h-full">
                    <img className="aspect-square object-cover h-full" src={mainEntrance} alt="Main Entrance" />
                </div>
                <form onSubmit={(e) => handleSubmit(e, formData, setFormData, setErrors)} className="lg:w-1/2 w-full md:[80%] space-y-6 mx-auto px-10 py-5">
                    <h2 className="lg:text-lg text-sm font-semibold font-serif text-black">
                        Please! Fill your original Info, so we can reply to you.
                    </h2>
                    {['name', 'email', 'phone', 'message'].map((field, index) => (
                        <div key={field} className="flex flex-col gap-2">
                            <input
                                type={field === 'message' ? 'textarea' : field}
                                name={field}
                                id={field}
                                value={formData[field]}
                                onChange={(e) => handleChange(e, setFormData, formData[field])}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                className={`w-full px-4 py-3 rounded-md border ${errors[field] ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
                            />
                            {errors[field] && (
                                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-fit mx-auto bg-[#4CC9FE] text-white py-3 px-4 rounded-md hover:bg-[#37AFE1] transition duration-300 focus:outline-none focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
