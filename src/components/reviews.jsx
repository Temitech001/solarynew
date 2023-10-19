import React from 'react';
import { AiOutlineStar, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsTrophy } from 'react-icons/bs';

const Reviews = () => {
  const n1 =
    'https://res.cloudinary.com/dutvrzezk/image/upload/v1697731893/vivint-solar-9CalgkSRZb8-unsplash_is7pnz.jpg';
  const n2 =
    'https://res.cloudinary.com/dutvrzezk/image/upload/v1697731893/giorgio-trovato-mIlvCv21W1s-unsplash_xacaff.jpg';
  const bgStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dutvrzezk/image/upload/v1696605980/tina-dawson-Kim9COAIEGc-unsplash_ewn1xu.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="flex gap-9 justify-center items-center mt-8">
      <div
        style={bgStyle}
        className=" w-[700px] py-9 text-white"
      >
        <div className="flex flex-col  justify-center items-center mt-1 gap-3">
          <div className="flex flex-col justify-center items-center border px-4 py-1 lg:px-[70px] lg:py-5 ">
            <h1 className="">
              <AiOutlineUsergroupAdd />
            </h1>
            <p>Total Projects</p>
            <p className="text-2xl">59+</p>
          </div>
          <div className="flex flex-col justify-center items-center border px-4 py-1 lg:px-[70px] lg:py-5">
            <h1>
              <AiOutlineStar />
            </h1>
            <p>Rating customers </p>
            <p>47+</p>
          </div>
          <div className="flex flex-col justify-center items-center border px-4 py-1 lg:px-[70px] lg:py-5">
            <h1>
              <BsTrophy />
            </h1>
            <p>Award winning</p>
            <p>49+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
