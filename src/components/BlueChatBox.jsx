import React from 'react'
import Blue_box_tag from './Blue_box_tag'
import arrow from "/src/assets/images/arrow_blue_box.png"
const BlueChatBox = () => {
    const tags = [
        "Which PC is right for me?", 
        "Sign in to my account", 
        "How can my business use Azure?"
    ]
    return (
        <div className='h-100 w-full flex justify-center items-end  '>
            <div className='h-70 w-304 flex flex-col gap-7 justify-center items-center rounded-3xl bg-linear-to-r from-[#0A6AB8] via-[#003A67] to-[#235a96] '>
                <h5 className='text-[32px] text-white font-semibold'> Hi there. How can we help?</h5>
                <div className=' relative h-13.5 w-200  rounded border-white border  bg-linear-to-r from-[#0078D4] to-[#6CD0C1]'>
                    <input placeholder=' 𝘈𝘴𝘬 𝘮𝘦 𝘢 𝘲𝘶𝘦𝘴𝘵𝘪𝘰𝘯' className=' h-12 w-full px-4 text rounded-t  focus:outline-none active:border-0 bg-white text-gray-900 ' type="text" />
                    <img className='cursor-pointer absolute h-5 top-4 right-4' src={arrow} alt="" />
                    
                </div>
                <div className='  flex gap-3 justify-center'>
                        {tags.map((e)=>{
                        
                        return  <Blue_box_tag tag={e}/>
                    })}</div>
            </div>

        </div>
    )
}

export default BlueChatBox
