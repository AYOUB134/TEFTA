

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6  top-0 shadow-md">
            <div className="flex items-center flex-shrink-0 text-blue-400 mr-0">
                <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
                <span className="font-semibold text-xl tracking-tight text-blue-400">TEFTA</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-blue-400 border-teal-400 hover:border-white">
                    {isOpen ? (
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Close</title>
                            <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"/>
                        </svg>
                    ) : (
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    )}
                </button>
            </div>
            <div className={`w-full ${isOpen ? '' : 'hidden'} lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-base lg:flex-grow text-center lg:text-left">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-80 text-blue-400 font-bold mr-4 text-blue-400">HOME</Link>
                    <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold mr-4 text-blue-400">SERVICES</Link>
                    <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold mr-4 text-blue-400">ABOUT US</Link>
                    <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold mr-4 text-blue-400">CONTACT US</Link>
                    <Link to="/portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold text-blue-400">PORTFOLIO</Link>
                </div>
                <div className="hidden lg:flex ml-auto">
                    {/* <Link to="tel:+923433443956" className="inline-block text-base px-0 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-4 mt-4 lg:mt-0 text-blue-400 ml-5">
                        info@gbtechnologies.pk <FaEnvelope className="ml-2 text-lg" />
                    </Link> */}
                    {/* <Link to="tel:+923433443956" className="inline-block text-base px-4 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-4 mt-4 lg:mt-0 text-blue-400">
                        +92 343 3443956 <FaPhone className="ml-2 text-lg" />
                    </Link> */}
                    <Link to="#" className="inline-block text-base px-4 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-0 mt-4 lg:mt-0 text-blue-400">
                        <FaWhatsapp className="ml-2 text-3xl" />
                    </Link>
                    <Link to="#" className="inline-block text-base px-4 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-0 mt-4 lg:mt-0 text-blue-400">
                        <FaLinkedin className="ml-2 text-3xl" />
                    </Link>
                    <Link to="#" className="inline-block text-base px-4 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-0 mt-4 lg:mt-0 text-blue-400">
                        <FaFacebook className="ml-2 text-3xl" />
                    </Link>
                    <Link to="#" className="inline-block text-base px-4 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-0 mt-4 lg:mt-0 text-blue-400">
                        <FaInstagram className="ml-2 text-3xl" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}












// import React, { useState } from 'react';
// import { FaEnvelope, FaPhone } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Logo from './logo.png';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <nav className="flex items-center justify-between flex-wrap bg-white p-6  top-0 shadow-md">
//             <div className="flex items-center flex-shrink-0 text-blue-400 mr-0">
//                 <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
//                 <span className="font-semibold text-xl tracking-tight text-blue-400">TEFTA</span>
//             </div>
//             <div className="block lg:hidden">
//                 <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-blue-400 border-teal-400 hover:border-white">
//                     {isOpen ? (
//                         <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <title>Close</title>
//                             <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z"/>
//                         </svg>
//                     ) : (
//                         <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <title>Menu</title>
//                             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
//                         </svg>
//                     )}
//                 </button>
//             </div>
//             <div className={`w-full ${isOpen ? '' : 'hidden'} lg:block flex-grow lg:flex lg:items-center lg:w-auto`}>
//                 <div className="text-base lg:flex-grow">
//                     <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 lg:ml-80 text-blue-400 font-bold mr-4 text-blue-400">HOME</Link>
//                     <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold mr-4 text-blue-400">SERVICES</Link>
//                     <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold mr-4 text-blue-400">ABOUT US</Link>
//                     <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold mr-4 text-blue-400">CONTACT US</Link>
//                     <Link to="/portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-blue-400 font-bold text-blue-400">PORTFOLIO</Link>
//                 </div>
//                 <div className="hidden lg:flex">
//                     <Link to="tel:+923433443956" className="inline-block text-base px-0 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-4 mt-4 lg:mt-0 text-blue-400 ml-5">
//                         <FaEnvelope className="inline-block mr-2 text-lg" /> info@gbtechnologies.pk
//                     </Link>
//                     <Link to="tel:+923433443956" className="inline-block text-base px-4 py-2 leading-none text-blue-400 border-white hover:border-transparent ml-4 mt-4 lg:mt-0 text-blue-400">
//                         <FaPhone className="inline-block mr-2 text-lg" /> +92 343 3443956
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }
