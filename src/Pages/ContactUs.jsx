import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-white to-yellow-100 flex flex-col items-center justify-center px-4 sm:px-10 py-10 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col md:flex-row gap-8 items-center"
            >
                <form className="space-y-6 w-full md:w-1/2">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-600 text-center mb-8">Get In Touch</h1>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-2 block w-full p-3 border border-yellow-300 rounded-xl shadow focus:ring-yellow-500 focus:border-yellow-500 transition"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 block w-full p-3 border border-yellow-300 rounded-xl shadow focus:ring-yellow-500 focus:border-yellow-500 transition"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="mt-2 block w-full p-3 border border-yellow-300 rounded-xl shadow focus:ring-yellow-500 focus:border-yellow-500 transition"
                            placeholder="Write your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300"
                    >
                        ✉️ Send Message
                    </button>
                </form>

                <div className="text-center w-full md:w-1/2 bg-yellow-100 p-8 rounded-3xl shadow-inner">
                    <h2 className="text-2xl font-extrabold text-yellow-800 mb-6">📬 Contact Information</h2>
                    <div className="space-y-4 text-yellow-700 text-lg">
                        <p className="flex items-center justify-center gap-3"><FaPhoneAlt /> +123 456 7890</p>
                        <p className="flex items-center justify-center gap-3"><FaMapMarkerAlt /> 123 Yellow Street, Sunshine City</p>
                        <p className="flex items-center justify-center gap-3"><FaEnvelope /> contact@k.histoarts.com</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactUs;