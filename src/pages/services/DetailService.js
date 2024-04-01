import React from 'react';
import { FaCode, FaPencilAlt, FaMobileAlt, FaPaintBrush, FaServer, FaChartLine } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const DetailService = () => {
  const { id } = useParams();

  const services = {
    1: {
      icon: <FaCode size={32} />,
      title: 'Web Development',
      description: 'We specialize in building responsive and scalable web applications.',
      subservices: [
        {
          title: 'Frontend Development',
          description: 'We create engaging and user-friendly interfaces using the latest technologies.',
        },
        {
          title: 'Backend Development',
          description: 'Our backend solutions are robust, secure, and scalable.',
        },
        {
          title: 'E-commerce Development',
          description: 'We develop custom e-commerce solutions tailored to your business needs.',
        },
        {
          title: 'CMS Development',
          description: 'We build custom content management systems for easy website management.',
        },
        {
          title: 'Web Maintenance',
          description: 'We provide ongoing support and maintenance services to keep your website up-to-date.',
        },
        {
          title: 'Web Hosting',
          description: 'We offer reliable web hosting services to ensure your website is always online.',
        },
      ],
    },
    2: {
      icon: <FaPencilAlt size={32} />,
      title: 'Graphic Design',
      description: 'Our creative team delivers visually stunning designs for your brand.',
      subservices: [
        {
          title: 'Logo Design',
          description: 'We design unique and memorable logos that represent your brand identity.',
        },
        {
          title: 'Brand Identity',
          description: 'We create cohesive brand identities that resonate with your target audience.',
        },
        {
          title: 'Print Design',
          description: 'We design high-quality print materials, including brochures, flyers, and business cards.',
        },
        {
          title: 'Packaging Design',
          description: 'We design eye-catching packaging solutions that stand out on the shelves.',
        },
        {
          title: 'Digital Illustration',
          description: 'We create custom digital illustrations to enhance your brand visuals.',
        },
        {
          title: 'UI/UX Design',
          description: 'We design intuitive user interfaces and engaging user experiences for web and mobile applications.',
        },
      ],
    },
   
    3: {
        icon: <FaMobileAlt size={32} />,
        title: 'App Development',
        description: 'We design and develop custom mobile apps for iOS and Android platforms.',
        subservices: [
          {
            title: 'iOS App Development',
            description: 'We specialize in creating high-performance and user-friendly iOS applications.',
          },
          {
            title: 'Android App Development',
            description: 'Our Android developers create innovative and robust Android apps for various devices.',
          },
          {
            title: 'Cross-platform App Development',
            description: 'We develop apps that work seamlessly on multiple OS.',
          },
          {
            title: 'App Prototyping',
            description: 'We create interactive prototypes to visualize and test app ideas before development.',
          },
          {
            title: 'App Maintenance & Support',
            description: 'We provides  maintenance and support services to keep your app running smoothly.',
          },
          {
            title: 'App Store Optimization',
            description: 'We optimize your app\'s listing on app stores to improve visibility and downloads.',
          },
        ],
      },
      4: {
        icon: <FaPaintBrush size={32} />,
        title: 'UI/UX Design',
        description: 'We create intuitive and user-friendly interfaces to enhance user experience.',
        subservices: [
          {
            title: 'User Interface Design',
            description: 'We design visually appealing interfaces that are easy to use and navigate.',
          },
          {
            title: 'User Experience Design',
            description: 'Our UX designers focus on creating seamless and enjoyable user experiences.',
          },
          {
            title: 'Wireframing & Prototyping',
            description: 'We create wireframes and prototypes to visualize and test design concepts.',
          },
          {
            title: 'Responsive Design',
            description: 'We ensure your website or app looks great and functions well on all devices.',
          },
          {
            title: 'Interaction Design',
            description: 'We design interactive elements that engage users and enhance usability.',
          },
          {
            title: 'Usability Testing',
            description: 'We conduct usability tests to identify and resolve usability issues in your design.',
          },
        ],
      },
      5: {
        icon: <FaServer size={32} />,
        title: 'Server Management',
        description: 'We provide reliable server management services to keep your website running smoothly.',
        subservices: [
          {
            title: 'Server Configuration',
            description: 'We configure servers to ensure optimal performance and security.',
          },
          {
            title: 'Monitoring & Maintenance',
            description: 'We monitor servers and perform regular maintenance to prevent downtime.',
          },
          {
            title: 'Security Management',
            description: 'We implement security measures to protect servers from cyber threats.',
          },
          {
            title: 'Backup Solutions',
            description: 'We set up backup systems to ensure data is safe and can be restored if needed.',
          },
          {
            title: 'Scalability Planning',
            description: 'We plan for future growth and scalability to accommodate increasing traffic and data.',
          },
          {
            title: 'Cloud Services',
            description: 'We offer cloud hosting and management services for flexible and scalable infrastructure.',
          },
        ],
      },
      6: {
        icon: <FaChartLine size={32} />,
        title: 'Digital Marketing',
        description: 'Our marketing experts help you reach your target audience and grow your business online.',
        subservices: [
          {
            title: 'Search Engine Optimization (SEO)',
            description: 'We optimize your website to rank higher in search engine results and attract more organic traffic.',
          },
          {
            title: 'Social Media Marketing',
            description: 'We create and manage social media campaigns to increase brand awareness and engagement.',
          },
          {
            title: 'Content Marketing',
            description: 'We develop and distribute valuable content to attract and retain a clearly defined audience.',
          },
          {
            title: 'Email Marketing',
            description: 'We design and execute email campaigns to nurture leads and drive conversions.',
          },
          {
            title: 'Pay-Per-Click (PPC) Advertising',
            description: 'We manage PPC campaigns to drive targeted traffic to your website and increase conversions.',
          },
          {
            title: 'Analytics & Reporting',
            description: 'We track and analyze digital marketing performance to optimize strategies and maximize ROI.',
          },
        ],
      },
      
            
  };

  const service = services[id];

  if (!service) {
    return <div> </div>;
  }

  return (
    <div>
      <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">What We Do in {service.title}</h2>
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
           
          </header>
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {service.subservices.map((subservice, index) => (
              <div key={index} className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                <div className="py-8 px-12 mb-12 bg-gradient-to-r from-blue-900 to-blue-400 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-white mb-4">{service.icon}</div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-white">{subservice.title}</h3>
                  <p className="text-white">{subservice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
