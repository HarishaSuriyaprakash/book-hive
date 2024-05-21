import React from 'react'
import Banner from '../components/Banner';
import BestSellers from './BestSellers';
import FavBook from './FavBook';
import OtherBooks from './OtherBooks';

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellers/>
      <FavBook/>
      <OtherBooks/>
    </div>

      
  )
}

export default Home;