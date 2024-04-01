import React from 'react';
import { FaCode, FaPencilAlt, FaMobileAlt, FaPaintBrush, FaServer, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div>
      <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: '0 auto', height: '35px' }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r="5"
                className="stroke-primary"
                style={{
                  fill: 'transparent',
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
              ></circle>
              <line
                x1="55.1"
                y1="30.4"
                x2="100"
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              ></line>
              <line
                x1="45.1"
                y1="30.4"
                x2="0"
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              ></line>
            </svg>
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              Save time managing advertising & Content for your business.
            </p>
          </header>
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <ServiceItem
              icon={<FaCode size={32} />}
              title="Web Development"
              description="We specialize in building responsive and scalable web applications."
              onClick={() => handleServiceClick(1)}
            />
            <ServiceItem
              icon={<FaPencilAlt size={32} />}
              title="Graphic Design"
              description="Our creative team delivers visually stunning designs for your brand."
              onClick={() => handleServiceClick(2)}
            />
            <ServiceItem
              icon={<FaMobileAlt size={32} />}
              title="App Development"
              description="We design and develop custom mobile apps for iOS and Android platforms."
              onClick={() => handleServiceClick(3)}
            />
            <ServiceItem
              icon={<FaPaintBrush size={32} />}
              title="UI/UX Design"
              description="We create intuitive and user-friendly interfaces to enhance user experience."
              onClick={() => handleServiceClick(4)}
            />
            <ServiceItem
              icon={<FaServer size={32} />}
              title="Server Management"
              description="We provide reliable server management services to keep your website running smoothly."
              onClick={() => handleServiceClick(5)}
            />
            <ServiceItem
              icon={<FaChartLine size={32} />}
              title="Digital Marketing"
              description="Our marketing experts help you reach your target audience and grow your business online."
              onClick={() => handleServiceClick(6)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ icon, title, description, onClick }) => {
  return (
    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" onClick={onClick}>
      <div className="py-8 px-12 mb-12 bg-gradient-to-r from-blue-900 to-blue-400 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div className="inline-block text-white mb-4">{icon}</div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default Services;








// import React from 'react';
// import { FaCode, FaPencilAlt, FaMobileAlt, FaPaintBrush, FaServer, FaChartLine } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

// const Services = () => {
//   const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

//   const handleServiceClick = (id) => {
//     navigate(`/services/${id}`); // Use navigate function to navigate to the detail service page
//   };
//   return (
//     <div>
//       <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
//         <div className="container xl:max-w-6xl mx-auto px-4">
//           <header className="text-center mx-auto mb-12 lg:px-20">
//             <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do</h2>
//             <svg
//               version="1.1"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               x="0px"
//               y="0px"
//               viewBox="0 0 100 60"
//               style={{ margin: '0 auto', height: '35px' }}
//               xmlSpace="preserve"
//             >
//               <circle
//                 cx="50.1"
//                 cy="30.4"
//                 r="5"
//                 className="stroke-primary"
//                 style={{
//                   fill: 'transparent',
//                   strokeWidth: 2,
//                   strokeMiterlimit: 10,
//                 }}
//               ></circle>
//               <line
//                 x1="55.1"
//                 y1="30.4"
//                 x2="100"
//                 y2="30.4"
//                 className="stroke-primary"
//                 style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
//               ></line>
//               <line
//                 x1="45.1"
//                 y1="30.4"
//                 x2="0"
//                 y2="30.4"
//                 className="stroke-primary"
//                 style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
//               ></line>
//             </svg>
//             <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
//               Save time managing advertising & Content for your business.
//             </p>
//           </header>
//           <div className="flex flex-wrap flex-row -mx-4 text-center">
//             <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
//               <div
//                 className="py-8 px-12 mb-12 bg-gradient-to-r from-blue-900 to-blue-400 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2"
//                 onClick={() => handleServiceClick(1)} // Pass the ID of the service
//               >
//                 <div className="inline-block text-white mb-4">
//                   <FaCode size={32} />
//                 </div>
//                 <h3 className="text-lg leading-normal mb-2 font-semibold text-white">Web Development</h3>
//                 <p className="text-white">We specialize in building responsive and scalable web applications.</p>
//               </div>
//             </div>
//             {/* Add other service items similarly */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



