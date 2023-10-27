import React from 'react';

const Skills = () => {
  return (
    <div
      name="service"
      className="w-full lg:h-screen bg-white text-gray-300"
    >
      <div className="text-white mt-[180px] flex flex-col  px-8   items-center justify-center lg:flex-row  gap-8">
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
          <div></div>
          <div>
            <h1 className="font-semibold text-xl text-black">
              Easy installation
            </h1>
            <p className="text-end">
              Our skilled technicians will install your solar system with
              precision and care. Safety and quality are our priorities, and we
              adhere to industry standards.Our service covers all necessary
              permits, regulatory compliance, and inspections, so you can relax
              knowing that your solar installation is in capable hands.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl text-black">
              Project managment
            </h1>
            <p className="text-end">
              Assess the project's technical, economic, and environmental
              feasibility,Establish clear and measurable goals, such as
              electricity generation capacity, cost targets, and environmental
              impact.
              <br />
              Identify suitable locations based on solar resource availability,
              land accessibility, and environmental impact assessments.
              <br />
              Manage the construction phase, including site preparation,
              installation of solar panels, electrical wiring, and
              infrastructure.
            </p>
          </div>
        </div>
        <div className="lg:flex flex-col hidden">
          <img
            src="https://res.cloudinary.com/dutvrzezk/image/upload/v1696448459/solar_eyoezs.webp"
            alt="solar "
          />
        </div>

        <div className="flex flex-col lg:flex-col text-center justify-center items-center">
          <div className="hidden lg:block">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Solar Solutions
            </h1>
            <p className="lg:text-end">
              {' '}
              Our solar solutions are tailored to meet your specific needs. we
              have the right solar solution for you. Enjoy the benefits of
              clean, reliable, and sustainable energy.
            </p>
          </div>
          <div className="hidden lg:block">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              {' '}
              Solar Panel Removal and Reinstallation
            </h1>
            <p className="lg:text-end">
              Planning to move? We can safely remove your solar panels and
              reinstall them at your new location, ensuring your solar
              investment continues to benefit you.
            </p>
          </div>
          <div className="hidden lg:block">
            <h1 className=" font-semibold text-xl text-black lg:text-end mt-5">
              Inspection And Maintenance
            </h1>
            <p className="lg:text-end">
              Thorough inspection of the solar array to identify and address any
              issues, including damaged panels, loose connections, or electrical
              problems,Periodic inspection of inverters and electrical
              components to ensure they are functioning correctly.
            </p>
          </div>
          <div className="lg:hidden mt-9 border border-1 w-[300px] py-9 px-[51px] flex flex-col items-center  ml-[20px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Renewable Energy Solutions
            </h1>
            <p className="lg:text-end lg:px-7">
              Join the renewable energy revolution with our eco-friendly
              solutions. We offer a range of renewable energy solutions that
              allow you to reduce your environmental impact .
            </p>
          </div>

          <div className=" lg:hidden mt-9 border border-1 w-[300px] py-9 px-[50px] flex flex-col items-center  ml-[20px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Solar Maintenance
            </h1>
            <p className="lg:text-end lg:px-7">
              Protect your solar investment with our comprehensive solar
              maintenance services. We offer proactive maintenance and
              troubleshooting to keep your system running smoothly.
            </p>
          </div>

          <div className=" lg:hidden mt-9 border-2 w-[301px] py-9 px-[50px] flex flex-col items-center  ml-[20px]">
            <h1 className="font-semibold text-xl text-black lg:text-end">
              Energy Solutions
            </h1>
            <p className="lg:text-end lg:px-7">
              Harness the power of the sun with our cutting-edge energy
              solutions. Whether you're looking to reduce your carbon footprint
              our energy solutions have you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
