import React from 'react'

const HyreTestimonial = () => {
  return (
    <div className='card bg-[#fff] flex items-start justify-between mt-[1rem] rounded-[74px] min-h-screen'>
      <div className='hyre_trust flex flex-col m-[3rem] md:px-[6rem] md:pt-[6rem] md:pb-[10rem]'>
        <h5 className='text-[#45B36B] font-semibold text-sm md:text-xl uppercase'>
          WHAT Clients Says
        </h5>
        <h1 className='text-[#23262F] text-2xl lg:text-5xl font-bold mt-[.2em]'>
          hyre_Testimonials
        </h1>
        <p className='text-[#23262F] font-base md:text-2xl my-[3rem] md:w-3/4 '>
            Rahul is one of the few creative designers who combine business
          knowledge, user experience design, and coding. These unique skill
          sets make him an extraordinary addition to our team. He helped us
          create our branding, website, and dashboards, and contributed significantly to our business strategy. 
          Its a pleasure to work with professionals like him.
        </p>
        <h4 className='text-[#23262F] text-lg md:text-2xl font-bold'>
          Andrew AZY
        </h4>
        <p className=' text-[#23262F] md:text-lg font-medium'>Avo Rewards</p>
        <div className='rounded-full border-2 border-solid border-slate-500 mt-6 p-2 w-fit'>
          <img src={require('../assets/images/profile.png')} 
          alt='profile'
          className='rounded-full w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem]'
          />
        </div>
      </div>
    </div>
  )
}

export default HyreTestimonial



