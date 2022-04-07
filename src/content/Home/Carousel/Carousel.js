import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import {MdArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md"

const CarouselComp = ({gallery}) => {
console.log(gallery);
  return (
    <div>
      <Carousel
          interval={7000}
          className="carousel"
          navButtonsAlwaysVisible={true}
          PrevIcon={<MdArrowBackIosNew/>}
          NextIcon={<MdOutlineArrowForwardIos/>}
          autoPlay={false}
          indicators={false}
          >
            {
                gallery.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      
    </div>
  )
};

export default CarouselComp;

function Item({item})
{
    return (
        <Paper className='paper-carousel'>
          <img src={item.image} />
          <div className='text'>
            <h1 className='title' >{item.title}</h1>
            <p className='subtitle' style={{color: item.color}}>{item.subtitle} </p>
          </div>
        </Paper>
    )
}
