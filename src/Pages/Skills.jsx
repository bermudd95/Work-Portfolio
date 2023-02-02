import React from 'react'

const Skills = () => {
  return (
    <div className="pt-12 text-center mx-10 m-5 pb-10 border-solid border-b-2 border-gray-400">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
          <div className='pt-8 grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2 grid-rows-3 gap-5'>
            <div name='skills'  className='flex flex-col m-5'>
              <img src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true' alt='' />
              <h3 className='text-3xl font-bold pt-5'>
                HTML
              </h3>
            </div>
            <div className='flex flex-col m-5'>
              <img src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true' alt='' />
              <h3 className='text-3xl font-bold pt-5'>
                CSS
              </h3>
            </div>
            <div className='flex flex-col m-5'>
              <img src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true' alt='' />
              <h3 className='text-3xl font-bold pt-5'>
                Javascript
              </h3>
            </div>
            <div className='flex flex-col m-5'>
              <img src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true' alt='' />
              <h3 className='text-3xl font-bold pt-5'>
                React
              </h3>
            </div>
            <div className='flex flex-col m-5'>
              <img src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/tailwind.png?raw=true' alt='' />
              <h3 className='text-3xl font-bold pt-5'>
                Tailwind
              </h3>
            </div>
            <div className='flex flex-col m-5'>
              <img src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/github.png?raw=true' alt='' />
              <h3 className='text-3xl font-bold pt-5'>
                Github
              </h3>
            </div>
            <div className='flex flex-col m-5'>
              <img src='https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/firebase.png?raw=true' alt='' />
              <h3 className='text-3xl font-bold pt-5'>
                Firebase
              </h3>
            </div>
          </div>
        </div>
  )
}

export default Skills