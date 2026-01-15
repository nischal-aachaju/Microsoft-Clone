import React from 'react'

const Blue_box_tag = ({tag}) => {
  return (
    <div className='cursor-pointer w-fit bg-[#0A6AB8] border-white border px-4 py-1.5 text-sm tracking-wide rounded-full text-white flex'>
      <p>{tag}</p>
    </div>
  )
}

export default Blue_box_tag
