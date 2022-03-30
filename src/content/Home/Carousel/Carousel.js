import React, {useState, useEffect} from 'react'
import {MdArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md"

const Carousel = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;


  if (!Array.isArray(slides) || slides.length <=0 ){
    return null
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  };

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };
 

  return (
    <section className='carousel-main'>
      {slides.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}> 
            {index === current && (
              <div className='carousel-div'>
                <MdArrowBackIosNew className='left-arrow pointer' onClick={prevSlide} />
                <MdOutlineArrowForwardIos className='right-arrow pointer' onClick={nextSlide} />
                <img src={slide.image} alt="travel" className='carousel-item' />
                <div className='text'>
                  <h2 className='title'>{slide.title}</h2>
                  <p className='subtitle'>{slide.subtitle} </p>
                </div>
              </div>
            )}
          </div>
          );
      })}
    </section>
  )
}

export default Carousel;