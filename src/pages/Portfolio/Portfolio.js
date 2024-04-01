import React from 'react';
import agnomy from './services.jpg';
import YOURINSTALOAN from './instalog.jpg';
import HIRABAZAR from './hirabazar.jpg';
import TAXEED from './exceed.jpg';
import Gofresh from './gofresh.jpg';
import harley from './harley.jpg';

const PortfolioItem = ({ ImageHref, title, content, buttonHref, isImageRight }) => {
  return (
    <div className="flex flex-wrap items-center mb-8 shadow-md ">
      <div className={` w-full md:w-1/2 p-4 ${isImageRight ? 'md:order-2' : ''}`}>
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{content}</p>
          <a
            href={buttonHref}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Visit Now
          </a>
        </div>
      </div>
      <div className={`w-full md:w-1/2 ${isImageRight ? 'md:order-1' : ''}`}>
        <img src={ImageHref} alt="portfolio" className="w-full rounded-lg" />
      </div>
    </div>
  )
};

const Portfolio = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
            </div>
          </div>
        </div>
        <PortfolioItem
          ImageHref={agnomy}
          title="AGNOMY"
          content=" AGNOMY is a cutting-edge platform revolutionizing the way businesses manage their operations. With a focus on innovation and efficiency, AGNOMY offers a suite of tools and services designed to streamline processes, increase productivity, and drive growth. From project management to analytics, AGNOMY empowers businesses to make informed decisions and stay ahead of the competition. Discover the future of business management with AGNOMY."
          buttonHref="https://agnomy.com/"
          isImageRight={false}
        />
        <PortfolioItem
          ImageHref={YOURINSTALOAN}
          title="YOURINSTALOAN"
          content="YOURINSTALOAN is a leading platform that provides quick and easy access to loans. With a user-friendly interface and secure process, YOURINSTALOAN offers a hassle-free experience for borrowers. Whether you need funds for personal or business purposes, YOURINSTALOAN is here to help. Visit now to apply for a loan online"
          buttonHref="https://yourinstaloan.com/"
          isImageRight={true}
        />
        <PortfolioItem
          ImageHref={HIRABAZAR}
          title="HIRABAZAR"
          content="HIRABAZAR is a comprehensive marketplace for all your shopping needs. From electronics to fashion, HIRABAZAR offers a wide range of products at competitive prices. With a focus on quality and customer satisfaction, HIRABAZAR ensures a seamless shopping experience. Explore HIRABAZAR today and discover amazing deals"
          buttonHref="https://hirabazar.app/"
          isImageRight={false}
        />
        <PortfolioItem
          ImageHref={TAXEED}
          title="TAXEED"
          content="TAXEED is a revolutionary platform that simplifies the tax filing process. With intuitive tools and expert guidance, TAXEED makes it easy for individuals and businesses to file their taxes accurately and on time. Say goodbye to complicated tax forms and hello to a stress-free tax season with TAXEED."
          buttonHref="https://taxeed.com/"
          isImageRight={true}
        />
        <PortfolioItem
          ImageHref={Gofresh}
          title="GOFRESH"
          content="GOFRESH is your go-to destination for fresh groceries delivered to your doorstep. With a wide selection of products and convenient delivery options, GOFRESH makes grocery shopping easy and convenient. From fresh produce to pantry staples, GOFRESH has everything you need to keep your kitchen stocked"
          buttonHref="https://grofresh.in/"
          isImageRight={false}
        />
        <PortfolioItem
          ImageHref={harley}
          title="HARLEY"
          content="HARLEY is a luxury fashion brand known for its exquisite designs and impeccable craftsmanship. With a focus on quality materials and attention to detail, HARLEY offers a range of products that exude elegance and sophistication. Discover the world of HARLEY and elevate your style."
          buttonHref="https://hhhlondon.com/"
          isImageRight={true}
        />
      </div>
    </section>
  );
};

export default Portfolio;













// import React, {useState} from 'react'
// import agnomy from './services.jpg'
// import YOURINSTALOAN from './instalog.jpg'
// import HIRABAZAR from './hirabazar.jpg'
// import TAXEED from './exceed.jpg'
// import Gofresh from './gofresh.jpg'
// import harley  from './harley.jpg'
// const PortfolioItem = ({ ImageHref, title, content }) => {
//     return (
//       <div className="flex flex-wrap items-center">
//         <div className="w-full md:w-1/2">
//           <img src={ImageHref} alt="portfolio" className="w-full" />
//         </div>
//         <div className="w-full md:w-1/2 p-4">
//           <h3 className="text-2xl font-bold mb-2">{title}</h3>
//           <p className="text-gray-600">{content}</p>
//         </div>
//       </div>
//     );
//   };
  
//   const Portfolio = () => {
//     const [showCard, setShowCard] = useState("all");
  
//     const handleProject = (category) => {
//       setShowCard(category);
//     };
  
//     return (
//       <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full px-4">
//               <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//                 <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
//                   Our Recent Projects
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-4">
//             <PortfolioItem
//               ImageHref={agnomy}
//               title="AGNOMY"
//               content="Description of the AGNOMY project goes here."
//             />
//             <PortfolioItem
//               ImageHref={YOURINSTALOAN}
//               title="YOURINSTALOAN"
//               content="Description of the YOURINSTALOAN project goes here."
//             />
//             <PortfolioItem
//               ImageHref={HIRABAZAR}
//               title="HIRABAZAR"
//               content="Description of the HIRABAZAR project goes here."
//             />
//             <PortfolioItem
//               ImageHref={TAXEED}
//               title="TAXEED"
//               content="Description of the TAXEED project goes here."
//             />
//             <PortfolioItem
//               ImageHref={Gofresh}
//               title="GOFRESH"
//               content="Description of the GOFRESH project goes here."
//             />
//             <PortfolioItem
//               ImageHref={harley}
//               title="HARLEY"
//               content="Description of the HARLEY project goes here."
//             />
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Portfolio;
  
