import React from 'react'
import HeroImg from '../assets/img/coffee2.png'

const Hero = () => {
  return (
      <>
        <div className='bg-brandDark min-h-[600px] grid grid-cols-1 sm:grid-cols-2'>
         <div className='py-10 sm:py-40 px-10 order-2 sm:order-1 xl:px-20' data-aos="fade-up" data-aos-delay="300">
          <h1 className='text-4xl font-bold text-white sm:text-7xl pb-6 '>
            We serve the tastiest <span className='font-cursive text-primary'>Coffee</span> in the city
          </h1>
          <button className='py-2 px-4 text-white bg-gradient-to-r from-primary to-secondary/90 border border-primary rounded-full sm:font-semibold'>
            Coffee and Code
          </button>
    </div> 

    <div className='flex items-center justify-center pt-10 sm:pl-20 order-1 sm:order-2 sm:mr-20' data-aos="zoom-in" data-aos-delay="400">
      
        <img src={HeroImg} alt="" className='sm:min-h-[450px] h-[300px] spin ' />
      
    </div>
  </div>                       
</>
)
}

export default Hero