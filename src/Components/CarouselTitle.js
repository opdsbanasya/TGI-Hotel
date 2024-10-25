import React from 'react'
import { useNavigate } from 'react-router-dom'

const CarouselTitle = () => {

  const navigate = useNavigate();

  const navigateContactUs = () => {
    return navigate("/contact-form")
  }

  return (
    <div className='w-full h-screen pl-[8vw] pt-[20vw] absolute inset-0 bg-gradient-to-r from-black text-white space-y-5'>
      <h1 className='text-5xl font-bold font-serif'>TIG Hotel</h1>
      <p className=' w-[40%] font-light tracking-wide'>Hotel TGI Grand Fortuna is a beacon of modernity and luxury in the heart of Hosur, ensuring guests a delightful stay. Its elegant ambience, plush interiors and strategic location near Hosur Railway Station and popular areas like Koramangala and HSR make it the perfect choice for travellers seeking comfortable accommodation. Its position on the outskirts of Bengaluru also offers convenient access to the city for both business and leisure, ensuring a seamless blend of work and relaxation.</p>
      <button
        className='cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'
        onClick={navigateContactUs}
      >Reach out</button>
    </div>
  )
}

export default CarouselTitle
