import { useState } from 'react'
import './App.css'
import HeroSection from './component/HeroSection/HeroSection'
import AboutMe from './component/AboutMe/AboutMe'
import Experience from './component/Experience/Experience'

function App() {

  return (
    <div className='flex flex-col'>
      <HeroSection/>
      <AboutMe/>
      <Experience/>
    </div>
  )
}

export default App
