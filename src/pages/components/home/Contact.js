
import React from 'react';
import { FaPhone, FaEnvelope,FaCheck } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-12">

        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <h3 className="text-lg text-gray-600">File a form and let us know more about you and your project.</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-900 to-blue-400 shadow-md rounded-lg  overflow-hidden">
        <div className="ml-8 lg:w-2/5 lg:h-full h-80vh px-6 py-8 bg-gradient-to-r text-white flex flex-col justify-center text-center">
            <div>
                <h1 className="font-bold text-2xl mb-8">Let's Talk About Your Project</h1>
                <ul className="flex flex-col space-y-2">
                    <li className="flex items-center justify-center text-gray-200 "><FaPhone className="mr-2" /> <strong>+15106306507</strong></li>
                    <li className="flex items-center justify-center text-gray-200"><FaEnvelope className="mr-2" /> <strong>sales@sdlccorp.com</strong></li>
                </ul>
            </div>
            <div className="mt-8">
                <ul className="list-disc list-inside">
                    <li className="flex items-center text-gray-200 justify-center"><FaCheck className="mr-2" /> <strong>Free Consultation</strong></li>
                    <li className="flex items-center text-gray-200 justify-center"><FaCheck className="mr-2" /> <strong>24/7 Experts Support</strong></li>
                    <li className="flex items-center text-gray-200 justify-center"><FaCheck className="mr-2" /> <strong>On-Time Delivery</strong></li>
                </ul>
            </div>
        </div>


            {/* <div className="lg:w-3/5 lg:h-full px-6 py-8 bg-white shadow-md rounded-lg">
                <form className="flex flex-col h-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" id="phone" name="phone" className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
                            <select id="budget" name="budget" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option>$5000-$10000</option>
                                <option>$10000-$15000</option>
                                <option>$15000-$20000</option>
                                <option>More than $20000</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
                            <select id="hearAboutUs" name="hearAboutUs" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option>Google Search</option>
                                <option>Friend's Recommendation</option>
                                <option>Social Media</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description</label>
                            <textarea id="projectDescription" name="projectDescription" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
                        </div>
                    </form>
                </div> */}

<div className="lg:w-3/5 lg:h-full px-6 py-8 bg-white shadow-md rounded-lg">
    <form className="flex flex-col h-full">
        <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Country Code</label>
                <input type="text" id="countryCode" name="countryCode" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
        </div>
        <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <input type="text" id="phone" name="phone" className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" />
            </div>
        </div>
        <div className="mb-4">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
            <select id="budget" name="budget" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>$5000-$10000</option>
                <option>$10000-$15000</option>
                <option>$15000-$20000</option>
                <option>More than $20000</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
            <select id="hearAboutUs" name="hearAboutUs" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>Google Search</option>
                <option>Friend's Recommendation</option>
                <option>Social Media</option>
                <option>Other</option>
            </select>
        </div>
        <div className="mb-4">
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description</label>
            <textarea id="projectDescription" name="projectDescription" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
        </div>
        <div>
            <button type="submit" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
        </div>
    </form>
</div>

            </div>
        </div>
    );
};

export default Contact;



























// import React from 'react';
// import { FaPhone, FaEnvelope,FaCheck } from 'react-icons/fa';

// const Contact = () => {
//     return (
//         <div className="container mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md rounded-lg overflow-hidden">
//             <div className="lg:w-1/2 px-6 py-8">
//                 <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//                 <p className="text-lg text-gray-200 mb-4">File a form and let us know more about you and your project.</p>
//                 <ul className="flex flex-col space-y-2">
//                     <li className="flex items-center"><span className="mr-2"><FaPhone /></span> +15106306507</li>
//                     <li className="flex items-center"><span className="mr-2"><FaEnvelope /></span> sales@sdlccorp.com</li>
//                 </ul>
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold">Key Points</h3>
//                     <ul className="list-disc list-inside mt-2">
//                         <li className="flex items-center text-lg"><span className="mr-2"><FaCheck /></span>Free Consultation</li>
//                         <li className="flex items-center text-lg"><span className="mr-2"><FaCheck /></span>24/7 Experts Support</li>
//                         <li className="flex items-center text-lg"><span className="mr-2"><FaCheck /></span>On-Time Delivery</li>
//                     </ul>
//                 </div>
//             </div>
//                 <div className="lg:w-1/2 p-8">
//                     <form>
//                         <div className="mb-4">
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                             <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                             <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
//                             <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
//                             <div className="mt-1 flex rounded-md shadow-sm">
//                                 <input type="text" id="phone" name="phone" className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
//                             <select id="budget" name="budget" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
//                                 <option>$5000-$10000</option>
//                                 <option>$10000-$15000</option>
//                                 <option>$15000-$20000</option>
//                                 <option>More than $20000</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700">How Did You Hear About Us?</label>
//                             <select id="hearAboutUs" name="hearAboutUs" className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
//                                 <option>Google Search</option>
//                                 <option>Friend's Recommendation</option>
//                                 <option>Social Media</option>
//                                 <option>Other</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Project Description</label>
//                             <textarea id="projectDescription" name="projectDescription" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
//                         </div>
//                         <div>
//                             <button type="submit" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;














