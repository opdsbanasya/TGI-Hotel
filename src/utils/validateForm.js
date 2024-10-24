export const validateForm = (setErrors, formData) => {
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

export const handleSubmit = (e, formData, setFormData, setErrors) => {
    e.preventDefault();
    if (validateForm(setErrors, formData)) {
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

export const handleChange = (e, setFormData) => {
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