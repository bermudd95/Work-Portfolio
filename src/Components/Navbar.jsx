import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
		<div
			className={`w-screen h-full flex flex-wrap justify-between items-center px-4 md: bg-slate-400`}
		>
			<div className='w-screen flex justify-between md:block'>
				<h1 className='text-4xl md:underline font-bold md:text-center text-white'>
					Danny Bermudez
				</h1>
				<div className='pt-3'>
					<AiOutlineMenu
						className='md:hidden'
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
			</div>
			<ul
				className={`w-screen block flex-grow md:flex md:py-5 md:justify-evenly lg:w-screen h-full ${
					isOpen ? "block" : "hidden"
				}`}
			>
				<li className='md:pr-3 mt-4 md:mt-0 md:text-xl md:text-center md:w-full cursor-pointer hover:text-gray-200 hover:border-x-2 hover:border-black'>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='md:pr-3 mt-4 md:mt-0  md:text-xl md:text-center md:w-full cursor-pointer hover:text-gray-200 hover:border-x-2 hover:border-black'>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='md:pr-3 mt-4 md:mt-0  md:text-xl md:text-center md:w-full cursor-pointer hover:text-gray-200 hover:border-x-2 hover:border-black'>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='md:pr-3 mt-4 md:mt-0  md:text-xl md:text-center md:w-full cursor-pointer hover:text-gray-200 hover:border-x-2 hover:border-black'>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='md:pr-3 my-4 md:my-0  md:text-xl md:text-center md:w-full cursor-pointer hover:text-gray-200 hover:border-x-2 hover:border-black'>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;