import React from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { data } from '../data/data';
import { cards } from '../data/data';
import { Link } from 'react-scroll';

const Header = () => {
  const img1 =
    'https://res.cloudinary.com/dutvrzezk/image/upload/v1696377012/pexels-ki-media-9799757_tgiwyc.jpg';

  return (
    <div
      name="home"
      className="w-full h-full bg-white"
    >
      {/* Container */}
      <div className="flex flex-col text-black "></div>
      <div className="relative flex flex-col items-center justify-center mt-10">
        <img
          className="  lg:w-[1250px] lg:h-[540px] lg:mt-[100px] mt-[100px]  w-[340px] "
          src={img1}
          alt="key"
        />
        <div className="flex flex-col  absolute top-28 gap-3 w-fit px-16 py-4 text-center justify-center  items-center z-40  ">
          <h1 className="mt-[20px] text-1xl text-white shadow-md z-index lg:text-5xl font-extrabold">
            Energy Generated From Natural Resources
          </h1>
          <p className="text-sm text-white px-7 lg:text-2xl lg:font-extrabold font-bold">
            Solar power: because the best things in life end up being free.
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            <button className="bg-orange-500 font-semibold text-sm text-white mt-[6px] py-3  rounded">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
