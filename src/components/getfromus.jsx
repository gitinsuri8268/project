import React from 'react'
import Image from 'next/image'
import { RiPriceTag2Fill,RiVerifiedBadgeFill,RiCoupon4Fill  } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";


const Getfromus = () => {
  return (
    <>
    <div className='bg-slate-20 '>
        <div className='max-w-[1100px] gap-4 mx-auto py-[10px]   md:py-[30px] grid grid grid-cols-1 md:grid-cols-2  text-center '>
            <div className='grid items-center '><Image src="/texti.png" width={600} height={600} />
            </div>
            <div className=' py-[50px] '>
                <h1 className='text-5xl font-bold font-serif lowercase'>What You Get From Us</h1>
            <div className=' flex gap-1 md:gap-4  pt-[50px] py-[30px] p-[12px] md:p-7' >
            <RiPriceTag2Fill size={50} color="yellow" /> 
            {/* style={{ width: '50px', height: '50px' }} */}
            <span className='grid items-center font-light'>Exclusive pricing for gitinsuri members</span>
            </div>
            <div className='flex gap-1 md:gap-4  py-[30px] p-[12px]  md:p-7'>
           <RiVerifiedBadgeFill size={50} color='green'/>
            <span className='grid items-center font-light'>Verified Spaces and Trusted Partners</span>
            </div>
            <div className='flex gap-1 md:gap-4  py-[30px] p-[12px] md:p-7'>
            <TbBrandBooking size={50} color='orange'/>
            <span className='grid items-center font-light'>No booking service fee</span>
            </div>
            <div className='flex gap-1 md:gap-4  py-[30px] p-[12px] md:p-7'>
            <FcCustomerSupport size={50} />
            <span className='grid items-center font-light'>100% offline support</span>
            </div>
            <div className='flex gap-1 md:gap-4  py-[30px] p-[12px] md:p-7 '>
            <RiCoupon4Fill size={50} color='orange'/>
            <span className='grid items-center font-light'>Exclusive Brand Coupon Codes            </span>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Getfromus
