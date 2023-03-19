import React from 'react';
import Animation from './Animation';
import ArrowRight from '../assets/icons/arrow-right.svg';
// import Animation2 from '../assets/animation/final_2.webm';

const Hero = () => {
  return (
    <div>
    <div className='wrapper bg-[#FFFFFF] flex items-start justify-between flex-col pl-[2rem] lg:pl-[10rem] w-[100%] md:min-h-[100%] relative'>
      {/* Left side */}
      <div className='headings flex flex-col items-start justify-center lg:h-[100%] font-bold leading-none pt-2 lg:pt-[4rem] text-[2rem] md:text-[2rem] lg:text-[3.2rem]'>
        <p><span className='text-[#2A85FF]'>Hyrefast </span>Engineers</p>
        <span>from Top Global</span>
        <span>Development</span>
        <span>Companies</span>
        <div className='text-[#000] mt-6 text-base font-normal rounded-2xl leading-4 py-4'>
          <ul>
            <li className='wrapper flex items-center px-[.35rem] py-1'>
              <img src={ArrowRight} alt='' className='mx-1 h-4 w-4' />
              <p>Pre-hired Engineers: Zero Drop Outs</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <img src={ArrowRight} alt='' className='mx-1 h-4 w-4' />
              <p>Deployment: 48 hrs. from selections</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <img src={ArrowRight} alt='' className='mx-1 h-4 w-4' />
              <p>Flexible Contract</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <img src={ArrowRight} alt='' className='mx-1 h-4 w-4' />
              <p>Across Timezones</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <img src={ArrowRight} alt='' className='mx-1 h-4 w-4' />
              <p>No Freelancers: Easy Reliability</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='lg:absolute relative w-[100%] md:w-[55%] lg:[65%] md:z-50 md:top-0 md:right-0'>
        <Animation />
        {/* <video src={Animation2} playsInline autoPlay loop muted type='video/webm' /> */}
      </div>
    </div>
    <img src={require('../assets/images/floor.jpg')}
        alt="floor"
        className="w-full object-cover"
    />
    </div>
  )
}

export default Hero