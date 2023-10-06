import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-screen h-[70px] top-0 z-50 flex justify-between items-center px-4 bg-green-400 text-white">
      <div className="text-1xl font-semibold ml-[20px ]">SolarInc</div>

      {/* menu */}
      <ul className="hidden md:flex font-semibold mr-[60px]">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            AboutUS
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth={true}
            duration={500}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 text-sm  w-full h-screen text-white bg-green-400 flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-2xl ">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {' '}
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {' '}
          <Link
            onClick={handleClick}
            to="service"
            smooth={true}
            duration={500}
          >
            Service
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {' '}
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {' '}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
    </div>
  );
};

export default Navbar;
