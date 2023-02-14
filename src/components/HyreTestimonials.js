import React from 'react'

const HyreTestimonial = () => {
  return (
    <div className='card bg-[#fff] flex items-start justify-between mt-[1rem] rounded-[74px] min-h-screen'>
      <div className='hyre_trust flex flex-col m-[4rem] md:px-[5rem] md:py-[3rem]'>
        <h5 className='text-[#45B36B] font-semibold text-sm md:text-base uppercase'>
          WHAT Clients Says
        </h5>
        <h1 className='text-[#23262F] text-2xl lg:text-5xl font-bold mt-[.2em]'>
          hyre_Testimonials
        </h1>
        <p className='text-[#23262F] font-sm md:text-lg my-[2rem] md:w-3/5 '>
          Rahul is one of the few creative designers who combine business
          knowledge, user experience design, and coding. These unique skill
          sets make him an extraordinary addition to our team. He helped us
          create our branding, website, and dashboards, and contributed significantly to our business strategy. 
          Its a pleasure to work with professionals like him.
        </p>
        <h4 className='text-[#23262F] text-lg md:text-xl font-bold'>
          Andrew AZY
        </h4>
        <p className=' text-[#23262F] md:text-base font-medium'>Avo Rewards</p>
        <div className='rounded-full border-2 border-solid border-slate-500 mt-6 p-2 w-fit'>
          <img src={require('../assets/images/profile.png')} 
          alt='profile'
          className='rounded-full w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]'
          />
        </div>
      </div>
    </div>
  )
}

export default HyreTestimonial



