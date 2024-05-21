import React from 'react'
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className=' px-0 lg:px-0 w-full bg-blue-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md;w-1/2 space-y-8 h-full'>
          <h2 className='px-4 text-5xl font-bold leading-snug text-black'>
          BOOKS FOR <span className='text-blue-700'> ALL.</span></h2>
          <p className=' px-5 md:w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam illum quasi, explicabo beatae eligendi atque autem natus, asperiores vel ad quod maxime aperiam veritatis labore enim dignissimos recusandae! Dolorem.</p>
          <div>
            <input type='text' name='search' id='search' placeholder='Serach a book' className='ml-5 py-2 px-2 rounded-s-sm outline-none'/>
            <button className=' bg-blue-500 px-6 py-2 text-white font-medium hover:bg-blue-700 tansition-all ease-in duration-200'>Search</button>
          </div>
          </div>
        <div><BannerCard></BannerCard></div>
      </div>
    </div>
  )
}



export default Banner;
