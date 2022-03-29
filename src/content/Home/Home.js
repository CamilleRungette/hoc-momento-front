import React from 'react';
import { CarouselData } from './Carousel/CarouselData';
import {Carousel, Lines1, Lines2, HomeFooter, NavbarHome} from "./_index";


const Home = () => {

  return (
    <div className='home-main'>
      <NavbarHome />
      <div className='carousel-div'>
        <Carousel slides={CarouselData} />
      </div>

      <div className='home-lines1'>
        <Lines1 />
      </div>

      <div className='quote'>
        <p>Hoc Momento est une compagnie internationale et pluridisciplinaire qui désire dépasser la séparation entre théâtre d'art et théâtre militant</p>
      </div>

      <div className='home-lines2'>
        <Lines2/>
      </div>

      <HomeFooter/>
    </div>
  )
}; 

export default Home;