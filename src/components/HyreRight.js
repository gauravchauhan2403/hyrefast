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

const HyreRight = () => {
  return (
    <div className='relative flex px-[.6rem] md:px-[2rem] py-[3rem]'>
      <div className='glass z-10 bg-[rgba(255,255,255,0.6)] backdrop-blur-md flex flex-col items-start justify-between md:p-[2rem] rounded-3xl min-h-screen w-full'>
        <div className='flex flex-col md:flex-row items-start justify-between w-full'>
          <div className='hyreRight px-[2em] py-[2em] flex items-start flex-col'>
            <h5 className='text-[#2A85FF] font-bold text-xs lg:text-base uppercase'>Set up in minutes</h5>
            <h1 className='text-[#23262F] text-xl lg:text-5xl font-bold mt-[.2em]'>hyre_Right</h1>
            <p className='text-[#353945] font-normal text-xs lg:text-base mt-[.8em]'>The tech stack of your choice – <br />set up in minutes</p>
          </div>
          <div>
            <DeveloperCard />
            <DeveloperCard />
            <DeveloperCard />
          </div>
        </div>
        <div className='flex items-center justify-between overflow-hidden w-full'>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={AngularLogo} alt='angular' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={FlutterLogo} alt='flutter' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={ReactLogo} alt='react' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={KotlinLogo} alt='kotlin logo' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={SwiftLogo} alt='swift' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={JavaLogo} alt='java' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={HtmlLogo} alt='html' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={SassLogo} alt='sass' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={PythonLogo} alt='python' /></div>
          <div className='m-1 p-1 md:p-3 rounded-full bg-white drop-shadow-xl'><img src={PhpLogo} alt='php' /></div>
        </div>
      </div>
     <div className='circleAngular absolute bottom-0 w-[20em] h-[20em] md:w-[30em] md:h-[30em] rounded-full rotate-45 bg-gradient-to-t from-[#fca39f] via-[#debdf5] to-[#e0c1f3]'></div>
     <div className='bg-[#f9f9f9] w-3/4 h-[3em] absolute bottom-0'></div>
    </div>
  )
}

export default HyreRight;