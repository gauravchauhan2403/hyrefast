import React from 'react'
import Avatar from '../assets/icons/Avatar-10.svg';

const DeveloperCard = () => {
  return (
    <div className='m-4 bg-[#E2EBFC] relative rounded-3xl shadow-[0_57px_57px_-43px_rgba(31,47,70,0.06)] developerCard'>
      <div className='flex items-start p-2 md:px-[1rem] md:py-4'>
        <img src={Avatar} alt='' className='bg-[#BED5FF] w-[3.5rem] md:w-[5.5rem] mt-[1rem] px-[1rem] py-[.6rem] rounded-full' />
        <div className='md:flex md:items-start'>
        <h1 className='text-[#1A1D1F] mt-[1rem] mx-4 font-semibold text-xl lg:text-5xl'>PHP <br />Developer</h1>
        <div className='bg-[#2A85FF] text-[#FFF] text-xs md:text-sm font-bold rounded-lg p-1 md:px-[.8rem] md:py-[.6em]'>Hire in 2 days</div>
        </div>
      </div>
      <div className='flex flex-wrap px-[1.6rem] md:pt-[1rem] md:pb-[2rem]'>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[1em] py-[.4em]'>HTML</p>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[1em] py-[.4em]'>CSS</p>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[1em] py-[.4em]'>SCSS</p>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[1em] py-[.4em]'>Node.js</p>
      </div>
    </div>
  )
}

export default DeveloperCard