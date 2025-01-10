import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center px-4 sm:px-10 py-10 lg:px-8">
            <div className="w-full bg-white rounded-lg shadow-lg p-6 sm:p-8  flex flex-col md:flex-row gap-5 items-center">

                <form className="space-y-4 w-full md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-yellow-600 text-center mb-6">Contact Us</h1>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-yellow-700">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full p-2 border border-yellow-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-yellow-700">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-2 border border-yellow-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-yellow-700">Your Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-1 block w-full p-2 border border-yellow-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            placeholder="Write your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-8 text-center mx-auto md:bg-yellow-200 md:px-10 rounded-l-full md:py-5">
                    <h2 className="text-2xl font-bold text-yellow-700 mb-4">Contact Information</h2>
                    <p className="text-yellow-700 "><strong>Phone:</strong> +123 456 7890</p>
                    <p className="text-yellow-700 my-2"><strong>Address:</strong> 123 Yellow Street, Sunshine City, YW 12345</p>
                    <p className="text-yellow-700"><strong>Email:</strong> contact@k.histoarts.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
