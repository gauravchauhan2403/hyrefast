import React from 'react'
import Rocket from '../assets/icons/rocket.svg'
import ReactLogo from '../assets/icons/react.svg'
import AngularLogo from '../assets/icons/angular.svg'
import FlutterLogo from '../assets/icons/flutter.svg'
import KotlinLogo from '../assets/icons/kotlin.svg'

const CaseStudies = () => {
  return (
    <div className='bg-[#441949] flex flex-col items-start mx-[1rem] md:mx-[2rem] my-[2rem] rounded-3xl min-h-screen'>
      <div className='flex flex-col m-[2rem] md:mr-[3rem] md:ml-[6rem] md:mt-[4rem]'>
        <h5 className='text-[#FF70B5] font-semibold text-sm md:text-xl'>
          Set up in minutes
        </h5>
        <h1 className='text-[#FEFFFF] text-2xl lg:text-5xl font-bold mt-[.2em]'>
          Case studies
        </h1>
      </div>
      <div className=' md:flex items-start justify-between md:mt-[4rem] md:mb-[10rem]'>
        <div className='m-[2rem] md:ml-[6rem] bg-[#6C3B60] p-3 md:p-6 rounded-3xl card flex items-start justify-between'>
          <div>
            <div className='bg-[#33383F] p-2 md:p-4 rounded-full'><img src={Rocket} alt='rocket' /></div>
          </div>
          <div className='text-[#fff] ml-3 md:ml-6'>
            <h2 className='text-xl md:text-3xl font-semibold mb-2'>Use Fin-Tech, E-commerce</h2>
            <h5 className='text-base mb-4'>
              How hyrefast helped a fin-tech company get quality<br />
              developers on demand
            </h5>
            <div className='flex items-start mb-3'>
              <div className='m-1 p-1 rounded-full bg-white'><img src={AngularLogo} alt='angular logo' /></div>
              <div className='m-1 p-2 rounded-full bg-white'><img src={FlutterLogo} alt='flutter logo' /></div>
              <div className='m-1 p-1.5 rounded-full bg-white'><img src={ReactLogo} alt='react logo' /></div>
              <div className='m-1 p-3 rounded-full bg-white'><img src={KotlinLogo} alt='kotlin logo' /></div>
            </div>
            <h5 className='text-base mb-3'>Ecommerce, Health &  Wellness, Sales & Marketing</h5>
            <h5 className='text-base ml-1 mb-3'>Developer Engaged - 500 -1,000</h5>
            <button className='p-2 md:p-3 bg-[#441949] rounded-lg font-bold'>Hire in 3 days</button>
          </div>
        </div> {/* end of card */}
        <div className='m-[2rem] md:ml-[6rem] bg-[#6C3B60] p-3 md:p-6 rounded-3xl card flex items-start justify-between'>
          <div>
            <div className='bg-[#33383F] p-2 md:p-4 rounded-full'><img src={Rocket} alt='rocket' /></div>
          </div>
          <div className='text-[#fff] ml-3 md:ml-6'>
            <h2 className='text-xl md:text-3xl font-semibold mb-2'>Use Fin-Tech, E-commerce</h2>
            <h5 className='text-base mb-4'>
              How hyrefast helped a fin-tech company get quality<br />
              developers on demand
            </h5>
            <div className='flex items-start mb-3'>
              <div className='m-1 p-1 rounded-full bg-white'><img src={AngularLogo} alt='angular logo' /></div>
              <div className='m-1 p-2 rounded-full bg-white'><img src={FlutterLogo} alt='flutter logo' /></div>
              <div className='m-1 p-1.5 rounded-full bg-white'><img src={ReactLogo} alt='react logo' /></div>
              <div className='m-1 p-3 rounded-full bg-white'><img src={KotlinLogo} alt='kotlin logo' /></div>
            </div>
            <h5 className='text-base mb-3'>Ecommerce, Health &  Wellness, Sales & Marketing</h5>
            <h5 className='text-base ml-1 mb-3'>Developer Engaged - 500 -1,000</h5>
            <button className='p-2 md:p-3 bg-[#441949] rounded-lg font-bold'>Hire in 3 days</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies