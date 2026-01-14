import React from 'react'
import { Copyright} from "lucide-react"
import earth from "/src/assets/images/earth.png"
const Footer = () => {
    return (
        <div className='h-100 w-full bg-[#eeeeee] '>
            <div className='h-84 w-[94%] pl-20  flex  gap-6'>
                <div className='h-full w-1/6  text-gray-600 '>
                    <h4 className=' pt-8 pb-3 font-semibold'>What's new</h4>
                    <ul className=' h-60 w-full flex flex-col justify-between text-[12px]'>
                        <li className=' w-fit hover:border-b '>Surface Pro</li>
                        <li className=' w-fit hover:border-b '>Surface Laptop</li>
                        <li className=' w-fit hover:border-b '>Surface Laptop Studio 2</li>
                        <li className=' w-fit hover:border-b '>Copilot for organizations</li>
                        <li className=' w-fit hover:border-b '>Copilot for personal use</li>
                        <li className=' w-fit hover:border-b '>AI in Windows</li>
                        <li className=' w-fit hover:border-b '>Explore Microsoft products</li>
                        <li className=' w-fit hover:border-b '>Windows 11 apps</li>

                    </ul>
                </div>
                <div className='h-full w-1/6  text-gray-600 '>
                    <h4 className=' pt-8 pb-3 font-semibold'>Microsoft Store</h4>
                    <ul className=' h-60 w-full flex flex-col justify-between text-[12px]'>
                        <li className=' w-fit hover:border-b '>Account profile</li>
                        <li className=' w-fit hover:border-b '>Download Center</li>
                        <li className=' w-fit hover:border-b '>Microsoft Store Support</li>
                        <li className=' w-fit hover:border-b '>Returns</li>
                        <li className=' w-fit hover:border-b '>Order tracking</li>
                        <li className=' w-fit hover:border-b '>Certified Refurbished</li>
                        <li className=' w-fit hover:border-b '>Microsoft Store Promise</li>
                        <li className=' w-fit hover:border-b '>Flexible Payments</li>

                    </ul>
                </div>
                <div className='h-full w-1/6  text-gray-600 '>
                    <h4 className=' pt-8 pb-3 font-semibold'>Education</h4>
                    <ul className=' h-60 w-full flex flex-col justify-between text-[12px]'>
                        <li className=' w-fit hover:border-b '>Microsoft in education</li>
                        <li className=' w-fit hover:border-b '>Devices for education</li>
                        <li className=' w-fit hover:border-b '>Microsoft Teams for Education</li>
                        <li className=' w-fit hover:border-b '>Microsoft 365 Education</li>
                        <li className=' w-fit hover:border-b '>How to buy for your scghool</li>
                        <li className=' w-fit hover:border-b '>Educator training and development</li>
                        <li className=' w-fit hover:border-b '>Deals for students and parents</li>
                        <li className=' w-fit hover:border-b '>AI for education</li>

                    </ul>
                </div>
                <div className='h-full w-1/6  text-gray-600 '>
                    <h4 className=' pt-8 pb-3 font-semibold'>Business</h4>
                    <ul className=' h-60 w-full flex flex-col justify-between text-[12px]'>
                        <li className=' w-fit hover:border-b '>Microsoft Security</li>
                        <li className=' w-fit hover:border-b '>Dynamics 365</li>
                        <li className=' w-fit hover:border-b '>Microsoft 3655</li>
                        <li className=' w-fit hover:border-b '>Microsoft Power Platform</li>
                        <li className=' w-fit hover:border-b '>Microsoft Teams</li>
                        <li className=' w-fit hover:border-b '>Microsoft 365 Copilot</li>
                        <li className=' w-fit hover:border-b '>Small Business</li>

                    </ul>
                </div>
                <div className='h-full w-1/6  text-gray-600 '>
                    <h4 className=' pt-8 pb-3 font-semibold'>Developer & IT</h4>
                    <ul className=' h-60 w-full flex flex-col justify-between text-[12px]'>
                        <li className=' w-fit hover:border-b '>Azure</li>
                        <li className=' w-fit hover:border-b '>Microsoft Developer</li>
                        <li className=' w-fit hover:border-b '>Microsoft Learn</li>
                        <li className=' w-fit hover:border-b '>Support for AI marketplace apps</li>
                        <li className=' w-fit hover:border-b '>Microsoft Tech Community</li>
                        <li className=' w-fit hover:border-b '>Certified Marketplace</li>
                        <li className=' w-fit hover:border-b '>Microsoft Rewards</li>
                        <li className=' w-fit hover:border-b '>Visual studio</li>

                    </ul>
                </div>
                <div className='h-full w-1/6  text-gray-600 '>
                    <h4 className=' pt-8 pb-3 font-semibold'>Company</h4>
                    <ul className=' h-60 w-full flex flex-col justify-between text-[12px]'>
                        <li className=' w-fit hover:border-b '>Careers</li>
                        <li className=' w-fit hover:border-b '>About Microsoft</li>
                        <li className=' w-fit hover:border-b '>Company news</li>
                        <li className=' w-fit hover:border-b '>Privacy at Microsoft</li>
                        <li className=' w-fit hover:border-b '>Investors</li>
                        <li className=' w-fit hover:border-b '>Diversity and inclusion</li>
                        <li className=' w-fit hover:border-b '>Accessibility</li>
                        <li className=' w-fit hover:border-b '>Sustainability</li>

                    </ul>
                </div>
            </div>
            <div className='h-12 flex text-gray-600 text-[11px]'>
                <div className='h-full w-2/5  flex  justify-evenly mt-3 '>
                    <div className=' flex  gap-2 '>
                        <img className='h-5' src= {earth} alt="" />
                        <h6 className='h-fit hover:border-b '>English(United state)</h6>
                    </div>
                    <div className=' flex gap-2'>

                        <h6 className='h-fit hover:border-b '>Your Privacy Choices</h6>
                    </div>
                    <div>
                        <h6 className='h-fit hover:border-b '>Consumer Health Privacy</h6>
                    </div>
                </div>

                <div className='h-full w-3/5'>
                <ul className='flex  justify-evenly mt-3'>
                    <li className='h-fit hover:border-b '>Sitemap</li>
                    <li className='h-fit hover:border-b '>Contact Microsoft</li>
                    <li className='h-fit hover:border-b '>Privacy</li>
                    <li className='h-fit hover:border-b '>Terms of use</li>
                    <li className='h-fit hover:border-b '>Trademarks</li>
                    <li className='h-fit hover:border-b '>Safety & eco</li>
                    <li className='h-fit hover:border-b '>Recycling</li>
                    <li className='h-fit hover:border-b '> About our ads</li>
                    <li className='h-fit flex items-center gap-1  hover:border-b'> <Copyright size={10}/>Microsoft 2026</li> 
                </ul>
                
                </div>
            </div>

        </div>
    )
}

export default Footer
