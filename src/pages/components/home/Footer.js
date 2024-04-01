

import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-12 bg-gray-800 text-white">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex items-center mb-6">
                    <h1 className="text-xl font-bold mr-2">Tailus Blocks</h1>
                    <span className="text-gray-400">© 2024 All rights reserved</span>
                </div>
                <ul className="flex flex-wrap mb-6">
                    <li className="mr-8 mb-4 sm:mb-0"><a href="#" className="hover:text-gray-400 transition">Home</a></li>
                    <li className="mr-8 mb-4 sm:mb-0"><a href="#" className="hover:text-gray-400 transition">About</a></li>
                    <li className="mr-8 mb-4 sm:mb-0"><a href="#" className="hover:text-gray-400 transition">Guide</a></li>
                    <li className="mr-8 mb-4 sm:mb-0"><a href="#" className="hover:text-gray-400 transition">Blocks</a></li>
                    <li><a href="#" className="hover:text-gray-400 transition">Contact</a></li>
                </ul>
                <div className="flex items-center mb-6 space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition text-2xl sm:text-3xl"><FaGithub /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition text-2xl sm:text-3xl"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition text-2xl sm:text-3xl"><FaLinkedin /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition text-2xl sm:text-3xl"><FaFacebook /></a>
                </div>
                <div className="text-center">
                    <span className="text-gray-400">Need help? <a href="#" className="text-white font-semibold">Contact Us</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
