import React from 'react'

function Button({text, onClick, type}) {
  return (
    <>
      {type === "primary" && (
         <div 
          className='rounded bg-[#AE2A91] p-2 w-40 cursor-pointer' 
          onClick={onClick}>
            <p className=' text-white  text-1xl'>{text}</p>
        </div>
      )}
      {type === "secondary" && (
         <div 
          className='rounded bg-[#595A85] p-2 w-40 cursor-pointer' 
          onClick={onClick}>
            <p className=' text-white  text-1xl'>{text}</p>
        </div>
      )}
    </>
   
  )
}

export default Button