"use client"

import Image from 'next/image';
import { Calendar, CaretDown, CaretLeft, CaretRight, Heart, MapPin, Star, User } from 'phosphor-react';
import React from 'react';
import hotel2 from '../assets/images/hotel2.jpeg'
import hotel3 from '../assets/images/hotel3.jpeg'
import hotel4 from '../assets/images/hotel4.webp'
import hotel5 from '../assets/images/hotel5.jpeg'
import hotel7 from '../assets/images/hotel7.jpeg'
import hotel8 from '../assets/images/hotel8.jpeg'
import hotel9 from '../assets/images/hotel9.jpeg'
import hotel10 from '../assets/images/hotel10.jpeg'
import hotel11 from '../assets/images/hotel11.jpeg'
import hotel12 from '../assets/images/hotel12.jpeg'
import hotel13 from '../assets/images/hotel13.jpeg'
import hotel14 from '../assets/images/hotel14.jpeg'


const FirstLayer = () => {
  return (
    <div className='bg-gray-100 px-[2rem]  home'>
        
    {/******** main image **********/}
     <div className='mt-4 '>
        <Image 
        src={hotel2} 
        alt=''
        className='rounded-[.8rem] h-[200px] object-cover relative'
        />
     </div>
   {/******** main image **********/}

   {/******** overlapped image **********/}
     <div className='bg-white flex gap-2 py-[.7rem] rounded-[1rem] w-[1200px] absolute top-[13rem] right-[8rem]'>
       
       <div className='w-1/3 flex items-center justify-around'>
         <div className='flex items-center gap-2 text-gray-400'>
          <MapPin />
          <p>Where Are You Going?</p>
         </div>
        <CaretDown />

        <div class="border-l border-gray-300 h-8"></div>

       </div>
       <div className='w-1/3 flex items-center justify-around'>
         <div className='flex items-center gap-2 text-gray-400'>
          <Calendar />
          <p>Check-in Date</p>
         </div>
        <CaretDown />

        <div class="border-l border-gray-300 h-8"></div>

       </div>
       <div className='w-1/3 flex items-center gap-[2rem]'>
         <div className='flex items-center gap-2'>
          <User />
          <p>3 adults</p>
         </div>
        <CaretDown />
        <button className='bg-gray-700 text-white py-[.7rem] px-[.7rem] border rounded-[.8rem]'>Search</button>
       </div>
     </div>

     {/******** overlapped image **********/}

 {/******** trending dest. image cards **********/}
     <div className='flex mt-[4rem] justify-between'>
        <h2 className='text-[1.1rem]'>Trending destinations</h2>

        <div className='flex gap-2'>
            <button className='border border-gray-500 rounded-[.7rem] px-[.3rem] py-[.18rem]'>
                <CaretLeft />
            </button>
            <button className='border text-white bg-gray-700 rounded-[.7rem] px-[.3rem] py-[.18rem]'>
             <CaretRight />
            </button>
        </div>
     </div>
     {/******** trending dest. image cards **********/}

     {/******** hotel rooms image cards **********/}

    <div className='mt-6 flex gap-[2rem]'>
    <div className='flex gap-2 bg-white rounded-[1rem] p-4 w-1/3 shadow-lg'>
  <div>
    <Image 
      src={hotel4} 
      alt=''
      className='rounded-[1rem] h-36 w-48 object-cover'
    />
  </div>

  <div className='flex flex-col'>
    <div className='flex items-center gap-[2rem]'>
      <p className='text-[.9rem] font-semibold'>Montmartre, France</p>
      <div className='flex items-center gap-1'>
        <span className='text-yellow-500'>
            <Star />
        </span>
        <span className='text-sm font-semibold'>4/5</span>
      </div>
    </div>
    
    <p>Visiting the best tourist areas chosen by the audience</p>
    <p className='text-green-600 font-semibold mt-1'>$450,000.00</p>
  </div>
</div>

<div className='flex gap-2 bg-white rounded-[1rem] p-4 w-1/3 shadow-lg'>
  <div>
    <Image 
      src={hotel3} 
      alt=''
      className='rounded-[1rem] h-36 w-48 object-cover'
    />
  </div>

  <div className='flex flex-col'>
    <div className='flex items-center gap-[2rem]'>
      <p className='text-[.9rem] font-semibold'>Instabul, Turkey</p>
      <div className='flex items-center gap-1'>
        <span className='text-yellow-500'>
            <Star />
            </span>
        <span className='text-sm font-semibold'>4/5</span>
      </div>
    </div>
    
    <p className=''>One of our best-selling tours to Turkey and visiting it's regions</p>
    <p className='text-green-600 font-semibold mt-2'>$600,000.00</p>
  </div>
</div>

<div className='flex gap-2 bg-white rounded-[1rem] p-4 items-center w-1/3 shadow-lg'>
  <div>
    <Image 
      src={hotel5} 
      alt=''
      className='rounded-[1rem] h-36 w-48 object-cover'
    />
  </div>

  <div className='flex flex-col'>
    <div className='flex items-center gap-[2rem]'>
      <p className='text-[.9rem] font-semibold'>London, UK</p>
      <div className='flex items-center gap-1'>
        <span className='text-yellow-500'>
            <Star />
        </span>
        <span className='text-sm font-semibold'>4/5</span>
      </div>
    </div>
    
    <p>London is one of the most beautiful places to visit that ...</p>
    <p className='text-green-600 font-semibold'>$450,000.00</p>
  </div>
</div>

     </div>
{/******** hotel rooms image cards **********/}
     
     <div className='flex justify-between mt-4 '>
        <h3 className='text-[1.1rem]'>Best Offers</h3>
        <div className='flex gap-1 items-center'>
            <div className='bg-gray-200 rounded-full w-2 h-2'></div>
            <div className='bg-black rounded-full w-3 h-3'></div>
            <div className='bg-gray-200 rounded-full w-2 h-2'></div>
        </div>
       <h3>View All</h3>
     </div>

{/******** best offers image cards **********/}
     <div className='mt-4 flex gap-[2rem]'>
     <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] w-1/5 pb-[.6rem]'>
        <Image src={hotel7} alt='' className='rounded-[1rem]'/>
        <p className='mt-2 text-[.9rem]'>7Seasons Apartments</p>
        <div className='flex gap-2 items-center'>
            <MapPin />
            <p className='text-gray-500 text-[.6rem py-[.5rem]'>Kensington / London</p>
        </div>
        <div className='flex justify-between items-center'>
         <p>$65,00 / night</p>
         <button className='border border-gray-300 rounded-[.5rem] px-[.3rem] py-[.2rem]'>
            <Heart />
         </button>
        </div>
     </div>
     <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] w-1/5 pb-[.6rem]'>
     <Image src={hotel8} alt='' className='rounded-[1rem] '/>
        <p className='mt-2 text-[.9rem]'>Along With The Villa</p>
        <div className='flex gap-2 items-center'>
            <MapPin />
            <p className='text-gray-500 text-[.6rem py-[.5rem]'>Hungary / Budapest</p>
        </div>
        <div className='flex justify-between items-center'>
         <p>$65,00 / night</p>
         <button className='border border-gray-300 rounded-[.5rem] px-[.3rem] py-[.2rem]'>
            <Heart />
         </button>
        </div>
     </div>
     <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] w-1/5 pb-[.6rem]'>
     <Image src={hotel9} alt='' className='rounded-[1rem] h-[150px]' />
        <p className='mt-2 text-[.9rem]'>Resort and Recreation</p>
        <div className='flex gap-2 items-center'>
            <MapPin />
            <p className='text-gray-500 text-[.6rem py-[.5rem]'>Williamstreet / Boxon</p>
        </div>
        <div className='flex justify-between items-center'>
         <p>$65,00 / night</p>
         <button className='border border-gray-300 rounded-[.5rem] px-[.3rem] py-[.2rem]'>
          <Heart />
         </button>
        </div>
     </div>
     <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] w-1/5 pb-[.6rem]'>
     <Image src={hotel10} alt='' className='rounded-[1rem]'/>
        <p className='mt-2 text-[.9rem]'>Beautiful and Classy</p>
        <div className='flex gap-2 items-center'>
            <MapPin />
            <p className='text-gray-500 text-[.6rem py-[.5rem]'>C O, Paris / France</p>
        </div>
        <div className='flex justify-between items-center'>
         <p>$65,00 / night</p>
         <button className='border border-gray-300 rounded-[.5rem] px-[.3rem] py-[.2rem]'>
          <Heart />
         </button>
        </div>
     </div>
     <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] pb-[.6rem] w-1/5'>
     <Image src={hotel11} alt='' className='rounded-[1rem] '/>
        <p className='mt-2 text-[.9rem]'>Permanent Peace</p>
        <div className='flex gap-2 items-center'>
            <MapPin />
            <p className='text-gray-500 text-[.6rem py-[.5rem]'>S A / Brazil</p>
        </div>
        <div className='flex justify-between items-center'>
         <p>$79,00 / night</p>
         <button className='border border-gray-300 rounded-[.5rem] px-[.3rem] py-[.2rem]'>
          <Heart />
         </button>
        </div>
     </div>
     </div>
{/******** best offers image cards **********/}
     <h2 className='mt-[4rem] text-[1.1rem]'>Explore France</h2>

    <div className='flex gap-2'>
        <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] w-1/3 gap-2 flex h-[200px]'>
            <Image  src={hotel12} alt='' className='w-36 h-36 object-cover rounded-[1rem]'/>

            <div>
                <h4 className='underline'>Eiffel Tower, Paris, France</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, hic?</p>
            </div>
        </div>
        <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] w-1/3 gap-2 flex h-[200px]'>
            <Image src={hotel13} alt='' className='w-36 h-36 h-36 object-cover rounded-[1rem]'/>

            <div>
                <h4>L'Arc de Triomphe de l'Etoile</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, hic?</p>
            </div>
        </div>
        <div className='bg-white shadow-lg px-[.6rem] pt-[.5rem] rounded-[1rem] w-1/3 gap-2 flex h-[200px]'>
            <Image src={hotel14} alt='' className='w-36 h-36 object-cover rounded-[1rem]'/>

            <div>
                <h4>Paris, France</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, hic?</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default FirstLayer;
