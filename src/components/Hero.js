import React from 'react';
import Animation from './Animation';
// import Animation2 from '../assets/animation/final_2.webm';

const Hero = () => {
  return (
    <div>
    <div className='wrapper bg-[#FFFFFF] flex items-start flex-col justify-between pl-[3rem] lg:pl-[11rem] w-[100%] md:min-h-[100%] relative'>
      {/* Left side */}
      <div className='headings flex flex-col items-start justify-center lg:h-[100%] font-bold leading-none py-[1rem] lg:pt-[4rem] text-[1rem] md:text-[2rem] lg:text-[2.6rem] xl:text-[3.4rem] 2xl:text-[4rem]'>
        <p><span className='text-[#2A85FF]'>Hyrefast </span>Engineers</p>
        <span>from Top Global</span>
        <span>Development</span>
        <span>Companies</span>
        <div className='text-[#000] text-base font-normal rounded-2xl leading-4 py-4'>
          <ul>
            <li className='wrapper flex items-center px-[.35rem] py-1'>
              <p>-> Pre-hired Engineers: Zero Drop Outs</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <p>-> Deployment: 48 hrs. from selections</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <p>-> Flexible Contract</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <p>-> Across Timezones</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-1'>
              <p>-> No Freelancers: Easy Reliability</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='lg:absolute relative sm:w-[100%] md:w-[55%] lg:[60%] md:z-50 md:top-0 md:right-0'>
        <Animation />
        {/* <video src={Animation2} playsInline autoPlay loop muted type='video/webm' /> */}
      </div>
    </div>
    <img src={require('../assets/images/floor.jpg')}
        alt="floor"
    />
    </div>
  )
}

export default Hero