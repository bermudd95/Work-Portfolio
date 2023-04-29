import React from 'react'

const Home = () => {
  return (
		<div name='home' className='m-5 h-full'>
			<div className='flex flex-col justify-center mx-auto px-8 pt-12 text-center h-full'>
				<h1 className='text-4xl sm:text-7xl font-bold text-black'>
					Hello!, Hola!, Bonjour!
				</h1>
				<div
					name='about'
					className='pt-[5rem] border-solid border-b-2 border-gray-500'
				>
					<h2 className='text-2xl sm:text-3xl font-bold text-blue-600 pb-10'>
						My name is Danny Bermudez | Front End Developer
					</h2>
					<h3 className='text-xl sm:text-2xl font-semibold pt-5 pb-12'>
						Navy Veteran that has a passion for building as well as improving a
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
			</div>
		</div>
	);
}

export default Home
