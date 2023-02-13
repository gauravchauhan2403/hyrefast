import React from 'react'
import Avatar from '../assets/icons/Avatar-10.svg';

const DeveloperCard = () => {
  return (
    <div className='m-6 bg-[#E2EBFC] relative rounded-xl drop-shadow-xl developerCard'>
      <div className='flex items-start p-2 md:px-[.8rem] md:py-4'>
        <img src={Avatar} alt='' className='bg-[#BED5FF] w-[2.5rem] md:w-[4rem] mt-[1rem] px-[.8rem] py-[.4rem] rounded-full' />
        <div className='md:flex md:items-start md:justify-between'>
        <h1 className='text-[#1A1D1F] mt-[1rem] mx-4 font-bold text-xl lg:text-4xl'>PHP <br />Developer</h1>
        <div className='bg-[#2A85FF] text-[#FFF] text-xs md:text-sm font-bold rounded-lg p-2 md:px-[.8rem] md:py-[.4rem]'>Hire in 2 days</div>
        </div>
      </div>
      <div className='flex flex-wrap px-[2rem] md:py-[1rem]'>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[.6rem] py-[.2rem]'>HTML</p>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[.6rem] py-[.2rem]'>CSS</p>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[.6rem] py-[.2rem]'>SCSS</p>
        <p className='bg-[#B1E5FC] m-[.6em] font-semibold text-xs lg:text-sm rounded-lg px-[.6rem] py-[.2rem]'>Node.js</p>
      </div>
    </div>
  )
}

export default DeveloperCard