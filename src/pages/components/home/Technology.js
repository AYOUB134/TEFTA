











import React from 'react';
import TechImg from '../home/technologyImg.webp';

const Technology = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Best Technology For Your Project</h1>
      <img src={TechImg} alt='TechImg' className="mx-auto w-90" />
    </div>
  );
};

export default Technology;





// import React from 'react';
// import TechImg from './home/technologyImg.webp';
// import bgBlue from './home/Blue.webp';
// import MaleIcon from './home/maleIcon.png';

// const Technology = () => {
//   return (
//     <div className="text-center mt-8 relative">
//       <h1 className="text-4xl font-bold mb-4">Best Technology For Your Project</h1>
//       <div className="mx-auto w-90 relative">
//         <img src={TechImg} alt='TechImg' className="w-full" />
//         <img src={bgBlue} alt='TechImg' className="  w-full h-full mt-20" />
//         <img src={MaleIcon} alt='MaleIcon' className="absolute bottom-0 right-0" style={{ bottom: '-133px' }} />
//       </div>
//     </div>
//   );
// };

// export default Technology;
