import React from 'react';
import MissionImage from './Mission.webp';
import VisionImage from './Vision.webp';

const CompanySection = () => {
  return (
    <div className="container mx-auto py-8 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-16">
        {/* First Row: Image then Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src={VisionImage} alt="Vision" className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">Vision</h2>
          <p className="text-gray-700 leading-relaxed font-bold">
            Our vision at SDLC Corp is to be a global leader at the forefront of Blockchain, AI, AR / VR, and Digital Transformation technology, recognized for our unwavering commitment to innovation, quality, and user-centric design.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where our solutions foster deeper connections between people, knowledge, and environments. By continuously advancing our research, amplifying the potential of human imagination, and fostering collaborations across industries, we aspire to set new standards for immersive experiences. Through our efforts, we aim to contribute to a future where the lines between physical and digital realities are blurred, enabling a more intelligent, interconnected, and enriched global community.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        {/* Second Row: Content then Image */}
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold mb-4">Mission</h2>
          <p className="text-gray-700 leading-relaxed font-bold">
            At SDLC Corp, our mission is to pioneer the convergence of artificial intelligence, augmented reality, and virtual reality technologies to create transformative experiences that redefine how people interact with the world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to pushing the boundaries of innovation to empower businesses and individuals with cutting-edge solutions that enhance communication, learning, creativity, and productivity. Through our relentless pursuit of technological excellence, we strive to shape a future where AI, AR / VR, and Blockchain seamlessly integrate into everyday life, enriching human interactions and unlocking new realms of possibilities.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={MissionImage} alt="Mission" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default CompanySection;
