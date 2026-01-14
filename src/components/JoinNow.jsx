import React from 'react'

const JoinNow = () => {
  return (
    <div className=' flex justify-center items-center w-full  h-150'>
      <div className=' h-120 w-330 shadow-[0px_0px_6px_rgba(17,17,26,0.3)] flex overflow-hidden rounded-3xl'>
        <div className='relative h-full w-1/2  flex items-start  justify-center gap-4 flex-col px-8'>
        <h3 className='font-bold text-3xl'>Xbox Game Pass Ultimate</h3>
        <p >Play new titles on day one. Enjoy hundreds of high-quality games with friends on console, PC, or cloud.</p>
        <button className='absolute bottom-7 left-7 rounded-[9px] bg-[#1c6eea] px-4 py-2  text-amber-50'>Join now</button>

        </div>
        <div className='h-full w-1/2 px-2 py-2  '>
        <img className=' rounded-[18px] h-full w-full' src="/src/assets/images/PhotoshopExtension_Image.png" alt="" />

        </div>

      </div>
    </div>
  )
}

export default JoinNow
