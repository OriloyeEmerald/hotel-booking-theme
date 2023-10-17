"use client"

import { Bell, MagnifyingGlass } from 'phosphor-react';
import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between items-center px-[2rem] bg-gray-100 header'>
    
      <div className='flex gap-8 items-center '>
        <div className='flex gap-2 items-center border rounded-[.5rem] py-[.5rem] px-[.6rem]'>
            <p>
                <MagnifyingGlass className='text-gray-500'/>
            </p>
           <div> <input type="text" placeholder='Search any things ...' className='bg-transparent outline-0' /></div>
        </div>
       </div>

        <div className='flex gap-3'>
            <h3>Saturday, may 3, 2023</h3>
            <div>
              <button className='border border-gray-200 rounded-[.7rem] px-[.3rem] py-[.18rem] relative'>
                <Bell />
             </button>
             <div className='bg-red-500 rounded-full w-3 h-3 absolute top-[.4rem] text-center text-[.4rem] text-white'>
                3
             </div>
            </div>
        </div>
      
    </div>
  );
}

export default Header;
