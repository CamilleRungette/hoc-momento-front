import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { BsDownload } from "react-icons/bs";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


const CarouselComp = ({gallery, autoplay}) => {

  return (
    <div className='carousel-comp-main'>

      <Carousel
          interval={7000}
          className="carousel"
          navButtonsAlwaysVisible={true}
          PrevIcon={<FiArrowLeft/>}
          NextIcon={<FiArrowRight/>}
          autoPlay={autoplay}
          >
            {
                gallery.map( (item, i) => <Item key={i} item={item} /> )
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
          <img src={props.item} />
        </Paper>
    )
}
