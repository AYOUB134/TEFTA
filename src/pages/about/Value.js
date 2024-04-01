import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Values = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl">Our Values</p>
        </div>
      
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          <div className="rounded-3xl p-8 ring-1 xl:p-10 bg-gray-900 ring-gray-900">
            <div className="flex gap-x-2 text-sm text-gray-500">
              <FaCheckCircle className="h-6 w-5 flex-none text-blue-400" />
              <span>Quality & Support</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 text-white">Quality & Support</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">We never compromise in delivering the high-quality services to our clients and providing support after sale based on discussion.</p>
          
          </div>

          <div className="rounded-3xl p-8 ring-1 xl:p-10 bg-gray-900 ring-gray-900">
            <div className="flex gap-x-2 text-sm text-gray-500">
              <FaCheckCircle className="h-6 w-5 flex-none text-blue-400" />
              <span>Innovation</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 text-white"> Innovation
           </h3>
           <p className="mt-4 text-sm leading-6 text-gray-300">  We always focus to provide an innovative environment which helps our clients to reach their goals.</p>
          
          </div>


          <div className="rounded-3xl p-8 ring-1 xl:p-10 bg-gray-900 ring-gray-900">
            <div className="flex gap-x-2 text-sm text-gray-500">
              <FaCheckCircle className="h-6 w-5 flex-none text-blue-400" />
              <span>Transparency</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold leading-8 text-white">Transparency</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">We believe in being honest and trustworthy, which enable us to build the best relationship with our clients to get the re-opportunity from them.</p>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
