import React from 'react'

import Baby2 from '../../assets/images/baby-2.png'
import { Constan } from '../../Utils/Constans'

function AboutMe() {
  return (
    <div className=' h-screen flex md:flex-row flex-col align-middle justify-center'>
        <div className='flex flex-col md:w-1/2 align-middle justify-center md:order-1 order-2'>
            <h1 className='mt-5 md:text-6xl text-4xl text-white font-bold text-left mb-3'>Who Am I ?</h1>
            <p className=' text-white text-sm text-left'>{Constan.LOREM}</p>
        </div>
        <div className='flex flex-col md:w-1/2 justify-center items-end md:order-2 order-1'>
            <div className='flex rounded-full bg-gradient-to-b from-[#18ADB3] to-[#595A85] p-14 justify-center align-middle mt-5 h-fit w-fit'>
                <img src={Baby2} />
            </div>
        </div>
    </div>
  )
}

export default AboutMe