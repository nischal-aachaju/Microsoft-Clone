import React from 'react'
import Table from "/src/assets/images/Quick-Links-Store-Tablet.svg"
import Xbox from "/src/assets/images/Quick-Links-Store-Xbox-Controller.svg"
import Accessories from "/src/assets/images/Quick-Links-Store-Accessories.svg"
import Building from "/src/assets/images/Quick-Links-MSCOM-Building.svg"
import Laptop from "/src/assets/images/Quick-Links-Store-Laptop.svg"
import Apps from "/src/assets/images/Quick-Links-MSCOM-Apps.svg"
const ShopGames = () => {
    const img = [
        {
            img: Table,
            name: "Shop Surface devices"
        },
        {
            img:Xbox,
            name: "Shop Xbox games and consoles"
        },
        ,
        {
            img: Accessories,
            name: "Shop for accessories"

        },
        {
            img: Building,
            name: "Shop for your Business"

        },
        {
            img: Laptop ,
            name: "Find your next PC"
        },
        {
            img: Apps,
            name: "Choos your Microsoft 365"

        },
    ]
    return (
        <div className=' w-full h-50 flex justify-evenly items-center p-20'>
            {img.map((e, idx) => {
                return <div key={idx} className=' flex flex-col shrink-0 flex-wrap items-center cursor-pointer hover:bg-blue-100 transition p-2 ' >
                    <img className='w-10' src={e.img} alt="" />
                    <h4 className=' text-blue-900 font-semibold border-b-2 border-blue-900'>{e.name}</h4>
                </div>

            })}
        </div>
    )
}

export default ShopGames
