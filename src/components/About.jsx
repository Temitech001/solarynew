import React from 'react';

const About = () => {
  const myPic =
    'https://res.cloudinary.com/dutvrzezk/image/upload/v1698375724/Mic_w2us4b.jpg';
  const aboutimg =
    'https://res.cloudinary.com/dutvrzezk/image/upload/v1696376468/ttt_qvgktz.jpg';
  return (
    <div
      name="about"
      className="w-full lg:h-screen bg-white text-gray-300 mt-[200px]  "
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 "></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <h1 className="font-semibold text-3xl text-start text-black ">
            20 Years of Experience in Solar Panel Service.
          </h1>
          <p className=" text-black text-start">
            Are you ready to take control of your energy future? Our
            high-quality solar panels are your ticket to clean, sustainable, and
            cost-effective power generation.Make the switch to solar and
            experience the many benefits it brings. From saving money to
            reducing your environmental impact, it's a choice you can feel good
            about.
          </p>
          <div className="sm:text-right text-4xl font-bold">
            {
              <img
                src={aboutimg}
                alt="imagee"
              />
            }
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-4xl  text-black font-bold inline border-b-4 border-black">
              About
            </p>
            {
              <img
                className="w-[250px]"
                src={myPic}
                alt="imagee"
              />
            }
            <p className="text-black px-[69px]">
              I am Michael Robert, the CEO of influxsolarinc. With a profound
              dedication to clean energy, I've devoted my career to advancing
              sustainable solutions to different companies across the world.
              This hands-on experience has shaped my commitment to providing
              cutting-edge solar solutions that prioritize quality and
              sustainability.
            </p>

            <p className="text-black mt-[40px] px-5">
              At influxsolarinc, we're passionate about harnessing the power of
              the sun to create a sustainable and cleaner future for generations
              to come.our company is dedicated to providing top-quality solar
              energy solutions to homes, businesses, and communities across the
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
