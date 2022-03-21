import React from 'react';
import { CarouselData } from './Carousel/CarouselData';
import {Carousel, Lines1} from "./_index";

const Home = () => {

  return (
    <div className='home-main'>
      <Carousel slides={CarouselData} />
      <Lines1/>
    </div>
  )
}; 

export default Home;