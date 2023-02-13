import React, { useState } from 'react'
import Buildings from '../assets/images/building.svg'
import Stamp from '../assets/images/stamp.svg'
import Tick from '../assets/icons/Line.svg'
import Credit from '../assets/icons/credit.svg'
import Wallet from '../assets/icons/wallet.svg'

const HyreTime = () => {
  const [display, setDisplay] = useState(null)

  const toggle = (i) => {
    if (display === i) {
      setDisplay(null)
    }
    else 
      setDisplay(i)
  }

  return (
    <div className='bg-[#441949] md:flex items-start justify-between mx-[.6rem] md:mx-[2rem] my-[1rem] rounded-3xl min-h-screen'>
      <div className='flex flex-col mx-[1rem] p-6 md:ml-[8rem] md:mt-[4rem] md:w-1/2'>
        <h5 className='text-[#FF70B5] mt-8 font-semibold text-xs md:text-base'>
          Interview to offer, in 72 hours flat.
        </h5>
        <h1 className='text-[#FEFFFF] text-xl lg:text-4xl font-bold mt-[.2em]'>
          hyre_Time
        </h1>

        {Datas.map((Data, i) => (
        <div className='mt-6 mr-6 p-[.8rem] flex items-start bg-[#fff] hover:bg-[#C5DEFF] rounded-2xl w-3/5 cursor-pointer'
            onClick={() => toggle(i)}
            key={Data.id}
        >
          <img src={Data.image} alt='right' className='w-6 h-6'></img>
          <div className='flex flex-col flex-wrap px-[1rem]'>
              <h4 className='font-semibold text-base'>{Data.heading}</h4>
              <p className={`text-sm font-normal transition ease-linear delay-150 duration-300 ${display ===i ? 'block':'hidden'} overflow-hidden`}>
                {Data.content}
              </p>
          </div>
        </div>
        ))}
      </div>
      <div className='relative mr-[3rem] mt-[5rem] px-[4rem]'>
        <img src={Stamp} alt='stamp' className='absolute z-10 top-20 right-4' />
        <img src={Buildings} alt='buildings' />
      </div>
    </div>
  )
}

export default HyreTime


const Datas = [
  {
    id: 1,
    image: Tick,
    heading: "Pre_hired",
    content: "Our engineers are pre-hired, all you need to do is choose one. 0or as many as you like."
  },
  {
    id: 2,
    image: Credit,
    heading: "Verified",
    content: "Our engineers are pre-hired, all you need to do is choose one. 0or as many as you like."
  },
  {
    id: 3,
    image: Wallet,
    heading: "Guaranteed replacement",
    content: "Our engineers are pre-hired, all you need to do is choose one. 0or as many as you like."
  }
]
