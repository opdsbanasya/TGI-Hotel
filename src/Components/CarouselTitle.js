import React from 'react'

const CarouselTitle = () => {
  return (
    <div className='w-full h-screen pl-[8vw] pt-[20vw] absolute inset-0 bg-gradient-to-r from-black text-white space-y-5'>
      <h1 className='text-5xl font-bold'>TIG Hotel</h1>
      <p className=' w-[40%] font-light tracking-wide'>Our Company is a leading real estate company that specializes in providing high-end properties that redefine luxury and offer a sanctuary for a refined lifestyle. Our team of experts is committed to excellence, ensuring that each client receives personalized attention and exceptional service. We strive to exceed expectations and create exceptional living experiences.</p>
      <button className='cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'>Book</button>
    </div>
  )
}

export default CarouselTitle
