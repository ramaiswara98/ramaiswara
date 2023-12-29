import React from 'react'

import Baby4 from '../../assets/images/baby-4.png'
import EMAIL from '../../assets/icons/email.png';
import GITHUB from '../../assets/icons/github.png';
import LINKEDIN from '../../assets/icons/linkedin.png';
import INSTAGRAM from '../../assets/icons/instagram.png';

function Contact() {
  return (
    <div className=' h-screen flex md:flex-row flex-col justify-between items-center'>
        <div className='flex flex-col md:order-1 order-2'>
            <h1 className='text-white text-6xl font-bold'>Contact</h1>
            <div 
                className='flex flex-row gap-8 items-center bg-[#595A85] px-6 py-2 mt-4 mb-4 cursor-pointer'
                onClick={()=>{window.location.href = "mailto:ramaiswara098@gmail.com"}}
            >
                <img src={EMAIL} width={45}/>
                <p className='text-white text-3xl'>Email</p>
            </div>
            <div className='flex flex-row gap-8 items-center bg-[#595A85] px-6 py-2 mt-4 mb-4 cursor-pointer'
                onClick={()=>{window.location.href = "https://github.com/ramaiswara98"}}
            >
                <img src={GITHUB} width={45}/>
                <p className='text-white text-3xl'>Github</p>
            </div>
            <div className='flex flex-row gap-8 items-center bg-[#595A85] px-6 py-2 mt-4 mb-4 cursor-pointer'
                onClick={()=>{window.location.href = "https://www.linkedin.com/in/ramaiswara/"}}>
                <img src={LINKEDIN} width={45}/>
                <p className='text-white text-3xl'>LinkedIn</p>
            </div>
            <div className='flex flex-row gap-8 items-center bg-[#595A85] px-6 py-2 mt-4 mb-4 cursor-pointer'
                onClick={()=>{window.location.href = "https://www.instagram.com/rama_iswara7/"}}
            >
                <img src={INSTAGRAM} width={45}/>
                <p className='text-white text-3xl'>Instagram</p>
            </div>
        </div>
        <div className=' p-5 rounded-full bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] w-96 h-96 md:order-2 order-1'>
            <img src={Baby4}/>
        </div>
    </div>
  )
}

export default Contact