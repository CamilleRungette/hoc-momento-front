import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import {MdArrowBackIosNew, MdOutlineArrowForwardIos} from "react-icons/md"

const CarouselComp = ({gallery, autoplay}) => {

  console.log(gallery);

  return (
    <div className='carousel-comp-main'>

      <Carousel
          interval={7000}
          className="carousel"
          navButtonsAlwaysVisible={true}
          PrevIcon={<MdArrowBackIosNew/>}
          NextIcon={<MdOutlineArrowForwardIos/>}
          autoPlay={autoplay}
          >
            {
                gallery.map( (item, i) => <Item key={i} item={item.image ? item.image : item} /> )
            }
        </Carousel>
      
    </div>
  )
};

export default CarouselComp;

function Item(props)
{
    return (
        <Paper className='paper-carousel'>
          {/* <img src={props.item} /> */}
        </Paper>
    )
}
