import React from 'react'

const Home = () => {
  return (
    <div name="home" className="m-5 h-full">
        <div className="flex flex-col justify-center mx-auto px-8 pt-12 text-center h-full">
            <h1 className="text-4xl sm:text-7xl font-bold text-black">
                Hello!, Hola!, Bonjour!
            </h1>
            <div name='about' className="pt-[10rem] border-solid border-b-2 border-gray-500">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 pb-10">
                    My name is Danny Bermudez and I would like to thank you for visiting
                    my portfolio site!
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold pt-5 pb-12">
                    I have a passion for acts of service and with building as well as
                    improving a person's digital experience, I have achieved that.
                    Throughout my years from the military all the way to working in
                    retail, I have gained a vast range of skills that allow me to help
                    everyone from a person starting off on their new business, all the
                    up to a large corporation. If you would like to learn more, you may
                    view my work on this site or on my 
                    <span className='pl-1 hover:text-blue-400'>
                        <a href='https://github.com/bermudd95'>
                            GitHub    
                        </a>    
                    </span> you can take a look at my resume
                    <span className='pl-1'>
                        <a>
                            here
                        </a>
                    </span>
                    .
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Home