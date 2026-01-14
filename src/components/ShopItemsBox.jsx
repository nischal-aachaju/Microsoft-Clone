import React from 'react'

const ShopItemsBox = ({items}) => {
    return (
        <div className='h-140 w-full flex gap-4  px-26 py-5'>
            {items.map((e, idx) => {

                return (

                    <div className='relative h-full w-1/4  shadow-[0px_0px_6px_rgba(17,17,26,0.3)]  bg-white rounded-3xl overflow-hidden '><img className='p-2 rounded-3xl' src={e.img} alt="" />
                        <div className='px-6 '>
                            <h3 className='font-semibold text-xl py-4 '>{e.title}</h3>
                            <p >{e.desc}</p>
                            <button className='absolute bottom-6 left-6 rounded-[9px] bg-[#1c6eea] px-4 py-2  text-amber-50'>{e.btn}</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ShopItemsBox
