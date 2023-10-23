import React from 'react';

const Skills = () => {
  return (
    <div
      name="Our Service"
      className="w-full lg:h-screen bg-white text-gray-300"
    >
      <div className="text-white mt-[70px] flex flex-col  px-8   items-center justify-center lg:flex-row  gap-8">
        <h1 className="font-semibold text-3xl text-start text-black flex-2">
          We find the highest and Best use of resource
        </h1>
        <p className=" text-black text-start">
          Solar energy is the beacon of sustainability in our quest for cleaner
          and more eco-friendly power sources.
        </p>
      </div>
      <div className="flex justify-center gap-10 mt-[40px] w-[80%] mx-auto text-black ">
        <div className="lg:flex lg:flex-col hidden">
          <div>
            <h1 className="font-semibold text-xl text-black text-end">
              Solar for Commercial Spaces
            </h1>
            <p className="text-end">
              Our commercial solar systems are designed to meet the energy needs
              of businesses, reducing operating costs and promoting
              sustainability.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl text-black">
              Solar for Residential Properties
            </h1>
            <p className="text-end">
              We offer residential solar solutions for homeowners looking to
              save on electricity bills and reduce their carbon footprint.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl text-black">
              Solar for Agriculture
            </h1>
            <p className="text-end">
              We specialize in agricultural solar solutions, providing power for
              irrigation, farm operations, and livestock facilities.
            </p>
          </div>
        </div>
        <div className="lg:flex flex-col hidden">
          <img
            src="https://res.cloudinary.com/dutvrzezk/image/upload/v1696448459/solar_eyoezs.webp"
            alt="solar "
          />
        </div>
        <div className="lhflex lg:flex-col text-center justify-center items-center">
          <div className="hidden lg:block">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Comprehensive Project Management
            </h1>
            <p className="lg:text-end">
              From project inception to completion, we manage every detail,
              ensuring efficient resource coordination and adherence to
              timelines and budgets.
            </p>
          </div>
          <div className="hidden lg:block">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Sustainability
            </h1>
            <p className="lg:text-end">
              We evaluate the environmental impact of solar projects and
              recommend sustainable solutions to reduce your carbon footprint.
            </p>
          </div>
          <div className="hidden lg:block">
            <h1 className=" font-semibold text-xl text-black lg:text-end mt-5">
              Custom System Design
            </h1>
            <p className="lg:text-end">
              Our solar engineers tailor solar power systems to meet your energy
              needs, determining panel quantity, placement, and system layout
              with precision.
            </p>
          </div>
          <div className="lg:hidden mt-9 border border-1 w-[300px] py-9 px-[50px] flex flex-col items-center  ml-[50px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Site Assessment
            </h1>
            <p className="lg:text-end">
              We evaluate your location's suitability for solar installation,
              taking into account factors like shading, sun exposure, and
              structural integrity.
            </p>
          </div>
          <div className="lg:hidden mt-9 border border-1 w-[300px] py-9 px-[50px] flex flex-col items-center  ml-[50px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Feasibility Analysis
            </h1>
            <p className="lg:text-end">
              Our experts conduct comprehensive feasibility studies, calculating
              costs, benefits, and potential return on investment for your solar
              project.
            </p>
          </div>
          <div className=" lg:hidden mt-9 border border-1 w-[300px] py-9 px-[50px] flex flex-col items-center  ml-[50px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Permitting and Compliance
            </h1>
            <p className="lg:text-end">
              We handle the complex permitting and regulatory aspects to ensure
              compliance with local building codes and regulations.
            </p>
          </div>
          <div className=" lg:hidden mt-9 border border-1 w-[300px] py-9 px-[50px] flex flex-col items-center  ml-[50px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Electrical Expertise
            </h1>
            <p className="lg:text-end">
              With expertise in electrical work, we handle the wiring and grid
              connection to ensure a seamless solar system integration.
            </p>
          </div>
          <div className=" lg:hidden mt-9 border border-1 w-[300px] py-9 px-[50px] flex flex-col items-center  ml-[50px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Monitoring and Optimization
            </h1>
            <p className="lg:text-end">
              We implement monitoring systems for tracking performance and
              making adjustments to maximize energy production.
            </p>
          </div>
          <div className=" lg:hidden mt-9 border border-1 w-[300px] py-9 px-[50px] flex flex-col items-center  ml-[50px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Professional Installation
            </h1>
            <p className="lg:text-end">
              Our team oversees the installation of solar panels, inverters, and
              other components, guaranteeing a flawless setup and connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
