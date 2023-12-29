import React from 'react'

function Button({text}) {
  return (
    <div className='rounded bg-[#AE2A91] p-2 w-40'>
        <p className=' text-white  text-1xl'>{text}</p>
    </div>
  )
}

export default Button