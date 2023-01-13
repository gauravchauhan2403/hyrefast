import React from 'react';
import ThreeUser from '../assets/icons/3User.svg';
import AddUser from '../assets/icons/addUser.svg';
import Document from '../assets/icons/Document.svg';
import TimeCircle from '../assets/icons/timeCircle.svg';
import Animation from '../assets/animation/final_3.mp4';

const Hero = () => {
  return (
    <div>
    <div className='wrapper bg-[#FFFFFF] flex items-start justify-between pl-[5rem] w-[100%] h-[100%] relative'>
      {/* Left side */}
      <div className='headings flex flex-col items-start justify-center h-[100%] font-bold leading-none py-[3rem] text-[3rem]'>
        <span>Hire Software</span>
        <span>Engineers of</span>
        <span className='text-[#2A85FF]'>Top Development</span>
        <span>Companies</span>
        <div className='heroCard w-[320px] h-[87px] mt-[2.6rem] bg-[#F4F4F4] text-[#6F767E] text-[1rem] font-normal rounded-2xl leading-4 p-[.5rem]'>
          <ul className='flex flex-wrap'>
            <li className='wrapper flex items-center px-[.35rem] py-[.5rem]'>
              <img src={Document} alt='logo' className='' />
              <p className='ml-[.5rem]'>Flexible Contracts</p>
            </li>
            <li className='wrapper flex px-[.35rem] py-[.5rem]'>
              <img src={AddUser} alt='logo' className='' />
              <p className='ml-[.5rem]'>No freelancers</p>
            </li>
            <li className='wrapper flex px-[.35rem] pt-[.7rem]'>
              <img src={ThreeUser} alt='logo' className='' />
              <p className='ml-[.5rem]'>Team in 5 days</p>
            </li>
            <li className='wrapper flex px-[.35rem] pt-[.7rem] ml-[1.4rem]'>
              <img src={TimeCircle} alt='logo' className='' />
              <p className='ml-[.5rem]'>Time Zone</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='absolute z-50 w-[60%] top-0 right-0'>
        <video src={Animation} autoPlay loop muted />
      </div>
    </div>
    <img src={require('../assets/images/floor.jpg')}
        alt="floor"
    />
    </div>
  )
}

export default Hero