import React from 'react'

import Baby3 from '../../assets/images/baby-3.png'
import CFA from '../../assets/images/cfa.png'
import SAI from '../../assets/images/sai.png'
import ROKETIN from '../../assets/images/roketin.png'

function Experience() {
  return (
    <div className=' h-screen flex md:flex-row flex-col'>
       <div className='flex flex-col md:w-1/2 justify-center md:order-1 order-1 items-start'>
            <div className='flex rounded-full bg-gradient-to-b from-[#18ADB3] to-[#595A85] to-70% p-14 justify-center mt-5 h-fit w-fit'>
                <img src={Baby3} width={350} height={350}/>
            </div>
        </div>
        <div className='flex flex-col md:w-1/2 md:items-center justify-center md:order-1 order-1 gap-3'>
            <h1 className='mt-5 md:text-6xl text-4xl text-white font-bold text-left mb-3'>Experience</h1>
            <div className='flex flex-row items-center gap-3 mt-2'>
                <div className='rounded-full bg-gradient-to-b from-[#18ADB3] to-70% to-[#595A85] w-12 flex flex-row justify-center h-12'>
                    <img src={CFA} />
                </div>
                <div>
                    <p className='text-white font-bold text-3xl text-left'>Code For Asia</p>
                    <p className='text-white text-xl text-left'>Full Time - Full Stack Developer </p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-3 mt-2'>
                <div className='rounded-full bg-gradient-to-b to-70% from-[#18ADB3] to-[#595A85] w-12 flex flex-row justify-center h-12 items-center'>
                    <img src={SAI} style={{width:24,height:24}} height={24} width={24}/>
                </div>
                <div>
                    <p className='text-white font-bold text-3xl text-left'>Samudera Aplikasi</p>
                    <p className='text-white text-xl text-left'>Full Time - Full Stack Developer </p>
                </div>
            </div>
            
            <div className='flex flex-row items-center gap-3 mt-2'>
                <div className='rounded-full bg-gradient-to-b to-70% from-[#18ADB3] to-[#595A85] w-12 flex flex-row justify-center h-12 items-center'>
                    <img src={ROKETIN} style={{width:24, height:24}}/>
                </div>
                <div>
                    <p className='text-white font-bold text-3xl text-left'>Roketin Indonesia</p>
                    <p className='text-white text-xl text-left'>Full Time - Full Stack Developer </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience