import React from 'react'

const Header = () => {
  const listStyle =
    "text-[#272B30] font-bold text-[1rem] leading-4 px-[1.5rem] py-[1rem] cursor-pointer";
  const buttonStyle =
    "border-[2px] rounded-[90px] border-[#1A1D1F] px-[16px] py-[12px] font-bold text-[0.93rem] leading-4 text-[#272B30]";
  return (
    <div className='header bg-[#F9F9F9] flex items-center justify-between px-[5rem] pt-[2rem] pb-[2rem]'>
      <img
        src={require('../assets/images/Group.png')}
        alt="logo"
        className='logo w-[12rem] h-[2.875rem]'
      />
      <div className='menu flex'>
        <ul className='flex justify-between'>
          <li className={listStyle}>Home</li>
          <li className={listStyle}>FAQs</li>
          <li className={listStyle}>Contact US</li>
          <li className={listStyle}>Lifestyle</li>
          <button className={buttonStyle}>Sign Up</button>
        </ul>
      </div>
    </div>
  )
}

export default Header