import React from 'react'
import Arrow from '../assets/icons/Stroke.svg'
import Facebook from '../assets/icons/facebook.svg'
import Twitter from '../assets/icons/twitter.svg'
import Instagram from '../assets/icons/instagram.svg'
import Dribble from '../assets/icons/dribble.svg'
import Behance from '../assets/icons/behance.svg'

const Footer = () => {
  return (
    <div className='flex flex-col items-start bg-[#fff] rounded-3xl px-16 py-4 w-full'>
      <div className='md:flex items-start justify-between divide-x-2'>
        <div className='px-[4rem] md:px-[4rem] pt-[2rem] flex items-start md:justify-between'>
          <img src={require('../assets/images/Group.png')} alt='' className='h-8 w-30 md:h-12 md:w-50' />
          <ul className='px-[2rem] md:pl-[4rem] text-[#777E91] text-sm font-bold leading-8'>
            <li>Home</li>
            <li>ContactUs</li>
            <li>NDA</li>
            <li>Download</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className='px-8 md:pl-[4rem] pt-[2rem] flex flex-col text-[#23262F] leading-8 w-1/4'>
          <h4 className='font-bold text-sm uppercase'>Contact</h4>
          <p className='flex flex-wrap md:mt-4'>43252 Borer Mountains Zackerychester</p>
          <p>Bahamas</p>
          <p className='pb-11'>732-528-4945</p>
        </div>
        <div className='px-8 md:pl-[4rem] md:pt-[2rem] flex flex-col leading-8 w-4/12'>
          <h4 className='font-bold text-sm uppercase'>Newsletter</h4>
          <p className='flex flex-wrap md:mt-6'>Subscribe our newsletter to get more free design course and resource.</p>
          <div className='p-2 my-5 md:mx-2 flex items-center justify-between border rounded-full'>
            <input type='text' placeholder='Enter your email' className='md:mx-2 px-1 w-3/4' />
            <div className='px-3 py-4 rounded-full bg-[#FF592C]'><img src={Arrow} alt='' /></div>
          </div>
        </div>
      </div>
      <div className=' p-4 md:py-6 md:flex items-center justify-around w-full'>
        <p className='text-sm text-[#777E91]'>Copyright © 2022 Hyre_right. All rights reserved</p>
        <div className='flex'>
          <img src={Facebook} alt='' className='px-2' />
          <img src={Twitter} alt='' className='px-2' />
          <img src={Instagram} alt='' className='px-2' />
          <img src={Dribble} alt='' className='px-2' />
          <img src={Behance} alt='' className='px-2' />
        </div>
      </div>
    </div>
  )
}

export default Footer