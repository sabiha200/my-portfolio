import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pb-12 sm:pb-6 bg-[#222831] text-[#eeeeee]'>
        <div className=''>Sabiha Jahan Prity</div>
        <div className='flex gap-12'>
            <div>Home</div>
            <div>About me</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Navbar