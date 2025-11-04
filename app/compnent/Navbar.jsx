import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pb-12 bg-[#222831] text-[#eeeeee] border-b-[#47505e] .poppins-thin'>
        <div>Sabiha Jahan Prity</div>
        <div className='flex gap-12'>
            <div>Home</div>
            <div>About me</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Navbar