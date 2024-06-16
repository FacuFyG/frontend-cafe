import React from 'react'
import BgBeans from '../assets/img/coffee-beans-bg.png'
import Appstore from '../assets/img/app_store.png'
import Playstore from '../assets/img/play_store.png'


const backgroundStyle = {
    backgroundImage: `url(${BgBeans})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };


const AppStore = () => {
  return (
    <>
        
    <div className='py-14 flex flex-col items-center' style={backgroundStyle}>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:place-items-center' data-aos="fade-up" data-aos-delay="200">
            <div className='flex flex-col gap-6 items-center sm:items-start sm:pl-14'>
                <h1 className='text-2xl sm:text-4xl text-white font-bold text-center sm:text-left'> Coffee Cafe is available for Android and IOS</h1>
                <div className='flex flex-row items-center'>
                <div>
                    <a href="#">
                        <img src={Appstore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <img src={Playstore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default AppStore