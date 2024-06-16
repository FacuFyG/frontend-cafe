import React from 'react'
import Logo from '../assets/img/coffee_logo.png'
import { FaCoffee } from "react-icons/fa"



const Navbar = () => {
  return (
   <>


        <div className='flex flex-row justify-between px-6 items-center py-2 bg-gradient-to-r from-secondary to-secondary/90 sm:px-10 sm:text-xl cursor-pointer'>
            <div className='flex flex-row items-center gap-2'  data-aos="fade-down" data-aos-once='true' data-aos-delay="200">
                 <img src={Logo} alt="" className='h-[50px] sm:content-normal'/>
                <p className='text-white font-cursive text-[24px] sm:text-3xl sm:py-4 font-'>Coffe Cafe</p>   
            </div>
            
            <div data-aos="fade-down" data-aos-delay="400">
                <ul className='flex flex-row gap-8 text-white items-center'>
                    <li className='hidden sm:block'><a href="">Home</a></li>
                    <li className='hidden sm:block'><a href="">Services</a></li>
                    <li className='hidden sm:block'><a href="">About</a></li>
                    <button className=" bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3 drop-shadow-md">
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
                </ul>
            </div>
        </div>






   </>
  )
}

export default Navbar