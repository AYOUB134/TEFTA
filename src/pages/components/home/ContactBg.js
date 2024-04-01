import React from 'react';
import bgBlue from '../home/Blue.webp';
import MaleIcon from '../home/maleIcon.png';
import './ContactBg.css'; // Import custom CSS file

const ContactBg = () => {
  return (
    <div className="relative">
      <img src={bgBlue} alt='bgBlue' className="w-full h-full" />
      <img src={MaleIcon} alt='MaleIcon' className="male-icon" />
    </div>
  );
};

export default ContactBg;



// import React from 'react'
// import bgBlue from './home/Blue.webp';
// import MaleIcon from './home/maleIcon.png';

// const ContactBg = () => {
//   return (
//     <div className="relative">
//       <img src={bgBlue} alt="bgBlue" className="w-full h-full object-cover" />
//       <div className="absolute bottom-8vh right-0 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6" >
//         <img src={MaleIcon} alt="MaleIcon" className="w-full h-auto" />
//       </div>
//     </div>
//   )
// }

// export default ContactBg








// import React from 'react';
// import bgBlue from './home/Blue.webp';
// import MaleIcon from './home/maleIcon.png';

// const ContactBg = () => {
//   return (
//     <div className="relative">
//       <img src={bgBlue} alt='bgBlue' className="w-full h-full" />
//       <img src={MaleIcon} alt='MaleIcon' className="absolute bottom-0 right-0 mb-8 mr-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48" />
//     </div>
//   );
// };

// export default ContactBg;
