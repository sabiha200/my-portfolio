import React from 'react'
import Banner from './compnent/Banner'
import Aboutme from './compnent/Aboutme'
import Recentwork from './compnent/Recentwork'
import Contact from './compnent/Contact'

const page = () => {
  return (
    <div>
      <Banner/>
      <Aboutme/>
      <Recentwork/>
      <Contact/>
    </div>
  )
}

export default page