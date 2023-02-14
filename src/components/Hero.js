import React from 'react';
import ThreeUser from '../assets/icons/3User.svg';
import AddUser from '../assets/icons/addUser.svg';
import Document from '../assets/icons/Document.svg';
import TimeCircle from '../assets/icons/timeCircle.svg';
import Animation from './Animation';
// import Animation from '../assets/animation/final_3.mp4';

const Hero = () => {
  return (
    <div>
    <div className='wrapper bg-[#FFFFFF] flex items-start flex-col justify-between pl-[3rem] lg:pl-[11rem] w-[100%] lg:min-h-[100%] relative'>
      {/* Left side */}
      <div className='headings flex flex-col items-start justify-center lg:h-[100%] font-bold leading-none py-[1rem] lg:py-[4rem] text-[2rem] lg:text-[3rem]'>
        <span>Hire Software</span>
        <span>Engineers of</span>
        <span className='text-[#2A85FF]'>Top Development</span>
        <span>Companies</span>
        <div className='heroCard w-[300px] h-[87px] mt-[2rem] bg-[#F4F4F4] text-[#6F767E] text-[.9rem] font-normal rounded-2xl leading-4 p-[.4rem]'>
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
      <div className='lg:absolute relative lg:w-[60%] sm:w-[100%] lg:z-50 lg:top-0 lg:right-0'>
        <Animation />
        {/* <video src={Animation} playsInline autoPlay loop muted type='video/mp4' /> */}
      </div>
    </div>
    <img src={require('../assets/images/floor.jpg')}
        alt="floor"
    />
    </div>
  )
}

export default Hero