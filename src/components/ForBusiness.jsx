import React from 'react'
import ShopItems from './ShopItems'
import ShopItemsBox from './ShopItemsBox'
import card1 from "/src/assets/images/Content-Card-Surface-Laptop-5G-Platinum-Commercial.avif"
import card2 from "/src/assets/images/Content-Card-Microsoft-365-Copilot-COMMR-0625.avif"
import card3 from  "/src/assets/images/Content-Card-Windows-11-Business.avif"
import card4 from "/src/assets/images/Content-Card-Azure-AI-Bloom.avif"
const ForBusiness = () => {

    const items = [
        {
            img: card1 ,
            title: "Save up to $175.00  on Surface Pro for Business, 13-inch | Intel",
            desc: "Ultra-versatile and built with Intel® Core™ Ultra processors (Series 2) that power AI experiences to amplify your team’s productivity.",
            btn: "Shop now"
        },
        {
            img:card2 ,
            title: "Microsoft 365 Copilot",
            desc: "Ultra-versatile and built with Intel® Core™ Ultra processors (Series 2) that power AI experiences to amplify your team’s productivity.",
            btn: "Learn more",

        },
        {
            img:card3,
            title: "Windows 11 for business",
            desc: "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.",
            btn: "Learn",

        },
        {
            img: card4,
            title: "Join the era of AI",
            desc: "Create, communicate, and code with the latest Microsoft AI solutions.",
            btn: "Shop now",
        }
    ]

  return (
<>
    <div className='h-180 w-full bg-[#DCEEF8]'>
        <h3 className='px-28 pb-0 pt-10 text-3xl font-semibold'>For business</h3>
        <ShopItemsBox  items={items}/>
      
    </div>
    <div className='h-40 w-full  flex justify-center items-center flex-col'> 
        <p className='text-sm font-semibold'>Follow Microsoft</p>
        <div className='h-20 w-60 flex justify-evenly items-center'>
            <img className=' cursor-pointer p-1 bg-white h-8 w-8 rounded-[7px] shadow-[0px_0px_6px_rgba(17,17,26,0.3)] hover:scale-106' src="/src/assets/images/facebook.avif" alt="" />
            <img className=' cursor-pointer p-1 bg-white h-8 w-8 rounded-[7px] shadow-[0px_0px_6px_rgba(17,17,26,0.3)] hover:scale-106' src="/src/assets/images/x_logo.avif" alt="" />
            <img className=' cursor-pointer p-1 bg-white h-8 w-8 rounded-[7px] shadow-[0px_0px_6px_rgba(17,17,26,0.3)] hover:scale-106' src="/src/assets/images/linked_in.png" alt="" />

        </div>

    </div>
    </>
  )
}

export default ForBusiness
