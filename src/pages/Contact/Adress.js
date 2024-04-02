import React from 'react';

const Address = () => {
  return (
    <div className="max-w-8xl mx-auto justify-center bg-gradient-to-t from-blue-300 via-purple-200 to-neutral-500">
      <div className="relative">
        <div className="container mx-auto my-8 p-8 py-12">
          <div className="px-4 text-center">
            <h2 className="text-sm font-bold text-green-400 mb-4"></h2>
            <h1 className="text-6xl font-bold text-gray-900 mb-8">Let's work together</h1>
            <p className="text-base font-medium text-gray-500">Let us help become even greater at what you do. Fill out the following from and we will get back to tou in the next 24 hours.</p>
            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <span className="inline-block p-5 text-gray-600 rounded-full bg-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <h2 className="mt-2 text-sm font-normal text-gray-600">Email</h2>
                <p className="mt-1 font-semibold text-base text-gray-800">info@techsolutions.com</p>
              </div>

              <div>
                <span className="inline-block p-5 text-gray-600 rounded-full bg-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <h2 className="mt-2 text-sm font-normal text-gray-600">Office</h2>
                <p className="mt-1 font-semibold text-base text-gray-800">Townsville, NY 54321</p>
              </div>

              <div>
                <span className="inline-block p-5 text-gray-600 rounded-full bg-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <h2 className="mt-2 text-sm font-normal text-gray-600">Phone</h2>
                <p className="mt-1 font-semibold text-base text-gray-800">(555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="mt-16 px-4 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9306445522857!2d-73.98160272504131!3d40.763550134459784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9c69e166d%3A0x86b0e5488151ce61!2sestiatorio%20Milos!5e0!3m2!1sen!2sid!4v1690503267127!5m2!1sen!2sid"
              width="100%" height="450" allowfullscreen="" loading="lazy" title="Google Maps"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
