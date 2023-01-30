import React from 'react'
import Authentic from '../assets/icons/authentic.svg'
import Image from '../assets/images/image1.svg'
import Tick from '../assets/icons/Line.svg'
import Credit from '../assets/icons/credit.svg'
import Wallet from '../assets/icons/wallet.svg'
import Logo1 from '../assets/icons/logo1.svg'
import Logo2 from '../assets/icons/logo2.svg'
import Logo3 from '../assets/icons/logo3.svg'
import Logo4 from '../assets/icons/logo4.svg'
import Logo5 from '../assets/icons/logo5.svg'
import Logo6 from '../assets/icons/logo6.svg'


const HyreSecure = () => {
  return (
    <div className='card bg-[#fff] flex flex-col items-start justify-between rounded-[64px] px-4 pt-[2rem] min-h-screen'>
      <div className='md:flex items-start justify-between md:pb-[10rem]'>
        <div className='relative mx-[3rem] md:mt-[6rem] md:px-[4rem]'>
          <img src={Authentic} alt='stamp' className='absolute z-10 top-20 right-4' />
          <img src={Image} alt='buildings' />
        </div>
        <div className='flex flex-col mx-[1.6rem] md:p-[3rem] mt-[3rem]'>
          <h5 className='text-[#45B36B] font-semibold text-sm md:text-xl uppercase'>
          Your code, in your hands
          </h5>
          <h1 className='text-[#23262F] text-2xl lg:text-5xl font-bold mt-[.2rem]'>
            hyre_Secure
          </h1>
          <p className='font-base font-normal md:mt-4 '>
            We will take care of everything else
          </p>
          <div className='mt-14 p-[1.25rem] flex items-start bg-[#F4F5F6] max-w-md rounded-2xl max'>
            <img src={Tick} alt='right' className='w-8 h-8'></img>
            <div className='flex flex-col flex-wrap px-[1.25rem]'>
              <h4 className='font-semibold text-lg'>Pre_hired</h4>
              <p className='text-base font-normal'>
                Our engineers are pre-hired, all you need to do is choose one.
                0or as many as you like.
              </p>
            </div>
          </div>
          <div className='mt-6 p-[1.25rem] flex items-start bg-[#F4F5F6] max-w-md rounded-2xl max'>
            <img src={Credit} alt='right' className='w-8 h-8'></img>
            <div className='flex flex-col flex-wrap px-[1.25rem]'>
              <h4 className='font-semibold text-lg'>Verified</h4>
              {/* <p className='text-base font-normal'>
                Our engineers are pre-hired, all you need to do is choose one.
                0or as many as you like.
              </p> */}
            </div>
          </div>
          <div className='mt-6 p-[1.25rem] flex items-start bg-[#F4F5F6] max-w-md rounded-2xl max'>
            <img src={Wallet} alt='right' className='w-8 h-8'></img>
            <div className='flex flex-col flex-wrap px-[1.25rem]'>
              <h4 className='font-semibold text-lg'>Guaranteed replacement</h4>
              {/* <p className='text-base font-normal'>
                Our engineers are pre-hired, all you need to do is choose one.
                0or as many as you like.
              </p> */}
            </div>
          </div>
        </div>
      </div>
        <div className='hyre_trust mt-[4rem] flex flex-col px-[2rem] md:px-[5rem] pb-[6rem]'>
          <h5 className='text-[#45B36B] font-semibold text-sm md:text-xl uppercase'>
          Your code, in your hands
          </h5>
          <h1 className='text-[#23262F] text-2xl lg:text-5xl font-bold mt-[.2em]'>
            hyre_Trust
          </h1>
          <p className='text-[#6F767E] font-base text-lg md:text-2xl mt-4 '>
            We have helped 50+ organizations scale in the last 6 months.
          </p>
          <div className='mt-6 flex flex-start justify-between flex-wrap'>
            <img src={Logo1} alt='logo1' />
            <img src={Logo2} alt='logo2' />
            <img src={Logo3} alt='logo3' />
            <img src={Logo4} alt='logo4' />
            <img src={Logo5} alt='logo5' />
            <img src={Logo6} alt='logo6' />
          </div>
        </div>
    </div>
  )
}

export default HyreSecure