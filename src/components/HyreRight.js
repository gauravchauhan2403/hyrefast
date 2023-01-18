import React from 'react';
import DeveloperCard from './DeveloperCard';
import ReactLogo from '../assets/icons/react.svg';

const HyreRight = () => {
  return (
    <div className='bg-[#f9f9f9] relative flex px-[2rem] py-[3rem]'>
     <div className='glass  z-30 bg-[rgba(255,255,255,0.4)]  rounded-3xl min-h-screen w-full'>
      <div className='glass backdrop-blur-sm z-40 bg-[rgba(255,255,255,0.4)] flex flex-col items-start justify-between p-[2rem] rounded-3xl min-h-screen w-full'>
        <div className='flex flex-col md:flex-row items-start justify-between w-full'>
          <div className='hyreRight px-[2em] py-[2em] flex items-start flex-col'>
            <h5 className='text-[#2A85FF] font-bold text-xs lg:text-base uppercase'>Set up in minutes</h5>
            <h1 className='text-[#23262F] text-xl lg:text-5xl font-bold mt-[.2em]'>hyre_Right</h1>
            <p className='text-[#353945] font-normal text-xs lg:text-base mt-[.8em]'>The tech stack of your choice – <br />set up in minutes</p>
          </div>
          <DeveloperCard />
        </div>
        <div>
          <img src={ReactLogo} alt='' className='logos shadow-[0_5.4px_7.2px_rgba(0,0,0,0.1)] rounded-full p-[1rem]' />
        </div>
      </div>
      <div className='bg-[#f9f9f9] w-3/4 z-30 h-[3em] absolute bottom-0'></div>
     </div>
      <div className='circleAngular absolute bottom-0 w-[20em] h-[20em] md:w-[30em] md:h-[30em] rounded-full rotate-45 bg-gradient-to-t from-[#FFADA9] via-[#E6D0F5] to-[#E6CFF4]'></div>
    </div>
  )
}

export default HyreRight;