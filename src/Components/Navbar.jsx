import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='w-full h-[60px] flex justify-between items-center px-4 bg-slate-400'>
      <div>
        <h1 className='text-3xl font-bold text-purple-700'>
            Welcome
        </h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex md:font-semibold'>
        <li className='md:pr-3 md:text-xl'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='md:pr-3 md:text-xl'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gray-600 text-white flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Navbar;