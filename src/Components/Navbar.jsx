import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='w-full h-[60px] flex justify-between items-center px-4 bg-slate-400'>
      <div className='w-screen'>
        <h1 className='text-3xl font-bold text-white'>
            Danny Bermudez
        </h1>
      </div>
      <ul className='flex font-semibold justify-evenly w-screen'>
        <li className='md:pr-3 md:text-xl cursor-pointer hover:text-gray-200'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl cursor-pointer hover:text-gray-200'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl cursor-pointer hover:text-gray-200'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl cursor-pointer hover:text-gray-200'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl cursor-pointer hover:text-gray-200'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> 
    </div>
  );
};

export default Navbar;