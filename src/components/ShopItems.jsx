import React from 'react'
import ShopItemsBox from './ShopItemsBox'
import card1 from  "/src/assets/images/Content-Card-Surface-Laptop-5G-Platinum-Commercial.avif" 
import card2 from "/src/assets/images/Content-Card-Surface-Pro-11-13-inch-Render-Dune-Angled-Copilot-PC.avif"
import card3 from "/src/assets/images/gldn-XSX-CP-Xbox-Series-X.avif"
import card4 from  "/src/assets/images/Xbox-Controller-Valentine-CP.avif"
const ShopItems = () => {
    const items = [
        {
            img: card1,
            title: "Up to $168 off select Surface Laptop for Business",
            desc: "13.8 and 15-inch devices feature Windows 11 Pro, uncompromising power, all-day battery life, and Intel® Core™ Ultra processors (Series 2).",
            btn: "Shop now"
        },
        {
            img: card2,
            title: "Save up to $600 on select Surface Pro, 13-inch",
            desc: "Industry-leading AI, unmatched flexibility. Do more with the most powerful 2-in-1 out there.",
            btn: "Shop now",

        },
        {
            img: card3 ,
            title: "Xbox Series X",
            desc: "The fastest, most powerful Xbox ever.",
            btn: "Shop Xbox Series X",

        },
        {
            img: card4,
            title: "Xbox controllers",
            desc: "Elite, wireless, adaptive—find the controller that fits your style of play.",
            btn: "Shop now",
        }
    ]
    return (
        <ShopItemsBox items={items}/>
    )
}

export default ShopItems
