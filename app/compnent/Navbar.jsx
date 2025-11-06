import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pb-12 sm:pb-6 bg-[#222831] text-[#eeeeee]'>
        <div className='lg:text-xl hover:text-[#00adb5] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'>Sabiha Jahan Prity</div>
        <div className='flex gap-12 lg:text-xl '>
            <div className='hover:text-[#00adb5] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'>Home</div>
            <div className='hover:text-[#00adb5] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'>About me</div>
            <div className='hover:text-[#00adb5] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'>Contact</div>
        </div>
    </div>
  )
}

export default Navbar