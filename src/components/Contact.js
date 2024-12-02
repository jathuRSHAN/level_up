import React, { useState } from 'react';
import Swal from 'sweetalert2'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        setIsSubmitted(true);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "024999fa-2125-447b-914d-49a612d3f55d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        }
    };
    return (
        <div className="min-h-50 bg-blue-200 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-200" >

                {/* Contact Information */}
                <div className="space-y-6 bg-blue-200 p-10">
                    <h2 className="text-3xl font-extrabold text-gray-900 font-hero-font">Get in Touch</h2>
                    <p className="text-gray-600">
                        We'd love to hear from you! Fill out the form or contact us via the details below.
                    </p>
                    <div className="space-y-4">
                        <p className="text-lg font-medium">
                            <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                            Address: 123 Main Street, Colombo, Sri Lanka
                        </p>
                        <p className="text-lg font-medium">
                            <i className="fas fa-phone text-green-500 mr-2"></i>
                            Phone: +94 77 123 4567
                        </p>
                        <p className="text-lg font-medium">
                            <i className="fas fa-envelope text-blue-500 mr-2"></i>
                            Email: contact@yourwebsite.com
                        </p>
                    </div>

                    {/* Google Map Embed */}
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1689.9982199730123!2d81.20489901788784!3d8.590014490883213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1729120402764!5m2!1sen!2slk"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className=" shadow-md rounded-lg p-8 bg-blue-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
                    {isSubmitted ? (
                        <p className="text-green-500 text-center">Thank you! We will get back to you soon.</p>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-6 ">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  bg-blue-200 px-5"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-blue-200 px-5"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500  bg-blue-200 px-5"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
