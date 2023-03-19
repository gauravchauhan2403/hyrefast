import React, { useState } from 'react'

const Navbar = () => {

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div>
      <nav className="bg-[#F9F9F9] p-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
        <a href="#nav" className="flex-shrink-0">
          <img
            src={require('../assets/images/Group.png')}
            alt="logo"
            className='logo w-[8rem] lg:w-[12rem] lg:h-[2.875rem]'
          />
        </a>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="home" className="text-[#272B30] hover:text-black font-bold text-[1rem] leading-4 px-[1rem] cursor-pointer">Home</a>
            <a href="d" className="text-[#272B30] hover:text-black font-bold text-[1rem] leading-4 px-[1rem] cursor-pointer">FAQs</a>
            <a href="d" className="text-[#272B30] hover:text-black font-bold text-[1rem] leading-4 px-[1rem] cursor-pointer">Contact US</a>
            <a href="d" className="text-[#272B30] hover:text-black font-bold text-[1rem] leading-4 px-[1rem] cursor-pointer">Lifestyle</a>
            <a href="d" className="text-[#272B30] hover:text-black font-bold text-[1rem] leading-4 px-[1rem] border-[2px] rounded-[90px] border-[#1A1D1F] cursor-pointer"><p className='py-3'>Sign Up</p></a>
          </div>
        </div>

      <div className="-mr-2 flex md:hidden">
        <button type="button" className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
         aria-controls="mobile-menu"
         aria-expanded={isMobileMenuOpen}
         onClick={handleMobileMenuClick}
        >
          <span className="sr-only">Open main menu</span>

            {/* icon when menu is hidden. Menu open: "hidden", Menu closed: "block" */}
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
            {/* Icon when menu is open. */}
            {/* Menu open: "block", Menu closed: "hidden" */}
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div  className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="a" className="hover:text-black block px-3 py-2 rounded-md text-[#272B30] font-bold text-[1rem] leading-4 cursor-pointer">Home</a>
      <a href="a" className="hover:text-black block px-3 py-2 rounded-md text-[#272B30] font-bold text-[1rem] leading-4 cursor-pointer">FAQs</a>
      <a href="a" className="hover:text-black block px-3 py-2 rounded-md text-[#272B30] font-bold text-[1rem] leading-4 cursor-pointer">Contact US</a>
      <a href="a" className="hover:text-black block px-3 py-2 rounded-md text-[#272B30] font-bold text-[1rem] leading-4 cursor-pointer">Lifestyle</a>
      <a href="a" className="hover:text-black block px-3 py-2 rounded-md text-[#272B30] font-bold text-[1rem] leading-4 cursor-pointer">Sign Up</a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar