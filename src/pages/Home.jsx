import React from 'react'
import Banner from '../components/Banner'
import Sale from '../components/Sale'
import Explore  from '../components/Explore'
import image from '../assets/bannerImages/sale.webp';
import image2 from '../assets/bannerImages/s3.webp';
import BestProducts from '../components/BestProducts';
import Map from '../components/Map'

const Home = () => {
  return (
    <div>
      <Banner/>
     <Sale />
     <div className='relative overflow-hidden h-[40vh] w-full'>
<img src= {image} className=' object-center object-cover w-full h-full ' />
    </div>
     <Explore />
    <div className='relative overflow-hidden h-[40vh] w-full'>
<img src= {image2} className=' object-center object-cover w-full h-full ' />
    </div>
   <BestProducts/>
   <Map />
    </div>
  )
}

export default Home