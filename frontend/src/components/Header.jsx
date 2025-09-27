import React from 'react'
import {assets} from '../assets/assets.js'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-800 rounded-lg px-6 md:px-10 lg:px-20'>

    {/* Left Side */}
    <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointment
            <br /> with Trusted Doctors
        </p>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 px-4 py-3'>
            <img src={assets.group_profiles} alt="" />
            <p className='font-semibold text-gray-300'>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/>schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white text-black px-4 py-3 rounded-full font-semibold text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer'>Book appointment <img className='w-3' src={assets.arrow_icon} alt="arrow" /> </a>
    </div>

    {/* Right Side */}
    <div className='md:w-1/2 flex relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
    </div>
    </div>
  )
}

export default Header