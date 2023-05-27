import React from 'react'

const Skills = () => {
  return (
		<div className='py-10 text-center mx-9 my-5 border-solid border-b-2 border-gray-400'>
			<div className='grid grid-cols-3 grid-rows-2 gap-2 md:flex'>
				<div name='skills' className='m-5'>
					<img
						className='hover:saturate-200'
						src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true'
						alt=''
					/>
				</div>
				<div className='m-5'>
					<img
						className='hover:saturate-200'
						src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true'
						alt=''
					/>
				</div>
				<div className='m-5'>
					<img
						className='hover:saturate-200'
						src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true'
						alt=''
					/>
				</div>
				<div className='m-5'>
					<img
						className='hover:saturate-200'
						src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true'
						alt=''
					/>
				</div>
				<div className='m-5'>
					<img
						className='hover:saturate-200'
						src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/tailwind.png?raw=true'
						alt=''
					/>
				</div>
				<div className='m-5'>
					<img
						className='hover:saturate-200 bg-gray-700'
						src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/github.png?raw=true'
						alt=''
					/>
				</div>
				<div className='m-5'>
					<img
						className='hover:saturate-200'
						src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/firebase.png?raw=true'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Skills