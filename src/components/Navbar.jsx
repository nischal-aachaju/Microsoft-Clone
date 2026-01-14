import React, { useState } from 'react'
import { X } from 'lucide'
import Logo from '/src/assets/images/microsoftLogo.png'
import NavbarBtn from './NavbarBtn'
const Navbar = () => {
    const [hidden, setHidden] = useState("")
    const navbarBtn = ["Microsoft 365", "Teams", "Copilot", "Windows", "Surface", "Xbox", "Deals", "Small Business", "Support"]

    return (
        <div className='  h-14 w-full bg-white flex justify-center'>
            <div className=' h-14 w-[88%] flex justify-between items-center'>
                <div className=' w-3/5 flex gap-10'>
                    <img className='h-6  ' src={Logo} alt="LOGO" />
                    <div className='text-xs tracking-wide flex  gap-5 items-center color-[#262670]'>
                        {navbarBtn.map((e, idx) => {
                            return <NavbarBtn key={idx} e={e} />
                        })}

                    </div>
                </div>
                <div className=' w-2/5 h-14 tracking-wide text-[0.78rem] flex items-center gap-5 justify-end'>
                    <div className=' flex gap-1 cursor-pointer'><h4 className='hover:border-b '>All Microsoft</h4> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></div>
                    <div className=' flex gap-1  cursor-pointer'> <h4 className='hover:border-b '>Search</h4> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg></div>
                    <div className='flex gap-1  cursor-pointer'><h4 className='hover:border-b '>Cart</h4><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg></div>
                    <div className='flex items-center gap-2 cursor-pointer'> <h4>Sign IN</h4><div className='  rounded-full border p-1'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6" /><circle cx="10" cy="8" r="5" /><path d="M19 16v6" /><path d="M22 19h-6" /></svg></div></div>
                </div>

            </div>
            <div className={` ${hidden} bg-[#0072C6]  text-xm tracking-wide absolute h-12 w-full top-14 text-white flex justify-center items-center gap-2`}><h4>Protect your device against accidents for up to 4 years with Microsoft Complete.</h4><button className='border-2 rounded-md px-3 py-1 font-medium'>Learn more  </button> 
            <div onClick={() => 
                {
                    setHidden("hidden")
                }
            } className=' relative left-92 '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg></div></div>

        </div>
    )
}

export default Navbar
