import React from 'react'
import Img2 from '../assets/img/coffee2.png'


const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Espresso",
      description:
        "Un espresso intenso y aromático, con una rica crema dorada, perfecto para un rápido impulso de energía",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img2,
      name: "Americano",
      description:
        "El americano suave y diluido, combina la riqueza del espresso con agua caliente para un sabor más ligero",
      aosDelay: "300",
    },
    {
      id: 3,
      img: Img2,
      name: "Cappuccino",
      description:
        "Delicioso cappuccino, una mezcla equilibrada de espresso, leche vaporizada y espuma, ideal para cualquier momento",
      aosDelay: "500",
    },
  ];


const Products = () => {
    return (
    <>
        <div className='pb-20'>
            <div className='flex flex-col items-center' data-aos="fade-up" data-aos-delay="100">
                <h1 className='text-4xl font-cursive font-bold p-8 lg:text-4xl'>Best Coffe For You</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 place-items-center'>
                {ServicesData.map((service)=>(
                    <div className='bg-white rounded-2xl hover:bg-primary hover:text-white shadow-xl duration-200 group cursor-pointer relative max-w-[300px] mt-10 2xl:max-w-[450px]' key={service.id} data-aos="fade-up" data-aos-delay={service.aosDelay}>
                        <div className=' h-[122px]' >
                            <img src={Img2} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-12 duration-300'/>
                        </div>
                        <div className='flex flex-col items-center text-center mt-4 mb-4 px-4'>
                            <h1 className='font-bold text-lg'>{service.name}</h1>
                            <p className='text-[14px] text-gray-500 group-hover:text-white'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            
                
        
        
        
        
    </>
  )
}

export default Products