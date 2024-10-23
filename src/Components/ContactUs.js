import { useState } from 'react';
import Banner from './Banner';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            tempErrors.phone = 'Phone number is required';
        }
        if (!formData.message.trim()) tempErrors.message = 'Message is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Add your form submission logic here
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };


    return (
        <div className="w-full min-h-[50vh] px-28 py-7">
            <Banner />
            <h2 className="text-2xl font-semibold text-center text-gray-800 my-6">
                Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 w-2/3 mx-auto">
                <div className='flex justify-center items-center gap-10'>
                    <label for="name" className='text-xl w-32'>Name: </label>
                    <input
                        type="text"
                        name="name"
                        id='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1 ml-36">{errors.name}</p>
                )}

                <div className='flex justify-center items-center gap-10'>
                    <label for="email" className='text-xl w-32'>Email: </label>
                    <input
                        type="email"
                        name="email"
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1 ml-36">{errors.email}</p>
                )}

                <div className='flex justify-center items-center gap-10'>
                    <label for="phone" className='text-xl w-32'>Phone: </label>
                    <input
                        type="tel"
                        name="phone"
                        id='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone No"
                        className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 ml-36">{errors.phone}</p>
                )}

                <div className='flex justify-center items-center gap-10'>
                    <label for="message" className='text-xl w-32'>Message: </label>
                    <textarea
                        name="message"
                        id='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                    />
                </div>
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1 ml-36">{errors.message}</p>
                )}

                <button
                    type="submit"
                    className="w-fit ml-[50%] bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default ContactUs;
