import React, {useState} from 'react'
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
      <MdArrowBackIosNew className='left-arrow pointer' onClick={prevSlide} />
      <MdOutlineArrowForwardIos className='right-arrow pointer' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}> 
            {index === current && ( 
              <img src={slide.image} alt="travel" className='carousel-item' />
            )}
          </div>
          )
      })}
    </section>
  )
}

export default Carousel;