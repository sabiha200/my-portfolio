import React from 'react'
import frame1 from '../Image/Frame1.png'
import frame2 from '../Image/Frame2.png'
import frame3 from '../Image/Frame3.png'
import Image from 'next/image'

const Recentwork = () => {
  return (
    <div >
       <div className='pl-44 pt-72'>
         <div className='flex'>
            <h1 className=" font-semibold text-6xl pb-6 text-[#eeeeee] w-auto text-4xl">My recent
          <span className="font-bold text-[#00adb5]"> works</span>
          </h1>
        </div>
        <div>
            <div className='bg-[#00adb5] w-10 text-[#eeeeee] text-center '> All</div>
        </div>
       </div>
        <div className='flex pl-44 gap-12'>
            <div><Image alt='frame' src={frame1} width={368} height={280}/></div>
            <div><Image alt='frame' src={frame2} width={368} height={280}/> </div>
            <div><Image alt='frame' src={frame3} width={368} height={280}/></div>
    </div>
    </div>
    
  )
}

export default Recentwork