import React from "react";

const Work = () => {
	return (
		<div name='work' className='w-full md:h-full'>
			<div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
				<div className='pb-8 text-center'>
					<h2 className='text-3xl font-bold'>Projects</h2>
					<h2 className='text-lg font-semibold py-6'>
						{" "}
						Check out my most recent work.
					</h2>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
					<div className='w-full h-full bg-gray-300 rounded-lg'>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/631439095/42073932-1ae0-4cd1-a1c0-10c71a3ee60e'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center'>
							<h2 className='text-2xl font-bold underline pt-4'>
								Desktop Productivity App
							</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									A productive assisting site that was inspired for the Notion
									Dashboard. Upon loading up the site, the user is presented
									with today's date as well as a yearly and weekly day tracker.
									It also allows the user to search up their local weather as
									well as create list of daily tasks.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://productivity-app-iota.vercel.app/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/productivity-app'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full h-full bg-gray-300 rounded-lg'>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/625403659/3a9bed46-be1b-421e-88bf-a528a80607ac'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center'>
							<h2 className='text-2xl font-bold underline pt-4'>
								{" "}
								Mock Store Dashboard
							</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									A store dashboard for a local store. This site is designated
									for the corporate section or store leadership section of Loss
									Prevention Department of the company. At the start, the site
									provides various important information such as sales, returns
									and loss before presenting that information in a bar chart. It
									allows the user to dive deeper into loss of the store through
									the apprehensions section. There, the user is provided with
									the individual's name as well as the amount they recovered or
									lost. Leadership can be able to track the progress of reports
									created by Loss Prevention personnel through the reports
									tracker.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://ap-stats.vercel.app/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/AP-Stats'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full h-full bg-gray-300 rounded-lg'>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/556975408/9289575e-42f9-4d24-bdc7-068e22df5ad0'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center'>
							<h2 className='text-2xl font-bold underline pt-4'>YouView</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									My recreated version of the famous Youtube platform. With a
									handful of video data in the site, the user is able to use the
									search bar at the top or catergories section on the side to
									filter the videos.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://bermudd95.github.io/Youview-app/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/Youview-app'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full h-full bg-gray-300 rounded-lg'>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/548468894/85795baf-83b9-4690-a870-6b844b8771aa'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center'>
							<h2 className='text-2xl font-bold underline pt-4'>Weather-app</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									A weather application that allows the user to search up local
									weather. Upon search, the user is presented with the current
									temperature, as well as a humidity level, wind speed, etc.
									Overall, a simple but fun application.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://bermudd95.github.io/Weather-App/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/Weather-App/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/545208464/32753419-8338-4ce9-848c-3e9ff240b05e'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center bg-gray-300 rounded-lg'>
							<h2 className='text-2xl font-bold underline pt-4'>Movies.app</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									This movie application was designed for the user to search up
									information related to their favorite film such as actors,
									release date, etc.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://bermudd95.github.io/Movie-app/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/Movie-app'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full h-full bg-gray-300 rounded-lg'>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/619047607/c16107b9-2259-467b-9893-7b865ef11f85'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center'>
							<h2 className='text-2xl font-bold underline pt-4'>
								Cryptocurrency.io
							</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									A crypto currency application that was created for digital
									currency investors. When opened, the user is presencted with a
									ranked list of popular cryptocurrency. The user is then able
									to dive deeper into each one of the coins to learn more
									information about them such as their day, week, month and year
									performance.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://cryptocurrency-io.vercel.app'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/cryptocurrency.io'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full h-full bg-gray-300 rounded-lg'>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/599757987/6ac36e55-9cb9-444e-aaca-e98a2368e5bf'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center'>
							<h2 className='text-2xl font-bold underline pt-4'>Netflix 2.0</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									A recreation of the famous Netflix platform. When opened, the
									user is brought to a page that looks similar to the original.
									The user is required to create an account or sign into an
									existing one in order to save their favorite movie or series.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://netflix-clone-six-virid.vercel.app/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/Netflix-clone'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='w-full h-full bg-gray-300 rounded-lg'>
						<div>
							<img
								src='https://repository-images.githubusercontent.com/594595791/4e1cb7fd-7c1a-444e-8073-080d73a28bdb'
								alt=''
							/>
						</div>
						<div className='w-full h-full text-center'>
							<h2 className='text-2xl font-bold underline pt-4'>
								Makeup Studio
							</h2>
							<div className='py-4 mx-5 text-center'>
								<h3>
									A business site designed for a makeup artist. When opened the
									user is brought to the artist's landing page that briefly
									explains the services she offers as well her phone to allow
									quick contact. At the top, the user can navigate through
									different pages of the site such as an about page, a packages
									page, and a contact page.
								</h3>
							</div>
							<div>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://makeup-studio.vercel.app/'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://github.com/bermudd95/Makeup-studio'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
