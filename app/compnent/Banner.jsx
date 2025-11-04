import React from 'react'
import person from '../Image/image1.png'
import doodles from '../Image/doodles.png'
import Image from 'next/image'

const Banner = () => {
  return (
   <section>
    <div className='bg-[#222831] flex justify-center py-44'>
         <div className='pt-8 items-center font-semibold text-7xl text-[#eeeeee] w-xl'>CREATIVE WEB <span className='font-bold text-[#00adb5]'>DESIGNER</span></div>
         <div> <Image src={doodles} height={400} width={400} alt={doodles} /> <Image alt='person' src={person} height={400} width={400} className='absolute top-96 right-96'/></div>
       </div>
   </section>
  )
}

export default Banner