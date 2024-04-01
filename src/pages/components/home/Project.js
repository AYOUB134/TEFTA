










import React, { useState } from "react";
import agnomy from '../home/agnomy.jpg'
import YOURINSTALOAN from '../home/instalog.jpg'
import HIRABAZAR from '../home/hirabazar.jpg'
import TAXEED from '../home/exceed.jpg'
import Gofresh from '../home/gofresh.jpg'
import harley  from '../home/harley.jpg'
const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
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
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref={agnomy}
              category="Website"
              title="AGNOMY "
              button="Visit Now"
              buttonHref="https://agnomy.com/"
             
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={YOURINSTALOAN}
              category="Website"
              title="YOURINSTALOAN"
              button="Visit Now"
              buttonHref="https://yourinstaloan.com/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={HIRABAZAR}
              category="App"
              title="HIRABAZAR"
              button="Visit Now"
              buttonHref="https://hirabazar.app/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={TAXEED}
              category="Website"
              title="TAXEED"
              button="Visit Now"
              buttonHref="https://taxeed.com/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={Gofresh}
              category="Website"
              title="GOFRESH"
              button="Visit Now"
              buttonHref="https://grofresh.in/"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={harley}
              category="Website"
              title="HARLEY"
              button="Visit Now"
              buttonHref="https://hhhlondon.com/"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        {/* <div className="relative mb-12 bg-blue-500"> */}
        <div className="relative mb-12 w-27 shadow-lg pb-4">

          <div className="overflow-hidden rounded-[10px] mb-12">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          {/* <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark"> */}
          {/* <div className="relative z-10 mx-7  -mt-20 rounded-lg bg-red-400 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark" style={{ backgroundSize: '100% 200%', backgroundPosition: 'center bottom', transition: 'background-position 1s ease' }}> */}
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark" style={{ background: `linear-gradient(to bottom, #a1d9ff 0%, #f7f7f7 100%)`, backgroundSize: '100% 200%', backgroundPosition: 'center bottom', transition: 'background-position 1s ease' }}>


            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-blue-900"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
