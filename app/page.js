import React from 'react'
import Banner from './compnent/Banner'
import Aboutme from './compnent/Aboutme'
import Recentwork from './compnent/Recentwork'
import Contact from './compnent/Contact'
import Skills from './compnent/Skills'

const page = () => {
  return (
    <div>
      <Banner/>
      <Aboutme/>
      <Skills/>
      <Recentwork/>
      <Contact/>
    </div>
  )
}

export default page