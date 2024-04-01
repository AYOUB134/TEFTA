import React from 'react';
import {Link} from 'react-router-dom'
import DefaultHeroImg from './heroImg.svg'; // Import your default hero image

const Hero = ({ title  ,description}) => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={ DefaultHeroImg} 
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">{title || "Excel Your Bussiness with  TEFTA  "}  </h1> {/* Use props or default title */}
            <p className="mt-6 mb-8 text-lg sm:mb-12">  {description || "GET SCALABLE, MODERN AND RELIABLE WEBSITE AND MOBILE APP, DESIGN AND LET YOUR BUSINESS GROW "}
              <br className="hidden md:inline lg:hidden" />
			
            </p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/services"
                className="px-6 py-3 text-lg font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
              >
                SERVICES
              </Link>
              <Link
               to="/about"
                className="px-6 py-3 text-lg font-semibold border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
