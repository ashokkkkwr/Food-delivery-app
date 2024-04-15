import React from 'react'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import Category1 from '../components/Category1'
import Category2 from '../components/Category2'

import Footer from '../components/Footer';
import SecondCarousel from '../components/SecondCarousal'

export default function Home1() {
  return (
    <div>
      <Carousel />
      <Category />
      <Category1 />
      <Category2/>
     <SecondCarousel/>
      <Footer/>
    </div>
    
  )
}
