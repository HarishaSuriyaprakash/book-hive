import React from 'react'
import FavBookImg from "../assets/favbook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt='' className='rounded md:w-10/12' />
        </div>

        <div className='md:w-1/2 space-y-6'>
          <h2 className='text-5xl font-bold my-5 md:w-3/4 leading snug'>Find Your Favorite 
          <span className='text-blue-700'>Book Here!</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, blanditiis, reiciendis excepturi quis dolores tenetur aperiam eos cumque aliquid temporibus ipsum autem eligendi! Alias numquam similique labore architecto eos possimus!</p>
          {/* stats */}
          <div className='flex flex-col sm:flex-row justify-between gap-1 md:w-3/4 my-14'>
            <div>
              <h3 className='text-3xl font-bold'>800+</h3>
              <p className='text-base'>Books</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold'>500+</h3>
              <p className='text-base'>PDFs</p>
            </div>
            <div>
              <h3 className='text-3xl font-bold'>200+</h3>
              <p className='text-base'>E-Books</p>
              </div>

              <Link to="/shop" className="mt-12 block">
                <button className='bg-blue-700 text-white font-semibold px-3 py-2 rounded hover:bg-blue-500 transition-all duration-300'>Explore now</button></Link>
  
          </div>
        </div>


    </div>
  )
}

export default FavBook