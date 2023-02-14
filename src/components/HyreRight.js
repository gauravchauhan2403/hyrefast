import React from 'react';
import DeveloperCard from './DeveloperCard';
import ReactLogo from '../assets/icons/react.svg';
import AngularLogo from '../assets/icons/angular.svg';
import FlutterLogo from '../assets/icons/flutter.svg';
import KotlinLogo from '../assets/icons/kotlin.svg';
import JavaLogo from '../assets/icons/java.svg';
import HtmlLogo from '../assets/icons/html.svg';
import SassLogo from '../assets/icons/sass.svg';
import PythonLogo from '../assets/icons/python.svg';
import PhpLogo from '../assets/icons/php.svg';
import SwiftLogo from '../assets/icons/swift.svg';
import ArrowUp from '../assets/icons/arrow-up.svg';
import ArrowDown from '../assets/icons/arrow-down.svg';

const HyreRight = () => {
  return (
    <div className='relative flex px-[.6rem] md:px-[2rem] py-[2rem]'>
      <div className='glass z-10 bg-[rgba(255,255,255,0.6)] backdrop-blur-md flex flex-col items-start justify-between rounded-3xl w-full'>
        <div className='px-[8rem] pt-10 flex flex-col md:flex-row items-start justify-between w-full'>
          <div className='hyreRight py-[2rem] flex items-start flex-col'>
            <h5 className='text-[#2A85FF] font-bold text-sm lg:text-base uppercase'>Set up in minutes</h5>
            <h1 className='text-[#23262F] text-2xl lg:text-5xl font-bold mt-[.2em]'>hyre_Right</h1>
            <p className='text-[#353945] font-normal text-xs lg:text-lg mt-[.8em]'>The tech stack of your choice – <br />set up in minutes</p>
          </div>
          <div className='flex items-center justify-center pt-10'>
          <div>
            <DeveloperCard />
            <DeveloperCard />
            <DeveloperCard />
          </div>
          <div className='flex flex-col justify-around items-center'>
            <img src={ArrowUp} alt='' className='m-2 h-5 w-5 cursor-pointer' />
            <img src={ArrowDown} alt='' className='m-2 h-5 w-5 cursor-pointer' />
          </div>
          </div>
        </div>
        <div className=' px-11 pb-10 pt-6 flex items-center justify-between overflow-hidden w-full'>
          <div className='p-1 md:p-2 rounded-full bg-white drop-shadow-xl'><img src={AngularLogo} alt='angular' /></div>
          <div className='p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={FlutterLogo} alt='flutter' /></div>
          <div className='p-1 md:p-2 rounded-full bg-white drop-shadow-xl'><img src={ReactLogo} alt='react' /></div>
          <div className='p-2 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={KotlinLogo} alt='kotlin logo' /></div>
          <div className='p-1 md:p-2 rounded-full bg-white drop-shadow-xl'><img src={SwiftLogo} alt='swift' /></div>
          <div className='p-1 md:p-2 rounded-full bg-white drop-shadow-xl'><img src={JavaLogo} alt='java' /></div>
          <div className='p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={HtmlLogo} alt='html' /></div>
          <div className='p-1 md:p-2 rounded-full bg-white drop-shadow-xl'><img src={SassLogo} alt='sass' /></div>
          <div className='p-1 md:p-2 rounded-full bg-white drop-shadow-xl'><img src={PythonLogo} alt='python' /></div>
          <div className='p-1 md:p-2 rounded-full bg-white drop-shadow-xl'><img src={PhpLogo} alt='php' /></div>
        </div>
      </div>
     <div className='circleAngular absolute bottom-0 w-[30em] h-[30em] md:w-[40rem] md:h-[40rem] blur-xl rounded-full rotate-45 bg-gradient-to-t from-[#fa9a94] via-[#d6a9f7] to-[#ddb2f8]'></div>
     <div className='bg-[#f9f9f9] w-3/4 h-[3rem] absolute bottom-0'></div>
    </div>
  )
}

export default HyreRight;