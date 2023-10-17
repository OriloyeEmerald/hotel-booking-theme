"use client" 

import { CaretRight, CirclesFour, EnvelopeSimple, GearSix, Heart, House, NotePencil } from 'phosphor-react';
import React from 'react'
import hotel6 from '../assets/images/hotel6.jpeg'
import Image from 'next/image'
const Sidebar = () => {
  return (
    <div className='bg-white sidebar mx-auto'>
       <h2 className='pt-[.8rem] text-[1.2rem]'>Mima<span className='text-gray-700'>Booking</span></h2>

       <div className='mt-[2rem]'>
        
        <Image src={hotel6} alt="profile-photo"
         className='mx-auto block rounded-full w-[80px] h-[80px] border-[.2rem] border-gray-300 relative object-cover'/>
        <button className='border border-gray-300 rounded-full px-[.3rem] py-[.18rem] absolute top-[7.3rem] bg-gray-300 left-[6.7rem]'>
            <NotePencil />
        </button>
        
        <p className='mt-6 text-center'>ilia John</p>
       </div>
      <div className='mt-[6rem]'>
            <div className='flex gap-2 items-center py-[.6rem] text-gray-900 '>
               <House /> 
                <p className='text-left'>Dashboard</p>
            </div>
            <div className='flex gap-2 items-center py-[.6rem] '>
                <CirclesFour />
                <p className='text-left'>Explore City</p>
            </div>
            <div className='flex gap-2 items-center py-[.6rem]'>
                <EnvelopeSimple />
                <p>Ticket</p>
            </div>
            <div className='flex gap-2 py-[.4rem]'>
                <Heart />
                <p>Favorites</p>
            </div>
            <div className='flex gap-2 items-center py-[.6rem]'>
                <GearSix />
                <p>Setting</p>
            </div>
        </div>

        <div className='mt-[25rem] flex justify-center gap-2 items-center'>
            <button className='border border-gray-500 rounded-[.7rem] px-[.3rem] py-[.18rem]'>
                <CaretRight />
            </button>
            <p>Logout</p>
        </div>
    </div>
  )
}

export default Sidebar;