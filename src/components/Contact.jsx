import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-white  flex justify-center items-center p-4"
    >
      <form className="flex flex-col items-center  max-w-[600px] w-full">
        <div className="mb-14 text-center">
          <p className="text-4xl text-center font-bold inline border-b-4 border-black text-black">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] w-[280px] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] w-[280px] "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 w-[270px flex w-[280px]  h-[230px] "
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white bg-orange-500 px-8 py-3 my-6 mx-auto flex items-center">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
