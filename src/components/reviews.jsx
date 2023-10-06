import React from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';

const Reviews = () => {
  const bgStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dutvrzezk/image/upload/v1696605980/tina-dawson-Kim9COAIEGc-unsplash_ewn1xu.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div
        style={bgStyle}
        className=" w-[200px] text-white"
      >
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="w-24">
              <AiOutlineUsergroupAdd />
            </h1>
            <p>Total Projects</p>
            <p>49+</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1>
              <AiOutlineUsergroupAdd />
            </h1>
            <p>Total Projects</p>
            <p>49+</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1>
              <AiOutlineUsergroupAdd />
            </h1>
            <p>Total Projects</p>
            <p>49+</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Reviews;
