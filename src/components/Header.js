import React from 'react'

const Header = () => {
  const listStyle =
    "text-[#272B30] font-bold text-[1rem] leading-4 px-[1.5rem] cursor-pointer";
  const buttonStyle =
    "border-[2px] rounded-[90px] border-[#1A1D1F] px-[16px] py-[12px] font-bold text-[0.93rem] leading-4 text-[#272B30]";
  return (
    <div className='header bg-[#F9F9F9] flex items-center justify-between px-[2rem] lg:px-[10rem] pt-[.6rem] lg:pt-[1rem] pb-[.6rem] lg:pb-[1rem]'>
      <img
        src={require('../assets/images/Group.png')}
        alt="logo"
        className='logo w-[8rem] lg:w-[12rem] lg:h-[2.875rem]'
      />
      <div className='nav flex'>
        <ul className='nav_list md:flex md:items-center z-[-1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
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