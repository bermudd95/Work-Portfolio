import React from 'react'
import { GoLocation } from 'react-icons/go';

const Home = () => {
  return (
		<>
			<div id='background' className='w-screen'>
				<div className='absolute right-[25%] top-[25%] text-xl font-bold flex'>
					<GoLocation/> 
					<p className='pl-2'>
						Seattle, WA
					</p>	
				</div>
				
				<img
					id="backgroundImage"
					src={
						"https://images.unsplash.com/photo-1589481169991-40ee02888551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VhdHRsZXxlbnwwfHwwfHw%3D&auto=format&q=60"
					}
					alt=''
				/>
			</div>
			<div
				name='about'
				className='mx-9 pt-[5rem] border-solid border-b-2 border-gray-500'
			>
				<h2 className='text-4xl text-center font-bold text-blue-600 pb-10'>
					Front End Developer
				</h2>
				<h3 className='text-xl sm:text-2xl text-center font-semibold pt-5 pb-12'>
					A Navy Veteran that has a passion for building as well as improving a
					person's digital experience.
				</h3>
				<div className='flex justify-evenly pb-10'>
					<button className='bg-blue-500 hover:bg-blue-400 hover:text-white border-2 border-black rounded-xl py-3 px-5'>
						<a href='https://github.com/bermudd95?tab=repositories'>GitHub</a>
					</button>
					<button className='bg-blue-500 hover:bg-blue-400 hover:text-white border-2 border-black rounded-xl py-3 px-5'>
						<a
							href='https://drive.google.com/file/d/1_C44ohL1WuKsxn8sUt5F5j0kILuG_5gb/view?usp=share_link'
							target='_blank'
							rel='noreferrer'
						>
							Resume
						</a>
					</button>
				</div>
			</div>
		</>
	);
}

export default Home
