import { useState } from 'react'
import './App.css'
import HeroSection from './component/HeroSection/HeroSection'
import AboutMe from './component/AboutMe/AboutMe'
import Experience from './component/Experience/Experience'
import SkillSet from './component/SkillSet/SkillSet'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'
import Modal from './shared_component/Modal/Modal'

function App() {
  return (
    <div className='flex flex-col'>
      <HeroSection/>
      <AboutMe/>
      <Experience/>
      <SkillSet/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
