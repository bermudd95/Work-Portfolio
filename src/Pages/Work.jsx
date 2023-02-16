import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Work = () => {
    const slides = [
        {
          url: 'https://repository-images.githubusercontent.com/556975408/9289575e-42f9-4d24-bdc7-068e22df5ad0',
        },
        {
          url: 'https://repository-images.githubusercontent.com/548468894/85795baf-83b9-4690-a870-6b844b8771aa',
        },
        {
          url: 'https://repository-images.githubusercontent.com/545208464/32753419-8338-4ce9-848c-3e9ff240b05e',
        },
    
        {
          url: 'https://repository-images.githubusercontent.com/548457414/d0643b77-24df-4f47-b5cb-1f067f0569a9',
        },
        {
          url: 'https://repository-images.githubusercontent.com/594595791/4e1cb7fd-7c1a-444e-8073-080d73a28bdb',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
  return (
    <div>
        <div className='text-center m-5 py-5'>
           <h2 className='text-3xl font-bold'>
                Projects
            </h2> 
        </div>
      <div name="work" className=" h-[780px] m-5 pb-14 px-4 border-b-2 border-solid border-black relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize: '400px', backgroundRepeat: 'no-repeat' }}
          className="w-full h-[60%] rounded-2xl bg-center duration-500 cursor-pointer"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[25%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[25%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work