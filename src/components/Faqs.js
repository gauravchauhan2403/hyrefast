import React from 'react'

const Faqs = () => {
  return (
    <div className='flex flex-col items-start md:mt-[1rem] md:pb-[5rem] min-h-screen'>
      <div className='hyre_trust flex flex-col px-[3rem] pt-[4rem] md:px-[6rem] md:pt-[6rem]'>
        <h5 className='text-[#45B36B] font-semibold text-sn md:text-xl uppercase'>
          WHAT Clients Says
        </h5>
        <h1 className='text-[#23262F] text-2xl lg:text-5xl font-bold mt-[.2rem]'>
          FAQ's
        </h1>
      </div>
      <div className='md:flex px-[2rem] md:px-[6rem] md:pt-[3rem]'>
        <div className='md:w-1/5'>
          <ul className='flex md:flex-col flex-wrap'>
            <li className='rounded-xl p-3 hover:bg-[#EFEFEF] hover:text-[#1A1D1F] focus:bg-[#EFEFEF] active:bg-[#EFEFEF] text-[#6F767E] text-base font-semibold'>
              Get started
            </li>
            <li className='rounded-xl p-3 hover:bg-[#EFEFEF] hover:text-[#1A1D1F] focus:bg-[#EFEFEF] active:bg-[#EFEFEF] text-[#6F767E] text-base font-semibold'>
              Login & access
            </li>
            <li className='rounded-xl p-3 hover:bg-[#EFEFEF] hover:text-[#1A1D1F] focus:bg-[#EFEFEF] active:bg-[#EFEFEF] text-[#6F767E] text-base font-semibold'>
              Billing & payments
            </li>
            <li className='rounded-xl p-3 hover:bg-[#EFEFEF] hover:text-[#1A1D1F] focus:bg-[#EFEFEF] active:bg-[#EFEFEF] text-[#6F767E] text-base font-semibold'>
              My benefits
            </li>
            <li className='rounded-xl p-3 hover:bg-[#EFEFEF] hover:text-[#1A1D1F] focus:bg-[#EFEFEF] active:bg-[#EFEFEF] text-[#6F767E] text-base font-semibold'>
              Account settings
            </li>
          </ul>
        </div>
        <div className='md:w-4/5'>
          <ul className='flex flex-col items-start md:px-12'>
            <li className='flex flex-col text-[#33383F] pt-1 w-full'>
              <div className='flex justify-between hover:text-[#1A1D1F] text-[#33383F] text-base font-semibold border-b-[2px] py-2'>
                <h4>How to upgrade to Pro account?</h4>
                <button className=' border px-2 rounded-full'>+</button>
              </div>
              <p className='flex flex-wrap pt-3 text-[#6F767E] text-base font-medium'>Enjoy instant access to our vast library of 5,121 premium products and all upcoming new
                releases with super-fast download speeds powered by Amazon S3. Yes, you read that right.
                Getting $127,035 in value means you're saving more than 99% on all products making it the
                sweetest deal for premium design assets around.
              </p>
            </li>
            <li className='flex flex-col pt-3 w-full'>
              <div className='flex justify-between hover:text-[#1A1D1F] text-[#33383F] text-base font-semibold border-b-[2px] py-2'>
                <h4>I forgot my password</h4>
                <button className=' border px-2 rounded-full'>+</button>
              </div>
            </li>
            <li className='flex flex-col pt-3 w-full'>
              <div className='flex justify-between hover:text-[#1A1D1F] text-[#33383F] text-base font-semibold border-b-[2px] py-2'>
                <h4>I can’t reset my password</h4>
                <button className=' border px-2 rounded-full'>+</button>
              </div>
            </li>
            <li className='flex flex-col text-[#33383F] pt-3 w-full'>
              <div className='flex justify-between hover:text-[#1A1D1F] text-[#33383F] text-base font-semibold border-b-[2px] py-2'>
                <h4>How to upgrade to Pro account?</h4>
                <button className=' border px-2 rounded-full'>+</button>
              </div>
              <p className='flex flex-wrap pt-3 text-[#6F767E] text-base font-medium'>
                Enjoy instant access to our vast library of 5,121 premium products and all 
                upcoming new releases with super-fast download speeds powered by Amazon S3.
              </p>
            </li>
            <li className='flex flex-col pt-3 w-full'>
              <div className='flex justify-between hover:text-[#1A1D1F] text-[#33383F] text-base font-semibold border-b-[2px] py-2'>
                <h4>How do I change and reset my password</h4>
                <button className=' border px-2 rounded-full'>+</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Faqs