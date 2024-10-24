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
        <div className="w-full min-h-[50vh] px-28 py-7">
            <Banner />
            <ContactInfo />
            <h2 className="w-[80%] text-3xl mx-28 font-semibold font-serif text-black my-10">
                Reach out to Us
            </h2>
            <div className='flex items-center justify-center bg-zinc-300 rounded-xl overflow-hidden'>
                <div className='w-1/2 '>
                    <img className='aspect-square object-cover' src={mainEntrance} alt='Main Entrance' />
                </div>
                <form onSubmit={(e) => handleSubmit(e, formData, setFormData, setErrors)} className="w-1/2 space-y-4  mx-auto p-10">
                    <div className=' gap-10'>
                        {/* <label for="name" className='text-xl w-32'>Name: </label> */}
                        <input
                            type="text"
                            name="name"
                            id='name'
                            value={formData.name}
                            onChange={() => handleChange(e, setFormData)}
                            placeholder="Name"
                            className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none `}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div className=' gap-10'>
                        {/* <label for="email" className='text-xl w-32'>Email: </label> */}
                        <input
                            type="email"
                            name="email"
                            id='email'
                            value={formData.email}
                            onChange={() => handleChange(e, setFormData)}
                            placeholder="Email"
                            className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none `}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div className=' gap-10'>
                        {/* <label for="phone" className='text-xl w-32'>Phone: </label> */}
                        <input
                            type="tel"
                            name="phone"
                            id='phone'
                            value={formData.phone}
                            onChange={() => handleChange(e, setFormData)}
                            placeholder="Phone No"
                            className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none `}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div className=' gap-10'>
                        {/* <label for="message" className='text-xl w-32'>Message: </label> */}
                        <textarea
                            name="message"
                            id='message'
                            value={formData.message}
                            onChange={() => handleChange(e, setFormData)}
                            placeholder="Message"
                            rows="4"
                            className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                } focus:outline-none  resize-none`}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-fit mx-auto bg-[#4CC9FE] text-white py-3 px-4 rounded-md hover:bg-[#37AFE1] transition duration-300 focus:outline-none  focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
