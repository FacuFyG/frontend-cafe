import React from 'react'
import ImgBanner from '../assets/img/coffee-white.png'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const Banner = () => {
  return (
    <>
    
    <div className='border bg-gray-50 grid grid-cols-1 sm:grid-cols-2 place-items-center lg:pr-20 pb-14' >
            <div className='' data-aos="zoom-in" data-aos-delay="200">
                <img src={ImgBanner} alt="" className='spin'/>
            </div>
            <div className='mx-6'>
                <h1 className='font-cursive text-3xl font-bold pb-6'  data-aos="fade-up" data-aos-delay="100">Premium Blen Coffee</h1>
                <p className='text-gray-500 text-sm pb-6'  data-aos="fade-up" data-aos-delay="100">Un café premium, con granos selectos y tostado perfecto, ofrece un sabor exquisito y una experiencia de degustación inigualable.</p>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-row items-center'  data-aos="fade-up" data-aos-delay="200">
                            <GrSecure className='text-xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 mr-4'></GrSecure>
                            <span>Premium Coffee</span>
                        </div >
                        <div className='flex flex-row items-center' data-aos="fade-up" data-aos-delay="400">
                            <IoFastFood className='text-xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 mr-4 ' ></IoFastFood>
                            <span>Hot Coffee</span>
                        </div>
                        <div className='flex flex-row items-center' data-aos="fade-up" data-aos-delay="600">
                            <GiFoodTruck className='text-xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100 mr-4'></GiFoodTruck>
                            <span>Cold Coffee</span>
                        </div>
                    </div>
                    <div className='border-l-4 border-primary/40 pl-6'  data-aos="fade-left" data-aos-delay="100">
                        <h2 className='text-2xl font-bold font-cursive pb-4'>Tea Lover</h2>
                        <p className='text-gray-500 text-sm'>Much like writing code, brewing the perfect cup of tea requires patience, precision, and a dash of passion to create a comforting blend of flavors.</p>
                    </div>
                </div>
            </div>

            
            
        </div>
   
        




    </>
  )
}

export default Banner