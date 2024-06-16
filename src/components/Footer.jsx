import React from 'react'
import FooterBg from '../assets/img/coffee-footer.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';



const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
  };


const Footer = () => {
  return (
    <>

    <div style={bgImage} className='grid grid-cols-1 sm:grid-cols-3 text-white py-20 px-8 gap-10'>
        <div data-aos="fade-up" data-aos-delay="200">
            <h1 className='text-4xl font-cursive font-bold mb-6'>Coffee Cafe</h1>
            <p className='text-sm mb-6'>Crafted Coffee, Cozy Vibes, Unforgettable Moments <br/>Your Perfect Espresso Escape</p>
            <button className='bg-brandDark/80 px-8 py-1 rounded-full hover:scale-105 duration-200 text-sm'><a href="#" className=''>Join Us Now</a></button>
        </div>
        <div className='grid grid-cols-2'data-aos="fade-up" data-aos-delay="400">
            <div className=''>
                <h1 className='text-xl font-bold mb-4 '>Footer links</h1>
                <ul className='space-y-3 text-sm '>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Blog</li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-bold mb-4'>Quick links</h1>
                <ul className='space-y-3 text-sm'>
                <li className='cursor-pointer'>Our Cafe</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Our Place</li>
                </ul>
            </div>
        </div>
        <div className='space-y-4' data-aos="fade-up" data-aos-delay="600">
            <h2 className='text-xl font-bold mb-4'>Address</h2>
            <p className='text-sm'>Noida, India</p>
            <p className='text-sm'>+91 1234567890</p>
            <div className='flex flex-row gap-4'>
                <a href="#">
                    <FaInstagram className='text-3xl hover:text-primary  hover:scale-110 duration-300'/>
                </a>
                <a href="#">
                    <FaYoutube className='text-3xl hover:text-primary hover:scale-110 duration-300'/>
                </a>
                <a href="#">
                    <FaFacebook className='text-3xl hover:text-primary hover:scale-110 duration-300'/>
                </a>
            </div>
        </div>
    </div>




    </>
  )
}

export default Footer

