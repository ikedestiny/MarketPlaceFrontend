import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import ContactUs from './ContactUs';

const Footer = () => {
    return (
        <footer className="bg-[#07081e] text-white py-8 border-t border-gray-700">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">About Us</h3>
                        <p className="text-gray-300">We are a leading provider of high-quality products and services. Our mission is to deliver exceptional value to our customers.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:text-gray-300">About</a></li>
                            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                            <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <ContactUs />
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-400"><FaFacebook size={24} /></a>
                            <a href="#" className="text-blue-400 hover:text-blue-200"><FaTwitter size={24} /></a>
                            <a href="#" className="text-pink-500 hover:text-pink-300"><FaInstagram size={24} /></a>
                            <a href="#" className="text-blue-700 hover:text-blue-500"><FaLinkedin size={24} /></a>
                            <a href="#" className="text-red-600 hover:text-red-400"><FaYoutube size={24} /></a>
                            <a href="#" className="text-gray-500 hover:text-gray-300"><FaGithub size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                    <p>&copy; 2025 MP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
