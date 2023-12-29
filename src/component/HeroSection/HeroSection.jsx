import React from 'react'

import Baby1 from '../../assets/images/baby-1.png'
import Button from '../../shared_component/Button/Button'
import { TypeAnimation } from 'react-type-animation'

function HeroSection() {
  return (
    <div className=' flex flex-col justify-center align-middle mx-auto h-screen'>
        <div className='flex rounded-full bg-gradient-to-b from-[#18ADB3] to-[#595A85] p-14 justify-center align-middle'>
            <img src={Baby1} />
        
        </div>
        <h1 className=' mt-5 md:text-6xl text-4xl uppercase text-white'><b>Rama Iswara</b></h1>
        
        <h1 className=' mt-5 md:text-3xl text-2xl uppercase text-white mt-1 font-bold mb-3'>
            <TypeAnimation
                sequence={[
                    "Web ",
                    1000,
                    "Android ",
                    1000,
                    "Full Stack ",
                    1000,
                ]}
                repeat={Infinity}
                cursor={false}
            />Developer</h1>
        <div className=' flex-row flex gap-4 justify-center mt-3'>
            <Button text={"Hire Me"}/>
            <Button text={"Download CV"}/>
        </div>
    </div>
  )
}

export default HeroSection