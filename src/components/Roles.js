import React from 'react'
import Filled from '../assets/icons/Filled.svg'
import Flag from '../assets/icons/Flag.svg'
import Subtract from '../assets/icons/Subtract.svg'

const Roles = () => {
  return (
    <div className='card flex flex-col items-start mx-[2rem] md:mx-[6rem] pt-[1rem] pb-8 md:pb-[6rem]'>
      <div className='flex flex-col md:mt-[5rem]'>
        <h5 className='text-[#39B2EF] font-semibold text-xs md:text-base'>
          SPEED
        </h5>
        <h1 className='text-[#23262F] text-xl md:text-4xl font-bold mt-[.2rem]'>
          5 days to fill most roles
        </h1>
      </div>
      <div className='md:flex items-start justify-between mt-8 w-full'>
        <div className='mt-2 flex flex-col rounded-3xl drop-shadow-lg bg-[#fff] p-[1.5rem] min-w-[18rem] '>
          <img src={Subtract} alt='' className='w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem]' />
          <p className=' mt-4 md:mt-10 text-[#23262F] text-2xl md:text-4xl font-semibold'>200+</p>
          <h5 className='mt-2 font-semibold text-base'>Companies</h5>
        </div>
        <div className='mt-2 flex flex-col rounded-3xl drop-shadow-lg bg-[#fff] p-[1.5rem] min-w-[18rem] '>
          <img src={Filled} alt='' className='w-[4rem] h-[1rem] md:w-[2rem] md:h-[2rem]' />
          <p className='mt-4 md:mt-10 text-[#23262F] text-2xl md:text-4xl font-semibold'>2000+</p>
          <h5 className='mt-2 font-semibold text-base'>Engineers</h5>
        </div>
        <div className='mt-2 flex flex-col rounded-3xl drop-shadow-lg bg-[#fff] p-[1.5rem] min-w-[18rem] '>
          <img src={Flag} alt='' className='w-[4rem] h-[1rem] md:w-[2rem] md:h-[2rem]' />
          <p className='mt-4 md:mt-10 text-[#23262F] text-2xl md:text-4xl font-semibold'>40+</p>
          <h5 className='mt-2 font-semibold text-base'>Countries</h5>
        </div>
      </div>
    </div>
  )
}

export default Roles